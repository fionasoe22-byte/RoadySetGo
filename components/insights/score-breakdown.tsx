"use client";

import {
  ShieldCheck,
  Gauge,
  TriangleAlert,
  Activity,
} from "lucide-react";

type Category = {
  name: string;
  score: number;
  status: string;
};

type ScoreBreakdownProps = {
  categories: Category[];
};

export function ScoreBreakdown({
  categories,
}: ScoreBreakdownProps) {
  function getIcon(name: string) {
    switch (name) {
      case "Safety":
        return ShieldCheck;

      case "Steering":
        return Gauge;

      case "Braking":
        return Activity;

      case "Lane Keeping":
        return ShieldCheck;

      default:
        return TriangleAlert;
    }
  }

  function getColor(score: number) {
    if (score >= 90) {
      return {
        text: "text-green-400",
        bg: "bg-green-500/10",
      };
    }

    if (score >= 75) {
      return {
        text: "text-cyan-400",
        bg: "bg-cyan-500/10",
      };
    }

    return {
      text: "text-yellow-400",
      bg: "bg-yellow-500/10",
    };
  }

  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            AI Score Breakdown
          </h2>

          <span className="text-xs uppercase tracking-widest text-slate-400">
            Live Analysis
          </span>

        </div>

        <div className="space-y-4">

          {categories.map((item) => {
            const Icon = getIcon(item.name);
            const color = getColor(item.score);

            return (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl border border-cyan-500/10 bg-white/5 p-5 transition hover:border-cyan-400/30"
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${color.bg}`}
                  >
                    <Icon
                      className={`h-5 w-5 ${color.text}`}
                    />
                  </div>

                  <div>

                    <p className="font-semibold text-white">
                      {item.name}
                    </p>

                    <p className="text-sm text-slate-400">
                      {item.status}
                    </p>

                  </div>

                </div>

                <span
                  className={`text-3xl font-bold ${color.text}`}
                >
                  {item.score}
                </span>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}