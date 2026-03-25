import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2025-02-24.acacia"
});

export const PLATFORM_COMMISSION_RATE = 0.15;
export const PAYOUT_HOLD_DAYS = 10;

export function calculatePlatformFee(amountCents: number) {
  return Math.round(amountCents * PLATFORM_COMMISSION_RATE);
}

export function payoutEligibleDate(createdAt = new Date()) {
  const d = new Date(createdAt);
  d.setDate(d.getDate() + PAYOUT_HOLD_DAYS);
  return d.toISOString();
}
