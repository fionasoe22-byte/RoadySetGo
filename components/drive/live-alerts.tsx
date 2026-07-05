import { CheckCircle2, TriangleAlert } from "lucide-react";

export function LiveAlerts() {
  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            Live AI Events
          </h2>

          <span className="text-xs uppercase tracking-widest text-slate-400">
            Live
          </span>
        </div>

        <div className="space-y-5">
          <div className="flex items-start gap-4 border-b border-cyan-500/10 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/15">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
            </div>

            <div>
              <p className="font-semibold text-white">
                Lane Keeping
              </p>

              <p className="text-sm text-slate-400">
                Excellent lane keeping detected throughout the drive.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-cyan-500/10 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/15">
              <TriangleAlert className="h-5 w-5 text-yellow-400" />
            </div>

            <div>
              <p className="font-semibold text-white">
                Hard Braking
              </p>

              <p className="text-sm text-slate-400">
                Sudden braking detected. Consider slowing down earlier.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/15">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
            </div>

            <div>
              <p className="font-semibold text-white">
                Following Distance
              </p>

              <p className="text-sm text-slate-400">
                Safe following distance maintained during the journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}