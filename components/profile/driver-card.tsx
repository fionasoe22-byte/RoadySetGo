"use client";

import {
  Award,
  Crown,
  ShieldCheck,
} from "lucide-react";

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

type DriverCardProps = {
  profile: Profile;
};

export function DriverCard({
  profile,
}: DriverCardProps) {

  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">

        {/* Header */}

        <div className="flex items-center gap-5">

          {/* Avatar */}

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-4xl font-black text-white shadow-lg shadow-cyan-500/30">
            {initials}
          </div>

          {/* User Info */}

          <div className="flex-1">

            <div className="flex items-center gap-2">

              <h2 className="text-3xl font-black text-white">
                {profile.name}
              </h2>

              <div className="rounded-full bg-yellow-500/10 p-2">
                <Crown className="h-4 w-4 text-yellow-400" />
              </div>

            </div>

            <p className="mt-1 text-lg font-medium text-cyan-400">
              {profile.driver_profile}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              {profile.email}
            </p>

            <div className="mt-4 flex items-center gap-2 text-slate-400">

              <Award className="h-5 w-5 text-yellow-400" />

              <span className="text-sm">
                Member since {profile.member_since}
              </span>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-6 border-t border-cyan-500/10" />

        {/* Statistics */}

        <div className="grid grid-cols-3 gap-4">

          <div className="rounded-2xl bg-white/5 p-4 text-center">

            <p className="text-3xl font-black text-cyan-400">
              {profile.driver_score.toFixed(1)}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Driver Score
            </p>

          </div>

          <div className="rounded-2xl bg-white/5 p-4 text-center">

            <p className="text-3xl font-black text-green-400">
              {profile.safe_drives}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Safe Trips
            </p>

          </div>

          <div className="rounded-2xl bg-white/5 p-4 text-center">

            <ShieldCheck className="mx-auto mb-2 h-6 w-6 text-cyan-400" />

            <p className="font-semibold text-white">
              {profile.achievement}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}