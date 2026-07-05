import { AppShell } from "@/components/layout/app-shell";
import { DashboardGrid } from "@/components/dashboard/dashboard-grid";

export default function Home() {
  return (
    <AppShell>
      <DashboardGrid />
    </AppShell>
  );
}