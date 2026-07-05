"use client";

import Link from "next/link";
import {
  Bot,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { DashboardData } from "@/types/dashboard";

interface AIFeedProps {
  dashboard: DashboardData;
}

export function AIFeed({
  dashboard,
}: AIFeedProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/15 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/80 p-8 shadow-2xl">

      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative">

        <div className="mb-6 flex items-center gap-3">

          <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
            <Bot size={22} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              AI Driving Coach
            </h2>

            <p className="text-sm text-slate-400">
              Powered by Gemini
            </p>
          </div>

        </div>

        <div className="space-y-5">

          <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Driver Profile
            </p>

            <p className="mt-2 text-xl font-semibold text-white">
              {dashboard.driver_profile}
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Behavioral Consistency
            </p>

            <p className="mt-2 text-xl font-semibold text-cyan-400">
              {dashboard.behavioral_consistency}%
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

            <div className="mb-3 flex items-center gap-2 text-cyan-400">
              <BrainCircuit size={18} />

              <span className="font-semibold">
                Today's Recommendation
              </span>
            </div>

            <p className="leading-7 text-slate-300">
              {dashboard.recommendation}
            </p>

          </div>

          <Button
            asChild
            className="w-full rounded-xl"
          >
            <Link href="/coach">
              Open AI Coach

              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

        </div>

      </div>

    </div>
  );
}