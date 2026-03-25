import { NextRequest, NextResponse } from "next/server";
import { calculatePlatformFee, payoutEligibleDate, stripe } from "@/lib/payments/stripe";

export async function POST(req: NextRequest) {
  const { amountCents, listingId, sellerStripeAccountId } = await req.json();
  const fee = calculatePlatformFee(amountCents);

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      {
        ok: false,
        message: "Stripe key missing. Configure STRIPE_SECRET_KEY.",
        listingId,
        platformFeeCents: fee,
        payoutEligibleAt: payoutEligibleDate()
      },
      { status: 400 }
    );
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountCents,
    currency: "usd",
    application_fee_amount: fee,
    transfer_data: {
      destination: sellerStripeAccountId
    },
    metadata: {
      listingId
    }
  });

  return NextResponse.json({
    ok: true,
    clientSecret: paymentIntent.client_secret,
    platformFeeCents: fee,
    payoutEligibleAt: payoutEligibleDate()
  });
}
