"use client";

type Profile = {
  name: string;
  email: string;

  driver_profile: string;
  driver_score: number;

  total_trips: number;
  total_distance: number;
  safe_drives: number;

  member_since: string;
  achievement: string;
};

type StatisticsCardProps = {
  profile: Profile;
};

export function StatisticsCard({
  profile,
}: StatisticsCardProps) {

  // Calculate safety rating
  const safetyRating =
    profile.total_trips > 0
      ? Math.round(
          (profile.safe_drives / profile.total_trips) * 100
        )
      : 0;

  const stats = [
    {
      label: "Driver Score",
      value: profile.driver_score.toFixed(1),
    },
    {
      label: "Safety Rating",
      value: `${safetyRating}%`,
    },
    {
      label: "Total Drives",
      value: profile.total_trips.toLocaleString(),
    },
    {
      label: "Distance",
      value: `${profile.total_distance.toLocaleString()} km`,
    },
  ];

  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Driving Statistics
        </h2>

        <div className="grid grid-cols-2 gap-6">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-cyan-500/10 bg-white/5 p-5"
            >
              <p className="text-sm text-slate-400">
                {stat.label}
              </p>

              <p className="mt-3 text-3xl font-black text-cyan-400">
                {stat.value}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}