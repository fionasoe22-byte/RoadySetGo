"use client";

import {
  Gauge,
  Shield,
  UserRound,
} from "lucide-react";

type Props = {
  score: number;
  profile: string;
  consistency: number;
};

export function CoachSummary({
  score,
  profile,
  consistency,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-3">

      <div className="glass-panel p-6">
        <div className="flex items-center gap-3">
          <Gauge className="text-cyan-400" />
          <div>
            <p className="text-sm text-slate-400">
              Driver Score
            </p>

            <h2 className="text-3xl font-bold text-white">
              {score.toFixed(1)}
            </h2>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6">
        <div className="flex items-center gap-3">
          <UserRound className="text-cyan-400" />

          <div>
            <p className="text-sm text-slate-400">
              Driver Profile
            </p>

            <h2 className="text-2xl font-bold text-white">
              {profile}
            </h2>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6">
        <div className="flex items-center gap-3">
          <Shield className="text-cyan-400" />

          <div>
            <p className="text-sm text-slate-400">
              Consistency
            </p>

            <h2 className="text-2xl font-bold text-white">
              {consistency}%
            </h2>
          </div>
        </div>
      </div>

    </div>
  );
}