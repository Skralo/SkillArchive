import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { listings } from "@/lib/data/seed";

export default function AdminPage() {
  const moderationQueue = listings.filter((listing) => listing.moderationStatus !== "approved");

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Admin Control Center</h1>
      <p className="mt-2 text-zinc-300">Moderation queue, trust badge controls, featured slots, payouts, and report handling.</p>

      <section className="mt-8 rounded-xl border border-border bg-panel p-6">
        <h2 className="mb-4 text-xl font-semibold">Moderation Queue</h2>
        <div className="space-y-3">
          {moderationQueue.map((listing) => (
            <article key={listing.id} className="rounded-lg border border-border p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold">{listing.title}</p>
                <Badge text={listing.moderationStatus} tone="warning" />
              </div>
              <p className="mt-2 text-sm text-zinc-300">{listing.resultProof}</p>
              <div className="mt-3 flex gap-2">
                <Button variant="secondary">Approve</Button>
                <Button variant="ghost">Request changes</Button>
                <Button variant="ghost">Reject</Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
