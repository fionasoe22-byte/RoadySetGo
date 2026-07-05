"use client";

import { TrendingUp } from "lucide-react";

import type { DashboardData } from "@/types/dashboard";

interface ScoreRingProps {
  dashboard: DashboardData;
}

export function ScoreRing({ dashboard }: ScoreRingProps) {
  const score = dashboard.driver_score;
  const maxScore = 100;

  // Determine driver level based on score
  const label =
    score >= 90
      ? "Expert"
      : score >= 75
      ? "Confident"
      : score >= 60
      ? "Developing"
      : "Novice";

  // For now we'll use safety rating as the weekly goal progress
  const weeklyGoal = Math.round(dashboard.safety_rating);

  const radius = 74;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / maxScore) * circumference;
  const offset = circumference - progress;

  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800/80 p-8 shadow-2xl">
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative flex items-start justify-between">
        <span className="text-xs font-medium tracking-wider text-slate-400">
          OVERALL DRIVING SCORE
        </span>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
          <TrendingUp size={16} />
        </div>
      </div>

      <div className="relative mx-auto flex items-center justify-center py-4">
        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          className="-rotate-90"
        >
          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="10"
          />

          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              filter: "drop-shadow(0 0 6px rgba(45,212,191,0.5))",
              transition: "stroke-dashoffset 1s ease-out",
            }}
          />

          <defs>
            <linearGradient
              id="scoreGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0ea5a5" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute flex flex-col items-center">
          <span className="text-5xl font-black tracking-tight text-white">
            {score.toFixed(1)}
          </span>

          <span className="mt-1 text-sm font-medium text-cyan-400">
            {label}
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
          <span>Safety Rating</span>

          <span className="font-medium text-slate-200">
            {weeklyGoal}%
          </span>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]"
            style={{
              width: `${weeklyGoal}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}