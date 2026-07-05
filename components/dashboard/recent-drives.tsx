import { ArrowUpRight } from "lucide-react";

const drives = [
  {
    date: "Yesterday",
    score: 84,
    change: "+3",
  },
  {
    date: "Monday",
    score: 82,
    change: "+1",
  },
  {
    date: "Sunday",
    score: 81,
    change: "-2",
  },
];

export function RecentDrives() {
  return (
    <div className="rounded-3xl border bg-card p-6">
      <h2 className="text-xl font-semibold">
        Recent Drives
      </h2>

      <div className="mt-6 space-y-4">
        {drives.map((drive) => (
          <div
            key={drive.date}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <p className="font-medium">{drive.date}</p>
              <p className="text-sm text-muted-foreground">
                Driving Score
              </p>
            </div>

            <div className="text-right">
              <p className="text-xl font-bold">
                {drive.score}
              </p>

              <div className="flex items-center justify-end gap-1 text-green-500">
                <ArrowUpRight className="h-4 w-4" />
                {drive.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}