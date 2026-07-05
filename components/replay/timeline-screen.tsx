import { ReplayPlayer } from "./replay-player";
import { TimelineEvent } from "./timeline-event";

export function TimelineScreen() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          AI Drive Replay
        </h1>

        <p className="mt-2 text-muted-foreground">
          Review important driving events detected by your AI assistant.
        </p>
      </div>

      <ReplayPlayer />

      <div className="space-y-5">
        <TimelineEvent
          time="08:12"
          title="Hard Braking"
          description="Rapid braking detected near a pedestrian crossing."
          status="warning"
        />

        <TimelineEvent
          time="08:18"
          title="Excellent Lane Keeping"
          description="Vehicle remained centered for over two minutes."
          status="good"
        />

        <TimelineEvent
          time="08:26"
          title="Stop Sign"
          description="Complete stop detected before intersection."
          status="good"
        />

        <TimelineEvent
          time="08:34"
          title="Following Distance"
          description="Vehicle was too close to the car ahead."
          status="warning"
        />
      </div>
    </div>
  );
}