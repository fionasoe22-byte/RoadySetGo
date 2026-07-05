"use client";

import { CheckCircle2 } from "lucide-react";

type StrengthsCardProps = {
  strengths: string[];
};

export function StrengthsCard({
  strengths,
}: StrengthsCardProps) {
  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-xl font-bold text-white">
            Strengths
          </h2>

          <span className="text-xs uppercase tracking-widest text-slate-400">
            AI Analysis
          </span>

        </div>

        <div className="space-y-5">

          {strengths.map((item, index) => (

            <div
              key={index}
              className={`flex items-start gap-4 ${
                index !== strengths.length - 1
                  ? "border-b border-cyan-500/10 pb-4"
                  : ""
              }`}
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/15">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
              </div>

              <div>

                <p className="font-semibold text-white">
                  {item}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  This was identified as one of your strongest driving behaviours during your latest trip.
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}