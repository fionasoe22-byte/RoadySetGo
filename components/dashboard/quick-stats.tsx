import {
  Gauge,
  ShieldCheck,
  CarFront,
  Route,
} from "lucide-react";

import type { DashboardData } from "@/types/dashboard";

import { StatCard } from "./stat-card";

interface QuickStatsProps {
  dashboard: DashboardData;
}

export function QuickStats({
  dashboard,
}: QuickStatsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Driver Score"
        value={dashboard.driver_score.toFixed(1)}
        subtitle={`Level ${dashboard.level}`}
        icon={<Gauge size={20} />}
      />

      <StatCard
        title="Safety Rating"
        value={`${dashboard.safety_rating}%`}
        subtitle="Current Rating"
        icon={<ShieldCheck size={20} />}
      />

      <StatCard
        title="Trips"
        value={dashboard.total_trips.toLocaleString()}
        subtitle="Completed"
        icon={<CarFront size={20} />}
      />

      <StatCard
        title="Distance"
        value={`${Math.round(dashboard.distance).toLocaleString()} km`}
        subtitle="Lifetime"
        icon={<Route size={20} />}
      />
    </div>
  );
}