"use client";

import { useEffect, useState } from "react";

import { DriverCard } from "./driver-card";
import { StatisticsCard } from "./statistics-card";
import { LicensesCard } from "./licenses-card";
import { VehicleCard } from "./vehicle-card";

import { getProfile } from "@/lib/api";

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

export function ProfileScreen() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        console.error("Failed to load profile:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="glass-panel p-12 text-center">
        <h2 className="text-xl font-semibold text-white">
          Loading Driver Profile...
        </h2>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="glass-panel p-12 text-center">
        <h2 className="text-xl font-semibold text-red-400">
          Failed to load profile.
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Driver Profile
        </h1>

        <p className="mt-2 text-slate-400">
          Your driving identity and lifetime achievements.
        </p>
      </div>

      <DriverCard profile={profile} />

      <StatisticsCard profile={profile} />

      <div className="grid gap-6 lg:grid-cols-2">

        <LicensesCard />

        <VehicleCard />

      </div>

    </div>
  );
}