"use client";

import { TriangleAlert } from "lucide-react";

type ImprovementsCardProps = {
  improvements: string[];
};

export function ImprovementsCard({
  improvements,
}: ImprovementsCardProps) {
  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            Needs Improvement
          </h2>

          <span className="text-xs uppercase tracking-widest text-slate-400">
            AI Analysis
          </span>
        </div>

        <div className="space-y-5">
          {improvements.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                index !== improvements.length - 1
                  ? "border-b border-cyan-500/10 pb-4"
                  : ""
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/15">
                <TriangleAlert className="h-5 w-5 text-yellow-400" />
              </div>

              <div>
                <p className="font-semibold text-white">
                  {item}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  AI recommends improving this driving habit to achieve safer,
                  smoother, and more efficient journeys.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}