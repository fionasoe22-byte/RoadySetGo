interface ActivityItemProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
}

export function ActivityItem({ icon, color, title, description }: ActivityItemProps) {
  return (
    <div className="flex gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0">
      <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-0.5 text-sm leading-relaxed text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}