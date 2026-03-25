import { ListingCard } from "@/components/listing/listing-card";
import { SellerCard } from "@/components/seller/seller-card";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { getHomepageData } from "@/lib/services/marketplace";

export default function HomePage() {
  const data = getHomepageData();

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-12">
      <section className="relative overflow-hidden rounded-2xl border border-border bg-panel p-10">
        <div className="scanline absolute inset-0" />
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-neon-blue">Claude-first premium marketplace</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          Turn Claude from a generic AI into a specialized business operator.
        </h1>
        <p className="mt-5 max-w-2xl text-zinc-300">
          Buy and sell verified skill packages built from real workflows, measurable outcomes, and operational lessons.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/marketplace">Explore Skills</ButtonLink>
          <ButtonLink href="/seller/dashboard" variant="secondary">
            Become a Seller
          </ButtonLink>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Skills</h2>
          <ButtonLink href="/marketplace" variant="ghost">
            View all
          </ButtonLink>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.featuredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {data.categories.map((category) => (
          <div key={category.id} className="rounded-xl border border-border bg-panel p-5">
            <h3 className="font-semibold">{category.name}</h3>
            <p className="mt-2 text-sm text-zinc-400">{category.description}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-panel p-6">
          <h2 className="mb-4 text-2xl font-semibold">Trust & Proof Engine</h2>
          <div className="flex flex-wrap gap-2">
            {data.badges.map((badge) => (
              <Badge key={badge.id} text={badge.label} tone="success" />
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-300">
            Every listing is AI pre-reviewed and manually approved before going live. Verified purchase reviews, proof assets,
            and seller credibility signals stay visible at point of purchase.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-panel p-6">
          <h2 className="mb-4 text-2xl font-semibold">How it works</h2>
          <ol className="space-y-3 text-sm text-zinc-300">
            <li>1. Discover verified packages by category, use case, and proof quality.</li>
            <li>2. Review seller trust profile, evidence, examples, and setup guidance.</li>
            <li>3. Buy once, download instantly, and install a higher-performing Claude workflow.</li>
          </ol>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Featured Operators</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {data.featuredSellers.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-panel p-8 text-center">
        <h2 className="text-2xl font-semibold">Why SkillArcade exists</h2>
        <p className="mx-auto mt-3 max-w-3xl text-zinc-300">
          Businesses should not waste cycles reinventing prompts. Skill packages deliver compressed operator intelligence that
          ships faster outcomes.
        </p>
        <ButtonLink href="/auth/register" className="mt-6">
          Join SkillArcade
        </ButtonLink>
      </section>
    </div>
  );
}
