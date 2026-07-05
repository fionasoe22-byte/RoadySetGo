"use client";

import {
  Camera,
  Circle,
  Gauge,
  Navigation,
  Wifi,
} from "lucide-react";

export function CameraFeed() {
  return (
    <div className="glass-panel p-3">
      <div className="glass-glow" />

      <div className="relative flex h-[460px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950">

        {/* Background Glow */}
        <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Top Overlay */}
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent p-5">

          <div className="flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-red-400 backdrop-blur-md">
            <Circle className="h-3 w-3 fill-current" />
            <span className="text-sm font-semibold">
              REC
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-white backdrop-blur-md">
            <Gauge className="h-4 w-4 text-cyan-400" />
            <span className="font-semibold">
              0 km/h
            </span>
          </div>

        </div>

        {/* Center */}
        <div className="relative z-10 text-center">

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-cyan-500/10 backdrop-blur-xl">
            <Camera className="h-14 w-14 text-cyan-400" />
          </div>

          <h2 className="mt-8 text-3xl font-bold text-white">
            Dashcam Ready
          </h2>

          <p className="mt-3 max-w-md text-slate-400">
            Waiting for camera connection.
            Live driving footage will appear here once your drive starts.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-5 py-3 text-cyan-300">
            <Wifi className="h-4 w-4" />
            Camera Standby
          </div>

        </div>

        {/* Bottom Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-2xl font-bold text-white">
                AI Vision
              </h2>

              <p className="mt-1 text-slate-300">
                Lane detection, vehicle tracking and road sign recognition.
              </p>
            </div>

            <div className="flex gap-3">

              <div className="rounded-xl bg-cyan-500/20 p-3 backdrop-blur-md">
                <Camera className="h-6 w-6 text-cyan-300" />
              </div>

              <div className="rounded-xl bg-cyan-500/20 p-3 backdrop-blur-md">
                <Navigation className="h-6 w-6 text-cyan-300" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}