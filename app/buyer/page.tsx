import { StatCard } from "@/components/dashboard/stat-card";
import { ButtonLink } from "@/components/ui/button";
import { listings } from "@/lib/data/seed";
import { formatDate } from "@/lib/utils";

export default function BuyerDashboardPage() {
  const purchased = listings.slice(0, 2);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Buyer Dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <StatCard label="Purchased Skills" value="7" />
        <StatCard label="Saved Listings" value="14" />
        <StatCard label="Reviews Submitted" value="4" />
        <StatCard label="Recommended" value="5 new" helper="Based on your purchases" />
      </div>

      <section className="mt-8 rounded-xl border border-border bg-panel p-6">
        <h2 className="text-xl font-semibold">Download library</h2>
        <div className="mt-4 space-y-3">
          {purchased.map((listing) => (
            <div key={listing.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border p-4">
              <div>
                <p className="font-medium">{listing.title}</p>
                <p className="text-xs text-zinc-500">Purchased {formatDate(listing.createdAt)}</p>
              </div>
              <ButtonLink href="#" variant="secondary">
                Download Package
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
