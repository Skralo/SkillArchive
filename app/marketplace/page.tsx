import { ListingCard } from "@/components/listing/listing-card";
import { Badge } from "@/components/ui/badge";
import { getMarketplaceData } from "@/lib/services/marketplace";

export default function MarketplacePage() {
  const { listings, categories, industries } = getMarketplaceData();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Marketplace</h1>
      <p className="mt-2 text-zinc-300">Explore verified Claude skill packages by category, industry, and trust score.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-4 rounded-xl border border-border bg-panel p-4">
          <div>
            <h2 className="mb-2 text-sm font-semibold">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <Badge key={c.id} text={c.name} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold">Industries</h2>
            <div className="flex flex-wrap gap-2">
              {industries.map((i) => (
                <Badge key={i.id} text={i.name} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold">Ranking</h2>
            <div className="flex flex-wrap gap-2">
              <Badge text="Top Rated" tone="success" />
              <Badge text="Proof Quality" />
              <Badge text="Sales Volume" />
              <Badge text="Verified Only" tone="warning" />
            </div>
          </div>
        </aside>

        <section className="grid gap-5 md:grid-cols-2">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </section>
      </div>
    </div>
  );
}
