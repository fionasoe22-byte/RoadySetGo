"use client";

import {
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Braking", value: 85 },
  { subject: "Cornering", value: 92 },
  { subject: "Speed", value: 78 },
  { subject: "Attention", value: 95 },
  { subject: "Acceleration", value: 88 },
];

export function PerformanceRadar() {
  return (
    <div className="rounded-2xl border bg-card p-6 h-[420px]">
      <h2 className="mb-6 text-lg font-semibold">
        Driver Performance
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            dataKey="value"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.45}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}