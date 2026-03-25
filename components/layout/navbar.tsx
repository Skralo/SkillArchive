import { ButtonLink } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="/" className="text-lg font-semibold tracking-tight">
          Skill<span className="text-neon-blue">Arcade</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a href="/marketplace">Marketplace</a>
          <a href="/seller/dashboard">Sell</a>
          <a href="/admin">Admin</a>
        </nav>
        <div className="flex gap-2">
          <ButtonLink href="/auth/login" variant="ghost">
            Login
          </ButtonLink>
          <ButtonLink href="/auth/register">Get Started</ButtonLink>
        </div>
      </div>
    </header>
  );
}
