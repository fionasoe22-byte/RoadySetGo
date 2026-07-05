import { AppShell } from "@/components/layout/app-shell";
import { TimelineScreen } from "@/components/replay/timeline-screen";

export default function ReplayPage() {
  return (
    <AppShell>
      <TimelineScreen />
    </AppShell>
  );
}