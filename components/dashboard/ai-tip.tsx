import { Bot } from "lucide-react";

export function AITip() {
  return (
    <div className="rounded-3xl border bg-card p-6">
      <div className="flex items-center gap-3">
        <Bot className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold">
          AI Coach Tip
        </h2>
      </div>

      <div className="mt-6 space-y-4">
        <p className="text-muted-foreground leading-7">
          Your braking has improved by 12% compared to last week.
          Try easing off the accelerator earlier when approaching
          intersections to make your drives even smoother.
        </p>

        <div className="rounded-xl bg-primary/10 p-4 text-sm">
          💡 Small improvements every drive build safer habits over
          time.
        </div>
      </div>
    </div>
  );
}