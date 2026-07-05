import { Bell } from "lucide-react";

export function NotificationsCard() {
  return (
    <div className="rounded-3xl border bg-card p-6">
      <div className="flex items-center gap-3">
        <Bell className="h-5 w-5 text-yellow-500" />
        <h2 className="text-xl font-semibold">Notifications</h2>
      </div>

      <div className="mt-6 rounded-xl bg-muted p-4">
        Driving Alerts Enabled
      </div>
    </div>
  );
}