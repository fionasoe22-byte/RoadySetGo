"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CameraFeed } from "./camera-feed";
import { LiveStats } from "./live-stats";
import { LiveAlerts } from "./live-alerts";
import { ArrowRight, CarFront } from "lucide-react";

export function DriveScreen() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="glass-panel p-8">
        <div className="glass-glow" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
              <CarFront className="h-4 w-4" />
              <span className="text-sm font-medium">
                Drive Session Active
              </span>
            </div>

            <h1 className="text-5xl font-black tracking-tight text-white">
              Start Drive
            </h1>

            <p className="mt-3 max-w-xl text-lg text-slate-300">
              Your AI companion is actively monitoring your journey in
              real time, providing live feedback to improve your driving
              habits.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="rounded-xl px-8"
          >
            <Link href="/drive-summary">
              End Drive
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Camera */}
      <CameraFeed />

      {/* Live Stats */}
      <LiveStats />

      {/* AI Events */}
      <LiveAlerts />
    </div>
  );
}