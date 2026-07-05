import { AppearanceCard } from "./appearance-card";
import { NotificationsCard } from "./notifications-card";
import { CameraCard } from "./camera-card";
import { AICard } from "./ai-card";
import { PrivacyCard } from "./privacy-card";

export function SettingsScreen() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your RoadySetGo preferences.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AppearanceCard />
        <NotificationsCard />
        <CameraCard />
        <AICard />
        <PrivacyCard />
      </div>
    </div>
  );
}