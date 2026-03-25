import { cn } from "@/lib/utils";

export function Badge({ text, tone = "default" }: { text: string; tone?: "default" | "success" | "warning" }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-1 text-xs font-medium",
        tone === "default" && "border-zinc-700 bg-zinc-900 text-zinc-300",
        tone === "success" && "border-teal-500/40 bg-teal-500/10 text-teal-300",
        tone === "warning" && "border-amber-500/40 bg-amber-500/10 text-amber-300"
      )}
    >
      {text}
    </span>
  );
}
