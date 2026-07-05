import {
  Flame,
  CalendarDays,
} from "lucide-react";

export function StreakCard() {
  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
            <Flame className="h-6 w-6 text-orange-400" />
          </div>

          <span className="text-xs uppercase tracking-widest text-slate-400">
            ACTIVE
          </span>
        </div>

        {/* Streak */}
        <p className="mt-6 text-sm uppercase tracking-wide text-slate-400">
          Safe Driving Streak
        </p>

        <h2 className="mt-2 text-6xl font-black tracking-tight text-white">
          12
        </h2>

        <p className="mt-2 text-lg font-semibold text-orange-400">
          Consecutive Days
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-cyan-500/10" />

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Next Milestone
            </p>

            <p className="font-semibold text-white">
              15 Days
            </p>
          </div>

          <CalendarDays className="h-6 w-6 text-cyan-400" />
        </div>

        {/* Progress */}
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-orange-400 to-yellow-400" />
        </div>

        <div className="mt-2 flex justify-between text-xs text-slate-400">
          <span>80%</span>
          <span>3 Days Remaining</span>
        </div>
      </div>
    </div>
  );
}