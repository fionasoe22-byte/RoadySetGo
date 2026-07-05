import { Shield } from "lucide-react";

export function PrivacyCard() {
  return (
    <div className="rounded-3xl border bg-card p-6">
      <div className="flex items-center gap-3">
        <Shield className="h-5 w-5 text-red-500" />
        <h2 className="text-xl font-semibold">Privacy</h2>
      </div>

      <div className="mt-6 rounded-xl bg-muted p-4">
        Drive recordings encrypted
      </div>
    </div>
  );
}