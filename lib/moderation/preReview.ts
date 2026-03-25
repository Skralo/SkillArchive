import { Listing, PreReviewResult } from "@/lib/types";

const spamTerms = ["guaranteed millionaire", "instant riches", "1000x in a day", "click here now"];

export function runPreReview(listing: Partial<Listing>): PreReviewResult {
  const missingFields: string[] = [];
  const required: (keyof Listing)[] = [
    "title",
    "description",
    "shortPromise",
    "categoryId",
    "industryId",
    "targetUseCase",
    "modelCompatibility",
    "resultProof",
    "files",
    "priceCents"
  ];

  required.forEach((field) => {
    if (!listing[field]) {
      missingFields.push(field);
    }
  });

  const haystack = `${listing.title ?? ""} ${listing.description ?? ""} ${listing.resultProof ?? ""}`.toLowerCase();
  const suspiciousClaims = spamTerms.filter((term) => haystack.includes(term));

  const proofQuality: PreReviewResult["proofQuality"] = listing.resultProof && listing.resultProof.length > 80 ? "high" : "medium";
  const spamRisk: PreReviewResult["spamRisk"] = suspiciousClaims.length ? "high" : missingFields.length > 3 ? "medium" : "low";

  const qualityScore = Math.max(10, 100 - missingFields.length * 8 - suspiciousClaims.length * 15);

  return {
    qualityScore,
    spamRisk,
    missingFields,
    suspiciousClaims,
    proofQuality,
    notes: [
      spamRisk === "high" ? "Contains suspicious promotional language." : "No severe spam language patterns detected.",
      proofQuality === "high" ? "Proof detail appears substantive for admin review." : "Proof section may need stronger measurable evidence."
    ],
    readyForModeration: missingFields.length === 0 && spamRisk !== "high"
  };
}
