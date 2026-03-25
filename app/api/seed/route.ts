import { NextResponse } from "next/server";
import { badges, categories, industries, listings, reviews, sellerProfiles, users } from "@/lib/data/seed";

export async function GET() {
  return NextResponse.json({
    users,
    sellerProfiles,
    listings,
    reviews,
    categories,
    industries,
    badges
  });
}
