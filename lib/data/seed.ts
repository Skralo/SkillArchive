import {
  Badge,
  Category,
  FeaturedSlot,
  Industry,
  Listing,
  ProofItem,
  Review,
  SellerProfile,
  User
} from "@/lib/types";

const now = new Date().toISOString();

export const categories: Category[] = [
  { id: "sales", name: "Sales", description: "Close deals and improve conversion workflows." },
  { id: "lead-generation", name: "Lead Generation", description: "Source and qualify the right pipeline." },
  { id: "outreach", name: "Outreach", description: "Craft outreach that gets serious replies." },
  { id: "founder-os", name: "Founder OS", description: "Run company operations with clear decision support." }
];

export const industries: Industry[] = [
  { id: "saas", name: "B2B SaaS" },
  { id: "agencies", name: "Agencies" },
  { id: "services", name: "Professional Services" },
  { id: "ecommerce", name: "E-commerce" }
];

export const badges: Badge[] = [
  { id: "b1", key: "verified_identity", label: "Verified Identity", description: "Identity checks completed.", icon: "ShieldCheck" },
  { id: "b2", key: "connected_profile", label: "Connected Profile", description: "External profiles connected.", icon: "Globe" },
  { id: "b3", key: "proof_submitted", label: "Proof Submitted", description: "Operational proof uploaded.", icon: "FileCheck" },
  { id: "b4", key: "verified_listing", label: "Verified Listing", description: "Admin-reviewed quality listing.", icon: "BadgeCheck" },
  { id: "b5", key: "top_rated", label: "Top Rated", description: "Consistent buyer feedback.", icon: "Star" },
  { id: "b6", key: "top_seller", label: "Top Seller", description: "High sales with strong outcomes.", icon: "Trophy" },
  { id: "b7", key: "featured_operator", label: "Featured Operator", description: "Editorially selected creator.", icon: "Sparkles" }
];

export const users: User[] = [
  { id: "u1", email: "maya@skillarcade.dev", displayName: "Maya Stone", roles: ["seller"], createdAt: now },
  { id: "u2", email: "devin@skillarcade.dev", displayName: "Devin Hall", roles: ["seller"], createdAt: now },
  { id: "u3", email: "alex@skillarcade.dev", displayName: "Alex Kim", roles: ["buyer"], createdAt: now },
  { id: "u4", email: "admin@skillarcade.dev", displayName: "Admin", roles: ["admin"], createdAt: now }
];

export const sellerProfiles: SellerProfile[] = [
  {
    id: "s1",
    userId: "u1",
    slug: "maya-stone",
    displayName: "Maya Stone",
    headline: "Revenue systems operator for B2B founders",
    bio: "I build Claude skill packages from real outbound and deal desk workflows used across 20+ GTM teams.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    externalProfiles: [{ label: "LinkedIn", url: "https://linkedin.com" }],
    badgeIds: ["b1", "b2", "b4", "b5"],
    totalSales: 302,
    averageRating: 4.8,
    reviewCount: 71,
    createdAt: now
  },
  {
    id: "s2",
    userId: "u2",
    slug: "devin-hall",
    displayName: "Devin Hall",
    headline: "Founder operating system architect",
    bio: "Former COO turned AI operator helping founders install repeatable decision and execution systems.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    externalProfiles: [{ label: "X", url: "https://x.com" }],
    badgeIds: ["b1", "b3", "b4", "b7"],
    totalSales: 189,
    averageRating: 4.9,
    reviewCount: 49,
    createdAt: now
  }
];

