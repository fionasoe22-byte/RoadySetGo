"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  TrendingUp,
  CalendarDays,
} from "lucide-react";

type WeeklyScore = {
  day: string;
  score: number;
};

type WeeklyChartProps = {
  data: WeeklyScore[];
};

export function WeeklyChart({
  data,
}: WeeklyChartProps) {

  const average =
    Math.round(
      data.reduce((sum, item) => sum + item.score, 0) /
        data.length
    );

  const best = Math.max(
    ...data.map((item) => item.score)
  );

  const trend =
    data.length >= 2
      ? Math.round(
          ((data[data.length - 1].score - data[0].score) /
            data[0].score) *
            100
        )
      : 0;

  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">

          <div>

            <div className="mb-2 flex items-center gap-2 text-cyan-400">
              <TrendingUp className="h-5 w-5" />

              <span className="text-sm font-medium">
                Weekly Analytics
              </span>

            </div>

            <h2 className="text-2xl font-bold text-white">
              Weekly Driving Score
            </h2>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">

            <CalendarDays className="h-4 w-4" />

            <span className="text-sm">
              Last 7 Days
            </span>

          </div>

        </div>

        {/* Chart */}

        <div className="h-[320px]">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={data}>

              <CartesianGrid
                stroke="rgba(255,255,255,.06)"
                vertical={false}
              />

              <XAxis
                dataKey="day"
                stroke="#94a3b8"
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                stroke="#94a3b8"
                tickLine={false}
                axisLine={false}
                domain={["dataMin - 3", "dataMax + 3"]}
              />

              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border:
                    "1px solid rgba(34,211,238,.2)",
                  borderRadius: "14px",
                  color: "#fff",
                }}
              />

              <Line
                type="monotone"
                dataKey="score"
                stroke="#22d3ee"
                strokeWidth={4}
                dot={{
                  fill: "#22d3ee",
                  strokeWidth: 3,
                  r: 5,
                }}
                activeDot={{
                  r: 8,
                }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* Footer */}

        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-cyan-500/10 pt-6">

          <div className="text-center">

            <p className="text-xs uppercase tracking-wide text-slate-400">
              Average
            </p>

            <p className="mt-2 text-2xl font-bold text-white">
              {average}
            </p>

          </div>

          <div className="text-center">

            <p className="text-xs uppercase tracking-wide text-slate-400">
              Best
            </p>

            <p className="mt-2 text-2xl font-bold text-green-400">
              {best}
            </p>

          </div>

          <div className="text-center">

            <p className="text-xs uppercase tracking-wide text-slate-400">
              Trend
            </p>

            <p className="mt-2 text-2xl font-bold text-cyan-400">
              {trend >= 0 ? "+" : ""}
              {trend}%
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}