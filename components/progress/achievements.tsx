import {
  Trophy,
  Award,
  ShieldCheck,
  Moon,
  CarFront,
} from "lucide-react";

const achievements = [
  {
    title: "Smooth Braker",
    icon: Award,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Lane Master",
    icon: ShieldCheck,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Night Driver",
    icon: Moon,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Safe Distance",
    icon: CarFront,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

export function Achievements() {
  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10">
              <Trophy className="h-6 w-6 text-yellow-400" />
            </div>

            <h2 className="text-2xl font-bold text-white">
              Achievements
            </h2>
          </div>

          <span className="text-xs uppercase tracking-widest text-slate-400">
            4 Unlocked
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-cyan-500/10 bg-white/5 p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/5"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
              >
                <item.icon
                  className={`h-6 w-6 ${item.color}`}
                />
              </div>

              <div>
                <p className="font-semibold text-white">
                  {item.title}
                </p>

                <p className="text-sm text-slate-400">
                  Achievement Unlocked
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}