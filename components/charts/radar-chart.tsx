"use client";

import {
  Radar,
  RadarChart as RechartsRadar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import type { RadarPoint } from "@/types/dashboard";

interface RadarChartProps {
  data: RadarPoint[];
}

export function RadarChart({
  data,
}: RadarChartProps) {
  return (
    <div className="w-full">

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">

          <RechartsRadar
            data={data}
            outerRadius="72%"
          >

            <PolarGrid stroke="rgba(255,255,255,0.08)" />

            <PolarAngleAxis
              dataKey="skill"
              tick={{
                fill: "#94a3b8",
                fontSize: 12,
              }}
            />

            <Radar
              dataKey="value"
              stroke="#22d3ee"
              fill="#22d3ee"
              fillOpacity={0.22}
              strokeWidth={3}
              style={{
                filter:
                  "drop-shadow(0 0 12px rgba(34,211,238,.45))",
              }}
            />

          </RechartsRadar>

        </ResponsiveContainer>
      </div>

      <div className="mt-5 border-t border-cyan-500/10 pt-5">

        <div className="grid grid-cols-5">

          {data.map((item) => (

            <div
              key={item.skill}
              className="text-center"
            >

              <p className="text-[11px] uppercase tracking-wide text-slate-500">
                {item.skill}
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                {item.value}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}