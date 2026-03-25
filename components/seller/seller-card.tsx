import Image from "next/image";
import { SellerProfile } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function SellerCard({ seller }: { seller: SellerProfile }) {
  return (
    <a href={`/seller/${seller.slug}`} className="block rounded-xl border border-border bg-panel p-4 hover:shadow-glow">
      <div className="flex items-center gap-3">
        <Image src={seller.avatarUrl} alt={seller.displayName} width={56} height={56} className="rounded-full object-cover" />
        <div>
          <h3 className="font-semibold">{seller.displayName}</h3>
          <p className="text-xs text-zinc-400">{seller.headline}</p>
        </div>
      </div>
      <div className="mt-4 flex gap-2 text-xs">
        <Badge text={`${seller.totalSales} sales`} />
        <Badge text={`${seller.averageRating.toFixed(1)} avg`} tone="success" />
      </div>
    </a>
  );
}
