import {
  Gauge,
  ShieldCheck,
  Route,
  Car,
} from "lucide-react";

import { StatCard } from "./stat-card";

export function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Driver Score"
        value="87"
        subtitle="Expert Driver"
        icon={<Gauge size={22} />}
      />

      <StatCard
        title="Safety Rating"
        value="98%"
        subtitle="Excellent"
        icon={<ShieldCheck size={22} />}
      />

      <StatCard
        title="Trips"
        value="128"
        subtitle="Completed"
        icon={<Car size={22} />}
      />

      <StatCard
        title="Distance"
        value="1,248 km"
        subtitle="Total Driven"
        icon={<Route size={22} />}
      />
    </div>
  );
}