export const listings: Listing[] = [
  {
    id: "l1",
    sellerId: "s1",
    title: "Sales Reply Optimization Engine",
    shortPromise: "Turn raw inbound replies into conversion-ready next steps in minutes.",
    description: "A Claude-first sales response system for founders and AEs handling B2B sales cycles.",
    categoryId: "sales",
    industryId: "saas",
    targetUseCase: "Handle inbound objections and craft persuasive response sequences.",
    modelCompatibility: ["Claude 3.7 Sonnet", "Claude 3 Opus"],
    resultProof: "Used in 3 SaaS teams to improve qualified meeting-to-opportunity conversion by 21%.",
    whoFor: "Founders, AEs, RevOps leads with recurring inbound conversations.",
    whoNotFor: "One-off personal use or B2C social DM campaigns.",
    priceCents: 12900,
    currency: "USD",
    moderationStatus: "approved",
    files: {
      skillMdPath: "skills/l1/skill.md",
      setupGuidePath: "skills/l1/setup.md",
      examplesPath: "skills/l1/examples.md",
      caseStudyPath: "skills/l1/case-study.md"
    },
    trustBadgeIds: ["b4", "b5"],
    tags: ["sales", "objection-handling", "pipeline"],
    stats: { views: 3310, sales: 144, rating: 4.9, reviewCount: 39, proofScore: 92 },
    optionalFields: {
      caseStudy: "SaaS founder moved from 11% to 17% close rate in 8 weeks.",
      lessonsLearned: "Most gains came from tighter follow-up framing.",
      creatorNote: "Update monthly with new objection libraries.",
      supportLink: "https://skillarcade.dev/support"
    },
    createdAt: now,
    updatedAt: now,
    publishedAt: now
  },
  {
    id: "l2",
    sellerId: "s2",
    title: "Founder Meeting Summary Operator",
    shortPromise: "Convert noisy founder calls into decisions, owners, and next actions instantly.",
    description: "Installs a structured operator workflow that turns Claude into a meeting-to-execution copilot.",
    categoryId: "founder-os",
    industryId: "services",
    targetUseCase: "Digest weekly leadership calls into strategic action plans.",
    modelCompatibility: ["Claude 3.7 Sonnet"],
    resultProof: "Reduced missed action items by 43% over 60 days in ops-heavy founder teams.",
    priceCents: 9900,
    currency: "USD",
    moderationStatus: "approved",
    files: {
      skillMdPath: "skills/l2/skill.md",
      setupGuidePath: "skills/l2/setup.md",
      examplesPath: "skills/l2/examples.md"
    },
    trustBadgeIds: ["b4", "b7"],
    tags: ["founder", "meetings", "operations"],
    stats: { views: 2541, sales: 97, rating: 4.8, reviewCount: 28, proofScore: 88 },
    createdAt: now,
    updatedAt: now,
    publishedAt: now
  },
  {
    id: "l3",
    sellerId: "s1",
    title: "Lead Qualification Scorecard Skill",
    shortPromise: "Disqualify bad leads early and prioritize high-intent pipeline.",
    description: "A lead triage system grounded in ICP fit, trigger events, urgency, and revenue potential.",
    categoryId: "lead-generation",
    industryId: "agencies",
    targetUseCase: "Score incoming leads and output recommended action route.",
    modelCompatibility: ["Claude 3.7 Sonnet", "Claude 3 Haiku"],
    resultProof: "Agency reduced wasted discovery calls by 35% within first month.",
    priceCents: 7900,
    currency: "USD",
    moderationStatus: "submitted",
    files: {
      skillMdPath: "skills/l3/skill.md",
      setupGuidePath: "skills/l3/setup.md",
      examplesPath: "skills/l3/examples.md"
    },
    trustBadgeIds: ["b3"],
    tags: ["lead-scoring", "qualification"],
    stats: { views: 931, sales: 19, rating: 4.5, reviewCount: 10, proofScore: 73 },
    createdAt: now,
    updatedAt: now
  }
];

export const proofItems: ProofItem[] = [
  {
    id: "p1",
    listingId: "l1",
    type: "screenshot",
    title: "CRM conversion dashboard",
    description: "Annotated screenshot showing improvement in positive response rate.",
    verified: true
  },
  {
    id: "p2",
    listingId: "l2",
    type: "case_study",
    title: "Ops cadence case study",
    description: "Detailed before/after operational metrics and adoption path.",
    verified: true
  }
];

export const reviews: Review[] = [
  {
    id: "r1",
    listingId: "l1",
    buyerId: "u3",
    orderId: "o1",
    rating: 5,
    text: "This made our founders' reply quality noticeably tighter in one week.",
    createdAt: now
  },
  {
    id: "r2",
    listingId: "l2",
    buyerId: "u3",
    orderId: "o2",
    rating: 5,
    text: "Best founder workflow package we've bought. Immediate operational clarity.",
    createdAt: now
  }
];

export const featuredSlots: FeaturedSlot[] = [
  {
    id: "f1",
    listingId: "l1",
    slotType: "hero",
    startsAt: now,
    endsAt: "2026-12-31T00:00:00.000Z"
  },
  {
    id: "f2",
    listingId: "l2",
    slotType: "leaderboard",
    startsAt: now,
    endsAt: "2026-12-31T00:00:00.000Z"
  }
];
