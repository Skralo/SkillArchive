import { NextRequest, NextResponse } from "next/server";
import { runPreReview } from "@/lib/moderation/preReview";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const result = runPreReview(payload);
  return NextResponse.json(result);
}
