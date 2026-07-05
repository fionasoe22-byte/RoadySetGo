"use client";

import { BrainCircuit } from "lucide-react";

type Props = {
  recommendation: string;
};

export function CoachAnalysis({
  recommendation,
}: Props) {
  return (
    <div className="glass-panel p-8">

      <div className="mb-5 flex items-center gap-3">

        <BrainCircuit className="text-cyan-400" />

        <h2 className="text-2xl font-bold text-white">
          AI Analysis
        </h2>

      </div>

      <p className="leading-8 text-slate-300">
        {recommendation}
      </p>

    </div>
  );
}