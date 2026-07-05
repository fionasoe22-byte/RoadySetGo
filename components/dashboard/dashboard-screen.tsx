"use client";

import { useEffect, useState } from "react";

import { HomeHero } from "./home-hero";
import { ScoreRing } from "./score-ring";
import { QuickStats } from "./quick-stats";
import { PerformanceCard } from "./performance-card";
import { AIFeed } from "./ai-feed";

import { getDashboard } from "@/lib/api";
import type { DashboardData } from "@/types/dashboard";

export function DashboardScreen() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboard();
        setDashboard(data);
      } catch (error) {
        console.error("Failed to load dashboard:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <p className="text-slate-400">Loading dashboard...</p>
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <p className="text-red-400">
          Failed to load dashboard data.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid items-stretch gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <HomeHero dashboard={dashboard} />
        </div>

        <ScoreRing dashboard={dashboard} />
      </div>

      <QuickStats dashboard={dashboard} />

      <div className="grid gap-8 xl:grid-cols-2">
        <PerformanceCard dashboard={dashboard} />
        <AIFeed dashboard={dashboard} />
      </div>
    </div>
  );
}