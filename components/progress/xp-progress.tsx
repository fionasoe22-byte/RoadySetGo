import {
  Star,
  TrendingUp,
} from "lucide-react";

export function XPProgress() {
  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
            <Star className="h-6 w-6 text-cyan-400" />
          </div>

          <span className="text-xs uppercase tracking-widest text-slate-400">
            EXPERIENCE
          </span>
        </div>

        {/* XP */}
        <p className="mt-6 text-sm uppercase tracking-wide text-slate-400">
          XP Progress
        </p>

        <h2 className="mt-2 text-5xl font-black tracking-tight text-white">
          820
        </h2>

        <p className="mt-2 text-lg font-semibold text-cyan-400">
          Experience Points
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-cyan-500/10" />

        {/* XP Status */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Next Level
            </p>

            <p className="font-semibold text-white">
              820 / 1000 XP
            </p>
          </div>

          <TrendingUp className="h-6 w-6 text-green-400" />
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500" />
        </div>

        <div className="mt-2 flex justify-between text-xs text-slate-400">
          <span>82%</span>
          <span>180 XP Remaining</span>
        </div>
      </div>
    </div>
  );
}