import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-semibold">Login</h1>
      <form className="mt-6 space-y-4 rounded-xl border border-border bg-panel p-6">
        <input className="w-full rounded-lg border border-border bg-zinc-950 px-3 py-2" placeholder="Email" type="email" />
        <input className="w-full rounded-lg border border-border bg-zinc-950 px-3 py-2" placeholder="Password" type="password" />
        <Button className="w-full">Sign in</Button>
      </form>
    </div>
  );
}
