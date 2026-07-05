import { Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TodaysMission() {
  return (
    <div className="rounded-3xl border bg-card p-6">
      <div className="flex items-center gap-3">
        <Target className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold">Today's Mission</h2>
      </div>

      <div className="mt-6 rounded-2xl bg-muted/40 p-5">
        <p className="text-lg font-medium">
          Reduce harsh braking
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          Focus on anticipating traffic lights and keeping a safe
          following distance to avoid sudden braking.
        </p>
      </div>

      <Button className="mt-6 w-full rounded-xl">
        View Driving Tips
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}