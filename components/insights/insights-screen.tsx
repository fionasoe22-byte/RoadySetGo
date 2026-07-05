"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { WeeklyChart } from "./weekly-chart";
import { ScoreBreakdown } from "./score-breakdown";
import { SessionsTable } from "./sessions-table";
import { InsightsPerformanceCard } from "./insights-performance-card";

import { getInsights } from "@/lib/api";

type Category = {
  name: string;
  score: number;
  status: string;
};

type WeeklyScore = {
  day: string;
  score: number;
};

type Session = {
  date: string;
  score: number;
  distance: string;
  duration: string;
};

type InsightsResponse = {
  driver_score: number;
  driver_profile: string;

  estimated_next_score: number;
  ai_confidence: number;

  risk_level: string;
  focus_area: string;

  score_trend: string;
  score_change: number;

  recommendation: string;

  categories: Category[];

  weekly_scores: WeeklyScore[];

  sessions: Session[];
};

export function InsightsScreen() {
  const [insights, setInsights] =
    useState<InsightsResponse | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInsights() {
      try {
        const data = await getInsights();
        setInsights(data);
      } catch (error) {
        console.error("Failed to load insights:", error);
      } finally {
        setLoading(false);
      }
    }

    loadInsights();
  }, []);

  if (loading) {
    return (
      <div className="glass-panel p-12 text-center">
        <h2 className="text-xl font-semibold text-white">
          Loading AI Insights...
        </h2>
      </div>
    );
  }

  if (!insights) {
    return (
      <div className="glass-panel p-12 text-center">
        <h2 className="text-xl font-semibold text-red-400">
          Failed to load AI Insights.
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="glass-panel p-6">
        <div className="glass-glow" />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="max-w-2xl">

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
              <BarChart3 className="h-4 w-4" />

              <span className="text-sm font-medium">
                AI Driving Analytics
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white xl:text-5xl">
              Driving Insights
            </h1>

            <p className="mt-3 leading-7 text-slate-300">
              Review your driving trends, monitor your progress, and discover
              AI-powered recommendations to become a safer and more confident
              driver.
            </p>

          </div>

          <Button
            asChild
            size="lg"
            className="rounded-xl px-8"
          >
            <Link href="/progress">
              View Progress
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

        </div>

      </div>

      {/* Snapshot */}

      <div className="grid gap-6 md:grid-cols-4">

        <div className="glass-panel p-5">
          <p className="text-sm text-slate-400">
            Driver Score
          </p>

          <h2 className="mt-2 text-3xl font-bold text-cyan-400">
            {insights.driver_score}
          </h2>
        </div>

        <div className="glass-panel p-5">
          <p className="text-sm text-slate-400">
            Next Score
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-400">
            {insights.estimated_next_score}
          </h2>
        </div>

        <div className="glass-panel p-5">
          <p className="text-sm text-slate-400">
            AI Confidence
          </p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-400">
            {insights.ai_confidence}%
          </h2>
        </div>

        <div className="glass-panel p-5">
          <p className="text-sm text-slate-400">
            Risk Level
          </p>

          <h2 className="mt-2 text-3xl font-bold text-red-400">
            {insights.risk_level}
          </h2>
        </div>

      </div>

      {/* Recommendation */}

      <div className="glass-panel p-6">
        <div className="glass-glow" />

        <h2 className="text-xl font-bold text-white">
          AI Recommendation
        </h2>

        <p className="mt-4 leading-7 text-slate-300">
          {insights.recommendation}
        </p>

      </div>

      {/* Weekly Chart */}

      <WeeklyChart
        data={insights.weekly_scores}
      />

      {/* Performance + Breakdown */}

      <div className="grid gap-6 lg:grid-cols-2">

        <InsightsPerformanceCard
          driverProfile={insights.driver_profile}
          estimatedNextScore={insights.estimated_next_score}
          aiConfidence={insights.ai_confidence}
          riskLevel={insights.risk_level}
          focusArea={insights.focus_area}
        />

        <ScoreBreakdown
          categories={insights.categories}
        />

      </div>

      {/* Sessions */}

      <SessionsTable
        sessions={insights.sessions}
      />

    </div>
  );
}