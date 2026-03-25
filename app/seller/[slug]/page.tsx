import Image from "next/image";
import { ListingCard } from "@/components/listing/listing-card";
import { Badge } from "@/components/ui/badge";
import { getSellerBySlug } from "@/lib/services/marketplace";
import { notFound } from "next/navigation";

export default async function SellerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getSellerBySlug(slug);
  if (!data) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <section className="rounded-xl border border-border bg-panel p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <Image src={data.seller.avatarUrl} width={88} height={88} alt={data.seller.displayName} className="rounded-full" />
          <div>
            <h1 className="text-3xl font-semibold">{data.seller.displayName}</h1>
            <p className="text-zinc-300">{data.seller.headline}</p>
            <div className="mt-2 flex gap-2">
              <Badge text={`${data.seller.totalSales} sales`} />
              <Badge text={`${data.seller.averageRating.toFixed(1)} rating`} tone="success" />
            </div>
          </div>
        </div>
        <p className="mt-4 text-zinc-300">{data.seller.bio}</p>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold">Live skill packages</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {data.listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
    </div>
  );
}
