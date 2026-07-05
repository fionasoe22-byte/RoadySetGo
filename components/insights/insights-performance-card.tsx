"use client";

import {
  Brain,
  TrendingUp,
  ShieldCheck,
  Target,
  Sparkles,
} from "lucide-react";

type Props = {
  driverProfile: string;
  estimatedNextScore: number;
  aiConfidence: number;
  riskLevel: string;
  focusArea: string;
};

export function InsightsPerformanceCard({
  driverProfile,
  estimatedNextScore,
  aiConfidence,
  riskLevel,
  focusArea,
}: Props) {
  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-white">
              AI Performance
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Personalized driving analysis
            </p>
          </div>

          <div className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
            LIVE
          </div>

        </div>

        {/* Grid */}

        <div className="grid gap-4">

          <div className="flex items-center justify-between rounded-2xl border border-cyan-500/10 bg-white/5 p-4">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-cyan-500/10 p-3">
                <Brain className="h-5 w-5 text-cyan-400" />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Driver Profile
                </p>

                <p className="font-semibold text-white">
                  {driverProfile}
                </p>
              </div>

            </div>

          </div>

          <div className="flex items-center justify-between rounded-2xl border border-cyan-500/10 bg-white/5 p-4">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-green-500/10 p-3">
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Estimated Next Score
                </p>

                <p className="font-semibold text-white">
                  {estimatedNextScore}/100
                </p>
              </div>

            </div>

          </div>

          <div className="flex items-center justify-between rounded-2xl border border-cyan-500/10 bg-white/5 p-4">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-yellow-500/10 p-3">
                <Sparkles className="h-5 w-5 text-yellow-400" />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  AI Confidence
                </p>

                <p className="font-semibold text-white">
                  {aiConfidence}%
                </p>
              </div>

            </div>

          </div>

          <div className="flex items-center justify-between rounded-2xl border border-cyan-500/10 bg-white/5 p-4">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-red-500/10 p-3">
                <ShieldCheck className="h-5 w-5 text-red-400" />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Risk Level
                </p>

                <p className="font-semibold text-white">
                  {riskLevel}
                </p>
              </div>

            </div>

          </div>

          <div className="flex items-center justify-between rounded-2xl border border-cyan-500/10 bg-white/5 p-4">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-purple-500/10 p-3">
                <Target className="h-5 w-5 text-purple-400" />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Focus Area
                </p>

                <p className="font-semibold text-white">
                  {focusArea}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}