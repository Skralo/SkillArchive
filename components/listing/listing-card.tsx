import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Listing } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="rounded-xl border border-border bg-panel p-5 transition hover:-translate-y-0.5 hover:shadow-glow">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{listing.title}</h3>
        <Badge text={`${listing.stats.rating.toFixed(1)}★`} tone="success" />
      </div>
      <p className="mb-3 text-sm text-zinc-300">{listing.shortPromise}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {listing.trustBadgeIds.length > 0 && <Badge text="Verified Listing" tone="success" />}
        <Badge text={listing.targetUseCase} />
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold text-neon-blue">{formatPrice(listing.priceCents / 100)}</p>
        <ButtonLink href={`/listing/${listing.id}`} variant="secondary">
          View Skill
        </ButtonLink>
      </div>
    </article>
  );
}
