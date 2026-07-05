import { Bot } from "lucide-react";

export function AISummary() {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center gap-3">
        <Bot className="text-primary" />

        <h2 className="text-lg font-semibold">
          AI Coach
        </h2>
      </div>

      <div className="mt-6 space-y-4 text-sm text-muted-foreground">
        <p>
          Your braking consistency has improved by 12% compared
          with last week.
        </p>

        <p>
          Maintain smoother acceleration to improve your
          eco-driving score.
        </p>

        <p>
          Excellent lane discipline detected across the latest
          five sessions.
        </p>
      </div>
    </div>
  );
}