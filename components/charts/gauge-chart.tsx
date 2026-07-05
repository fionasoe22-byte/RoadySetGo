"use client";

import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
});

export function GaugeChart() {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold">
        Driver Score
      </h2>

      <Plot
        data={[
          {
            type: "indicator",
            mode: "gauge+number",
            value: 87,
            gauge: {
              axis: { range: [0, 100] },
              bar: { color: "#3b82f6" },
            },
          },
        ]}
        layout={{
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
          width: 350,
          height: 300,
          margin: { t: 20, b: 20, l: 20, r: 20 },
          font: { color: "white" },
        }}
        config={{
          displayModeBar: false,
          responsive: true,
        }}
      />
    </div>
  );
}