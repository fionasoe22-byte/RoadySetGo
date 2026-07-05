import {
  Bot,
  User,
  Sparkles,
} from "lucide-react";

type ChatMessageProps = {
  role: "assistant" | "user";
  message: string;
};

export function ChatMessage({
  role,
  message,
}: ChatMessageProps) {
  const isAssistant = role === "assistant";

  return (
    <div
      className={`flex items-start gap-4 ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
    >
      {/* ================= AI Avatar ================= */}

      {isAssistant && (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
          <Bot className="h-5 w-5 text-cyan-400" />
        </div>
      )}

      {/* ================= Bubble ================= */}

      <div
        className={`rounded-3xl px-6 py-5 shadow-xl transition-all ${
          isAssistant
            ? "w-full max-w-[92%] border border-cyan-500/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 backdrop-blur-xl"
            : "max-w-[70%] bg-gradient-to-r from-cyan-500 to-sky-500 text-white"
        }`}
      >
        {/* Header */}

        <div className="mb-4 flex items-center justify-between">

          <div className="flex items-center gap-2">

            {isAssistant && (
              <Sparkles
                size={14}
                className="text-cyan-400"
              />
            )}

            <span
              className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                isAssistant
                  ? "text-cyan-400"
                  : "text-white/80"
              }`}
            >
              {isAssistant
                ? "RoadySetGo AI"
                : "You"}
            </span>

          </div>

          {isAssistant && (
            <span className="text-[11px] text-slate-500">
              Just now
            </span>
          )}

        </div>

        {/* Message */}

        <div className="space-y-4">

          {message
            .split("\n")
            .filter(Boolean)
            .map((line, index) => (
              <p
                key={index}
                className={`leading-8 ${
                  isAssistant
                    ? "text-slate-200"
                    : "text-white"
                }`}
              >
                {line}
              </p>
            ))}

        </div>

      </div>

      {/* ================= User Avatar ================= */}

      {!isAssistant && (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500 shadow-lg">
          <User className="h-5 w-5 text-white" />
        </div>
      )}
    </div>
  );
}