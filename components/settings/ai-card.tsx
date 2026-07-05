import { Bot } from "lucide-react";

export function AICard() {
  return (
    <div className="rounded-3xl border bg-card p-6">
      <div className="flex items-center gap-3">
        <Bot className="h-5 w-5 text-purple-500" />
        <h2 className="text-xl font-semibold">AI Assistant</h2>
      </div>

      <div className="mt-6 rounded-xl bg-muted p-4">
        Gemini AI Enabled
      </div>
    </div>
  );
}