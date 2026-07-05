import {
  Gauge,
  Timer,
  Route,
  Activity,
} from "lucide-react";

const stats = [
  {
    title: "Speed",
    value: "48 km/h",
    subtitle: "Current Speed",
    icon: Gauge,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Drive Score",
    value: "91",
    subtitle: "Excellent",
    icon: Activity,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Duration",
    value: "12:43",
    subtitle: "Current Trip",
    icon: Timer,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Distance",
    value: "8.4 km",
    subtitle: "Distance Driven",
    icon: Route,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
];

export function LiveStats() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="glass-panel p-5"
        >
          <div className="glass-glow" />

          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.bg}`}
              >
                <item.icon
                  className={`h-5 w-5 ${item.color}`}
                />
              </div>

              <span className="text-xs uppercase tracking-widest text-slate-400">
                {item.title}
              </span>
            </div>

            <h3 className="text-3xl font-black text-white">
              {item.value}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}