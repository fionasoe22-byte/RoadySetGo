"use client";

import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export function ChatInput({
  onSend,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  }

  return (
    <div className="glass-panel p-4">
      <div className="glass-glow" />

      <div className="relative flex items-center gap-3">

        {/* AI Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
          <Sparkles className="h-5 w-5 text-cyan-400" />
        </div>

        {/* Input */}
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask RoadySetGo AI anything..."
          className="
            h-12
            rounded-xl
            border-cyan-500/10
            bg-white/5
            text-white
            placeholder:text-slate-400
            focus-visible:ring-cyan-400
          "
        />

        {/* Send */}
        <Button
          size="icon"
          className="h-12 w-12 rounded-xl"
          onClick={handleSend}
        >
          <Send className="h-5 w-5" />
        </Button>

      </div>
    </div>
  );
}