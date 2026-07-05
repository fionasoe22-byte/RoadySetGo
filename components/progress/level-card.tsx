import {
  Crown,
  TrendingUp,
} from "lucide-react";

export function LevelCard() {
  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
            <Crown className="h-6 w-6 text-cyan-400" />
          </div>

          <span className="text-xs uppercase tracking-widest text-slate-400">
            Current Rank
          </span>
        </div>

        {/* Level */}
        <p className="mt-6 text-sm uppercase tracking-wide text-slate-400">
          Driver Level
        </p>

        <h2 className="mt-2 text-6xl font-black tracking-tight text-white">
          5
        </h2>

        <p className="mt-2 text-lg font-semibold text-cyan-400">
          Expert Driver
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-cyan-500/10" />

        {/* Progress */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Progress to Level 6
            </p>

            <p className="mt-1 text-sm font-medium text-white">
              820 / 1000 XP
            </p>
          </div>

          <TrendingUp className="h-6 w-6 text-green-400" />
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>
      </div>
    </div>
  );
}