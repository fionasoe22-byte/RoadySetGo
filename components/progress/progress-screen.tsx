"use client";

import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { LevelCard } from "./level-card";
import { XPProgress } from "./xp-progress";
import { StreakCard } from "./streak-card";
import { Achievements } from "./achievements";
import { WeeklyGoal } from "./weekly-goal";

export function ProgressScreen() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="glass-panel p-6">
        <div className="glass-glow" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
              <TrendingUp className="h-4 w-4" />

              <span className="text-sm font-medium">
                Driver Progress
              </span>
            </div>

            <h1 className="text-4xl xl:text-5xl font-black tracking-tight text-white">
              Progress & Achievements
            </h1>

            <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
              Track your driving level, earn achievements,
              complete weekly goals, and unlock new milestones
              as you become a safer driver.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="rounded-xl px-8"
          >
            <Link href="/insights">
              View Insights
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Level + XP */}
      <div className="grid gap-6 lg:grid-cols-2">
        <LevelCard />
        <XPProgress />
      </div>

      {/* Streak + Goal */}
      <div className="grid gap-6 lg:grid-cols-2">
        <StreakCard />
        <WeeklyGoal />
      </div>

      {/* Achievements */}
      <Achievements />
    </div>
  );
}