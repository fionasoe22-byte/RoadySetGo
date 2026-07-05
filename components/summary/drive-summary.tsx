"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Trophy,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { SummaryScore } from "./summary-score";
import { StrengthsCard } from "./strengths-card";
import { ImprovementsCard } from "./improvements-card";

import { getDriveSummary } from "@/lib/api";

type DriveSummaryResponse = {
  driver_score: number;
  driver_profile: string;

  trip_distance: number;
  trip_duration: number;
  average_speed: number;
  max_speed: number;
  fuel_consumption: number;

  safety_rating: number;
  best_skill: string;
  ai_rating: string;

  strengths: string[];
  improvements: string[];
};

export function DriveSummary() {
  const [summary, setSummary] =
    useState<DriveSummaryResponse | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSummary() {
      try {
        const data = await getDriveSummary();
        setSummary(data);
      } catch (error) {
        console.error("Failed to load Drive Summary:", error);
      } finally {
        setLoading(false);
      }
    }

    loadSummary();
  }, []);

  if (loading) {
    return (
      <div className="glass-panel p-12 text-center">
        <h2 className="text-xl font-semibold text-white">
          Loading your latest drive...
        </h2>
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="glass-panel p-12 text-center">
        <h2 className="text-xl font-semibold text-red-400">
          Failed to load drive summary.
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="glass-panel p-8">
        <div className="glass-glow" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
              <Trophy className="h-4 w-4" />

              <span className="text-sm font-medium">
                Drive Completed
              </span>
            </div>

            <h1 className="text-5xl font-black tracking-tight text-white">
              Drive Summary
            </h1>

            <p className="mt-3 max-w-xl text-lg text-slate-300">
              Your latest journey has been analyzed by RoadySetGo AI.
              Review your driving score, strengths, and improvement areas
              before your next drive.
            </p>

          </div>

          <Button
            asChild
            size="lg"
            className="rounded-xl px-8"
          >
            <Link href="/ai-coach">
              Ask AI Coach
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

        </div>
      </div>

      {/* Summary Score */}

      <SummaryScore
        score={summary.driver_score}
        profile={summary.driver_profile}
        safetyRating={summary.safety_rating}
        bestSkill={summary.best_skill}
        aiRating={summary.ai_rating}
      />

      {/* Strengths & Improvements */}

      <div className="grid gap-6 lg:grid-cols-2">

        <StrengthsCard
          strengths={summary.strengths}
        />

        <ImprovementsCard
          improvements={summary.improvements}
        />

      </div>

      {/* Bottom Buttons */}

      <div className="flex justify-end gap-3">

        <Button
          asChild
          variant="outline"
          className="rounded-xl"
        >
          <Link href="/replay">
            View AI Replay
          </Link>
        </Button>

        <Button
          asChild
          className="rounded-xl"
        >
          <Link href="/ai-coach">
            Continue to AI Coach
          </Link>
        </Button>

      </div>

    </div>
  );
}