"use client";

import {
  Calendar,
  Route,
  Clock3,
  Trophy,
} from "lucide-react";

type Session = {
  date: string;
  score: number;
  distance: string;
  duration: string;
};

type SessionsTableProps = {
  sessions: Session[];
};

export function SessionsTable({
  sessions,
}: SessionsTableProps) {
  return (
    <div className="glass-panel p-6">
      <div className="glass-glow" />

      <div className="relative">

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            Recent Driving Sessions
          </h2>

          <span className="text-xs uppercase tracking-widest text-slate-400">
            Last 7 Days
          </span>

        </div>

        {/* Sessions */}

        <div className="space-y-4">

          {sessions.map((session, index) => (

            <div
              key={index}
              className="flex items-center justify-between rounded-2xl border border-cyan-500/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/5"
            >

              {/* Date */}

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-cyan-500/10 p-3">

                  <Calendar className="h-5 w-5 text-cyan-400" />

                </div>

                <div>

                  <p className="font-semibold text-white">
                    {session.date}
                  </p>

                  <p className="text-sm text-slate-400">
                    Driving Session
                  </p>

                </div>

              </div>

              {/* Stats */}

              <div className="hidden items-center gap-10 md:flex">

                <div className="text-center">

                  <Route className="mx-auto mb-2 h-5 w-5 text-cyan-400" />

                  <p className="text-sm text-slate-400">
                    Distance
                  </p>

                  <p className="font-semibold text-white">
                    {session.distance}
                  </p>

                </div>

                <div className="text-center">

                  <Clock3 className="mx-auto mb-2 h-5 w-5 text-yellow-400" />

                  <p className="text-sm text-slate-400">
                    Duration
                  </p>

                  <p className="font-semibold text-white">
                    {session.duration}
                  </p>

                </div>

                <div className="text-center">

                  <Trophy className="mx-auto mb-2 h-5 w-5 text-green-400" />

                  <p className="text-sm text-slate-400">
                    Score
                  </p>

                  <p
                    className={`text-xl font-bold ${
                      session.score >= 90
                        ? "text-green-400"
                        : session.score >= 75
                        ? "text-cyan-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {session.score}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}