import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

type TimelineEventProps = {
  time: string;
  title: string;
  description: string;
  status: "good" | "warning";
};

export function TimelineEvent({
  time,
  title,
  description,
  status,
}: TimelineEventProps) {
  return (
    <div className="rounded-3xl border bg-card p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            {time}
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            {status === "good" ? "✅" : "⚠️"} {title}
          </h3>

          <p className="mt-2 text-muted-foreground">
            {description}
          </p>
        </div>

        <Button variant="outline">
          <PlayCircle className="mr-2 h-4 w-4" />
          Replay
        </Button>
      </div>
    </div>
  );
}