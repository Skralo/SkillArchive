import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { getListingById } from "@/lib/services/marketplace";
import { formatPrice } from "@/lib/utils";

export default async function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = getListingById(id);

  if (!data) notFound();

  const { listing, seller, proof, reviews, related } = data;

  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 lg:grid-cols-[1fr_340px]">
      <div className="space-y-6">
        <section className="rounded-xl border border-border bg-panel p-6">
          <h1 className="text-3xl font-semibold">{listing.title}</h1>
          <p className="mt-2 text-neon-blue">{listing.shortPromise}</p>
          <p className="mt-4 text-zinc-300">{listing.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge text={listing.targetUseCase} />
            <Badge text={listing.categoryId} />
            <Badge text={listing.industryId} />
            <Badge text="Verified Listing" tone="success" />
          </div>
        </section>

        <section className="rounded-xl border border-border bg-panel p-6">
          <h2 className="text-xl font-semibold">Proof & outcomes</h2>
          <p className="mt-2 text-sm text-zinc-300">{listing.resultProof}</p>
          <div className="mt-4 space-y-2 text-sm text-zinc-300">
            {proof.map((item) => (
              <p key={item.id}>• {item.title}: {item.description}</p>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-border bg-panel p-6">
          <h2 className="text-xl font-semibold">Package contents</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>• skill.md</li>
            <li>• Setup guide preview</li>
            <li>• Input/output examples</li>
            <li>• Creator notes and optional case study</li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-panel p-6">
          <h2 className="text-xl font-semibold">Verified purchase reviews</h2>
          <div className="mt-3 space-y-3">
            {reviews.map((review) => (
              <div key={review.id} className="rounded-lg border border-border p-3 text-sm">
                <p className="text-neon-blue">{review.rating}★</p>
                <p className="text-zinc-300">{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">Related skills</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {related.map((item) => (
              <a key={item.id} href={`/listing/${item.id}`} className="rounded-lg border border-border bg-panel p-4">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-zinc-400">{item.shortPromise}</p>
              </a>
            ))}
          </div>
        </section>
      </div>

      <aside className="h-fit rounded-xl border border-border bg-panel p-6">
        <p className="text-2xl font-semibold text-neon-blue">{formatPrice(listing.priceCents / 100)}</p>
        <p className="mt-2 text-sm text-zinc-300">Seller: {seller?.displayName}</p>
        <p className="text-xs text-zinc-500">Model compatibility: {listing.modelCompatibility.join(", ")}</p>
        <ButtonLink href={`/checkout?listing=${listing.id}`} className="mt-5 w-full">
          Buy Skill Package
        </ButtonLink>
      </aside>
    </div>
  );
}
