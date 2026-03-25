import { NextRequest, NextResponse } from "next/server";
import { runPreReview } from "@/lib/moderation/preReview";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const preReview = runPreReview(payload);

  return NextResponse.json({
    listingId: `draft_${Date.now()}`,
    moderationStatus: preReview.readyForModeration ? "submitted" : "needs_changes",
    preReview
  });
}
