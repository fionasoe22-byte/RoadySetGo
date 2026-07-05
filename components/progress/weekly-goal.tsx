import {
  Target,
  CheckCircle2,
} from "lucide-react";

export function WeeklyGoal() {
  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
            <Target className="h-6 w-6 text-green-400" />
          </div>

          <span className="text-xs uppercase tracking-widest text-slate-400">
            THIS WEEK
          </span>
        </div>

        {/* Goal */}
        <p className="mt-6 text-sm uppercase tracking-wide text-slate-400">
          Weekly Goal
        </p>

        <h2 className="mt-2 text-6xl font-black tracking-tight text-white">
          4 / 5
        </h2>

        <p className="mt-2 text-lg font-semibold text-green-400">
          Safe Drives Completed
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-cyan-500/10" />

        {/* Status */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Goal Progress
            </p>

            <p className="font-semibold text-white">
              1 More Drive Needed
            </p>
          </div>

          <CheckCircle2 className="h-6 w-6 text-green-400" />
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-green-400 to-cyan-400" />
        </div>

        <div className="mt-2 flex justify-between text-xs text-slate-400">
          <span>80%</span>
          <span>Complete by Sunday</span>
        </div>
      </div>
    </div>
  );
}