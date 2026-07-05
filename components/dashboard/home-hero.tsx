"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Activity,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { DashboardData } from "@/types/dashboard";

interface HomeHeroProps {
  dashboard: DashboardData;
}

export function HomeHero({
  dashboard,
}: HomeHeroProps) {

  const score = dashboard.driver_score;

  const driverLevel =
    score >= 90
      ? "Expert Driver"
      : score >= 75
      ? "Confident Driver"
      : score >= 60
      ? "Developing Driver"
      : "Novice Driver";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/15 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/80 p-5 backdrop-blur-xl shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}
        <div className="max-w-lg">

          <div className="mb-3 flex flex-wrap gap-2">

            <div className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1.5 text-cyan-400">
              <Sparkles size={14} />
              <span className="text-xs font-medium">
                AI Mentor Active
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1.5 text-green-400">
              <Activity size={14} />
              <span className="text-xs font-medium">
                System Online
              </span>
            </div>

          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight xl:text-5xl">
            Welcome back,
            <br />
            Fiona.
          </h1>

          <p className="mt-5 text-lg font-semibold text-cyan-400">
            Current Driver Score: {dashboard.driver_score.toFixed(1)}
          </p>

          <p className="mt-2 text-base font-medium text-white">
            {driverLevel}
          </p>

          <p className="mt-5 max-w-md leading-7 text-slate-300">
            Your AI mentor has analyzed your latest driving sessions.

            <br />
            <br />

            You have completed{" "}
            <span className="font-semibold text-white">
              {dashboard.total_trips.toLocaleString()}
            </span>{" "}
            trips and travelled{" "}
            <span className="font-semibold text-white">
              {Math.round(
                dashboard.distance
              ).toLocaleString()} km
            </span>
            .

            <br />
            <br />

            Keep driving consistently to increase your Driver Score and unlock higher driving levels.
          </p>

          <div className="mt-6 flex gap-3">

            <Button
              asChild
              size="lg"
              className="rounded-xl px-6"
            >
              <Link href="/start-drive">
                Start Drive
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl"
            >
              <Link href="/progress">
                View Progress
              </Link>
            </Button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative hidden h-[280px] w-[380px] items-center justify-center lg:flex">

          <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl" />

          <Image
            src="/mercedes.png"
            alt="RoadySetGo AI Vehicle"
            width={650}
            height={500}
            priority
            className="relative z-10 drop-shadow-[0_30px_60px_rgba(34,211,238,0.45)] transition-transform duration-500 hover:scale-105"
          />

        </div>

      </div>

    </div>
  );
}