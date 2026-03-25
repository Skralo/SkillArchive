import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Checkout</h1>
      <p className="mt-2 text-zinc-300">Secure Stripe checkout with platform commission and delayed seller payout window.</p>
      <section className="mt-6 rounded-xl border border-border bg-panel p-6">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <div className="mt-4 space-y-2 text-sm text-zinc-300">
          <p>Skill Package: Sales Reply Optimization Engine</p>
          <p>Price: $129.00</p>
          <p>Commission: Included at checkout</p>
          <p>Refund window: Limited terms (14 days max)</p>
        </div>
        <Button className="mt-6 w-full">Pay with Stripe</Button>
      </section>
    </div>
  );
}
