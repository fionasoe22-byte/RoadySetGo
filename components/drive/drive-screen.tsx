"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CameraFeed } from "./camera-feed";
import { LiveStats } from "./live-stats";
import { LiveAlerts } from "./live-alerts";

export function DriveScreen() {
  return (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold">
        Start Drive
      </h1>

      <p className="mt-2 text-muted-foreground">
        Your AI companion is actively monitoring your drive.
      </p>
    </div>

    <CameraFeed />

    <LiveStats />

    <LiveAlerts />

    <div className="flex justify-end">
      <Button asChild size="lg">
        <Link href="/drive-summary">
          End Drive
        </Link>
      </Button>
    </div>
  </div>
  );
}