"use client";

import {
  Trophy,
  Star,
  ShieldCheck,
} from "lucide-react";

type SummaryScoreProps = {
  score: number;
  profile: string;
  safetyRating: number;
  bestSkill: string;
  aiRating: string;
};

export function SummaryScore({
  score,
  profile,
  safetyRating,
  bestSkill,
  aiRating,
}: SummaryScoreProps) {
  const stars = Math.max(1, Math.round(score / 20));

  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/15">
          <Trophy className="h-8 w-8 text-yellow-400" />
        </div>

        <h2 className="mt-4 text-xl font-bold text-white">
          Overall Driving Score
        </h2>

        <p className="mt-2 text-7xl font-black tracking-tight text-cyan-400">
          {score.toFixed(1)}
        </p>

        <p className="mt-2 text-base font-semibold text-green-400">
          {profile} Driver
        </p>

        <div className="mt-3 flex justify-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < stars
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-slate-500"
              }`}
            />
          ))}
        </div>

        <div className="my-6 border-t border-cyan-500/10" />

        <div className="grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl bg-cyan-500/10 p-4">
            <ShieldCheck className="mx-auto h-6 w-6 text-cyan-400" />

            <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">
              Safety Rating
            </p>

            <p className="mt-1 text-2xl font-bold text-white">
              {safetyRating}%
            </p>
          </div>

          <div className="rounded-2xl bg-green-500/10 p-4">
            <Trophy className="mx-auto h-6 w-6 text-green-400" />

            <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">
              Best Skill
            </p>

            <p className="mt-1 text-lg font-bold text-white">
              {bestSkill}
            </p>
          </div>

          <div className="rounded-2xl bg-yellow-500/10 p-4">
            <Star className="mx-auto h-6 w-6 text-yellow-400" />

            <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">
              AI Rating
            </p>

            <p className="mt-1 text-lg font-bold text-white">
              {aiRating}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}