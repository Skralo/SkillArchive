import { Listing, Order } from "@/lib/types";

export function buildSellerAnalytics(listings: Listing[], orders: Order[]) {
  const totalViews = listings.reduce((sum, l) => sum + l.stats.views, 0);
  const purchases = orders.length;
  const revenueCents = orders.reduce((sum, o) => sum + o.amountCents, 0);
  const conversionRate = totalViews ? (purchases / totalViews) * 100 : 0;

  return {
    totalViews,
    purchases,
    revenueCents,
    conversionRate: Number(conversionRate.toFixed(2))
  };
}
