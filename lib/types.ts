export type UserRole = "buyer" | "seller" | "admin";
export type ModerationStatus = "draft" | "submitted" | "needs_changes" | "approved" | "rejected" | "suspended";

export interface User {
  id: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
  roles: UserRole[];
  createdAt: string;
  lastLoginAt?: string;
}

export interface Badge {
  id: string;
  key:
    | "verified_identity"
    | "connected_profile"
    | "proof_submitted"
    | "verified_listing"
    | "top_rated"
    | "top_seller"
    | "featured_operator";
  label: string;
  description: string;
  icon: string;
}

export interface SellerProfile {
  id: string;
  userId: string;
  slug: string;
  displayName: string;
  headline: string;
  bio: string;
  avatarUrl: string;
  externalProfiles: { label: string; url: string }[];
  badgeIds: string[];
  totalSales: number;
  averageRating: number;
  reviewCount: number;
  createdAt: string;
}

export interface ListingFiles {
  skillMdPath: string;
  setupGuidePath: string;
  examplesPath: string;
  caseStudyPath?: string;
}

export interface ProofItem {
  id: string;
  listingId: string;
  type: "screenshot" | "case_study" | "review";
  title: string;
  description: string;
  url?: string;
  verified: boolean;
}

export interface Listing {
  id: string;
  sellerId: string;
  title: string;
  shortPromise: string;
  description: string;
  categoryId: string;
  industryId: string;
  targetUseCase: string;
  modelCompatibility: string[];
  resultProof: string;
  whoFor?: string;
  whoNotFor?: string;
  priceCents: number;
  currency: "USD";
  moderationStatus: ModerationStatus;
  publishedAt?: string;
  files: ListingFiles;
  trustBadgeIds: string[];
  tags: string[];
  stats: {
    views: number;
    sales: number;
    rating: number;
    reviewCount: number;
    proofScore: number;
  };
  optionalFields?: {
    caseStudy?: string;
    lessonsLearned?: string;
    creatorNote?: string;
    supportLink?: string;
    bundleRecommendation?: string;
    serviceUpsell?: string;
    versionNotes?: string;
  };
  aiReview?: PreReviewResult;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  listingId: string;
  buyerId: string;
  orderId: string;
  rating: number;
  text: string;
  createdAt: string;
}

export interface Order {
  id: string;
  listingId: string;
  sellerId: string;
  buyerId: string;
  amountCents: number;
  platformFeeCents: number;
  payoutAmountCents: number;
  stripePaymentIntentId: string;
  payoutEligibleAt: string;
  refundStatus: "none" | "requested" | "approved" | "denied";
  status: "pending" | "paid" | "failed" | "refunded";
  createdAt: string;
}

export interface Payout {
  id: string;
  sellerId: string;
  orderIds: string[];
  amountCents: number;
  status: "pending" | "in_transit" | "paid" | "failed";
  estimatedArrival: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Industry {
  id: string;
  name: string;
}

export interface FeaturedSlot {
  id: string;
  listingId: string;
  slotType: "hero" | "marketplace" | "leaderboard";
  startsAt: string;
  endsAt: string;
}

export interface Bundle {
  id: string;
  sellerId: string;
  listingIds: string[];
  title: string;
  discountPercent: number;
}

export interface VerificationRequest {
  id: string;
  sellerId: string;
  type: "identity" | "proof" | "profile";
  status: "pending" | "approved" | "rejected";
  notes?: string;
}

export interface SavedListing {
  id: string;
  userId: string;
  listingId: string;
  createdAt: string;
}

export interface Report {
  id: string;
  listingId: string;
  reporterId: string;
  reason: string;
  status: "open" | "resolved";
}

export interface PreReviewResult {
  qualityScore: number;
  spamRisk: "low" | "medium" | "high";
  missingFields: string[];
  suspiciousClaims: string[];
  proofQuality: "low" | "medium" | "high";
  notes: string[];
  readyForModeration: boolean;
}
