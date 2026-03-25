import { ListingCard } from "@/components/listing/listing-card";
import { StatCard } from "@/components/dashboard/stat-card";
import { Button } from "@/components/ui/button";
import { listings } from "@/lib/data/seed";

export default function SellerDashboardPage() {
  const sellerListings = listings.filter((l) => l.sellerId === "s1");

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Seller Dashboard</h1>
        <Button>Create Listing</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Total Revenue" value="$18,420" helper="Last 30 days" />
        <StatCard label="Sales" value="144" helper="+12% MoM" />
        <StatCard label="Conversion" value="4.35%" helper="Views to purchases" />
        <StatCard label="Pending Payout" value="$2,340" helper="10-day hold protection" />
      </div>

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Your Listings</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {sellerListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
    </div>
  );
}
