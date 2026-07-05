import { Camera } from "lucide-react";

export function CameraCard() {
  return (
    <div className="rounded-3xl border bg-card p-6">
      <div className="flex items-center gap-3">
        <Camera className="h-5 w-5 text-green-500" />
        <h2 className="text-xl font-semibold">Camera</h2>
      </div>

      <div className="mt-6 rounded-xl bg-muted p-4">
        Front Camera Connected
      </div>
    </div>
  );
}