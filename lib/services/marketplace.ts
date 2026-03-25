import { badges, categories, featuredSlots, industries, listings, proofItems, reviews, sellerProfiles } from "@/lib/data/seed";

export function getHomepageData() {
  return {
    categories,
    featuredListings: listings.filter((l) => l.moderationStatus === "approved").slice(0, 3),
    featuredSellers: sellerProfiles,
    badges,
    leaderboard: [...listings].sort((a, b) => b.stats.sales - a.stats.sales).slice(0, 5)
  };
}

export function getMarketplaceData() {
  return {
    listings: listings.filter((l) => l.moderationStatus === "approved"),
    categories,
    industries,
    featuredSlots
  };
}

export function getListingById(id: string) {
  const listing = listings.find((l) => l.id === id);
  if (!listing) return null;
  return {
    listing,
    seller: sellerProfiles.find((s) => s.id === listing.sellerId) ?? null,
    proof: proofItems.filter((p) => p.listingId === id),
    reviews: reviews.filter((r) => r.listingId === id),
    related: listings.filter((l) => l.categoryId === listing.categoryId && l.id !== id).slice(0, 3)
  };
}

export function getSellerBySlug(slug: string) {
  const seller = sellerProfiles.find((s) => s.slug === slug);
  if (!seller) return null;
  return {
    seller,
    listings: listings.filter((l) => l.sellerId === seller.id && l.moderationStatus === "approved")
  };
}
