import { Moon } from "lucide-react";

export function AppearanceCard() {
  return (
    <div className="rounded-3xl border bg-card p-6">
      <div className="flex items-center gap-3">
        <Moon className="h-5 w-5 text-blue-500" />
        <h2 className="text-xl font-semibold">Appearance</h2>
      </div>

      <div className="mt-6 rounded-xl bg-muted p-4">
        Theme: Dark Mode
      </div>
    </div>
  );
}