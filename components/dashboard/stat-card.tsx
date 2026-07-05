interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  delta?: string;
}

export function StatCard({
  title,
  value,
  subtitle,
  icon,
  delta,
}: StatCardProps) {
  return (
    <div className="glass-panel p-6 h-full">
      <div className="glass-glow" />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
            {icon}
          </div>

          <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
            {title}
          </span>
        </div>

        <div className="flex items-end justify-between">
          <span className="text-4xl font-black tracking-tight text-white">
            {value}
          </span>

          {delta && (
            <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-400">
              {delta}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-slate-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}