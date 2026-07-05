"use client";

import {
  CheckCircle2,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";

type Props = {
  summary: string;
  strengths: string[];
  improvements: string[];
  nextGoal: string;
  motivation: string;
};

export function CoachReport({
  summary,
  strengths,
  improvements,
  nextGoal,
  motivation,
}: Props) {
  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative space-y-8">

        <div>
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="text-cyan-400" size={18} />

            <h2 className="text-2xl font-bold text-white">
              Latest AI Analysis
            </h2>
          </div>

          <p className="leading-8 text-slate-300">
            {summary}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <div>

            <h3 className="mb-4 flex items-center gap-2 font-semibold text-cyan-400">
              <CheckCircle2 size={18} />
              Strengths
            </h3>

            <div className="space-y-3">

              {strengths.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4 text-slate-300"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

          <div>

            <h3 className="mb-4 flex items-center gap-2 font-semibold text-cyan-400">
              <TrendingUp size={18} />
              Areas to Improve
            </h3>

            <div className="space-y-3">

              {improvements.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-amber-500/10 bg-amber-500/5 p-4 text-slate-300"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-cyan-500/5 p-5">

          <div className="mb-2 flex items-center gap-2 text-cyan-400">
            <Target size={18} />

            <span className="font-semibold">
              Next Goal
            </span>

          </div>

          <p className="text-slate-300">
            {nextGoal}
          </p>

        </div>

        <div className="rounded-2xl border border-white/5 bg-white/5 p-5">

          <h3 className="mb-2 font-semibold text-white">
            RoadySetGo AI
          </h3>

          <p className="leading-7 text-slate-300">
            {motivation}
          </p>

        </div>

      </div>
    </div>
  );
}