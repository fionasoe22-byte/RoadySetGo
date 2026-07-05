import { RadarChart } from "@/components/charts/radar-chart";

import type { DashboardData } from "@/types/dashboard";

interface PerformanceCardProps {
  dashboard: DashboardData;
}

export function PerformanceCard({
  dashboard,
}: PerformanceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/15 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/80 p-8 shadow-2xl backdrop-blur-xl">

      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative">

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Driver Performance
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              AI Performance Breakdown
            </p>

          </div>

          <div className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
            LIVE
          </div>

        </div>

        <RadarChart
          data={dashboard.radar}
        />

      </div>

    </div>
  );
}