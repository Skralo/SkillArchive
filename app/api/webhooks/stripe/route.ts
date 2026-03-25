import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const signature = req.headers.get("stripe-signature");
  const body = await req.text();

  return NextResponse.json({
    received: true,
    signaturePresent: Boolean(signature),
    note: "Hook this route to order finalization + file delivery unlock in production.",
    bytes: body.length
  });
}
