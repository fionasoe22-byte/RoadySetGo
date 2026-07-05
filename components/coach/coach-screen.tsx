"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ChatInput } from "./chat-input";
import { ChatMessage } from "./chat-message";
import { CoachSummary } from "./coach-summary";
import { CoachAnalysis } from "./coach-analysis";
import { CoachReport } from "./coach-report";

import {
  getCoach,
  chatWithCoach,
} from "@/lib/api";

type CoachResponse = {
  driver_score: number;
  driver_profile: string;
  behavioral_consistency: number;
  recommendation: string;

  ai_confidence: number;
  estimated_next_score: number;
  focus_area: string;

  feedback: {
    intro: string;
    summary: string;
    strengths: string[];
    improvements: string[];
    next_goal: string;
    motivation: string;
  };
};

type Message = {
  role: "assistant" | "user";
  message: string;
};

export function CoachScreen() {
  const [coach, setCoach] = useState<CoachResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function loadCoach() {
      try {
        const data = await getCoach();

        setCoach(data);

        // Only show the introduction inside the chat
        setMessages([
          {
            role: "assistant",
            message: data.feedback.intro,
          },
        ]);
      } catch (error) {
        console.error("Failed to load AI Coach:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCoach();
  }, []);

  async function handleSend(message: string) {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        message,
      },
    ]);

    try {
      const response = await chatWithCoach(message);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          message: response.answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          message:
            "Sorry, I couldn't contact the AI Coach. Please try again.",
        },
      ]);
    }
  }

  return (
    <div className="space-y-8">

      {/* ================= Hero ================= */}

      <div className="glass-panel p-6">
        <div className="glass-glow" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="max-w-2xl">

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
              <Sparkles className="h-4 w-4" />

              <span className="text-sm font-medium">
                RoadySetGo AI Coach
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white xl:text-5xl">
              AI Driving Coach
            </h1>

            <p className="mt-4 text-lg font-semibold text-cyan-400">
              Driver Score{" "}
              <span className="text-white">
                {loading
                  ? "--"
                  : `${coach?.driver_score.toFixed(1)}/100`}
              </span>
            </p>

            <p className="mt-3 max-w-xl leading-7 text-slate-300">
              Your personalized driving mentor analyzes your latest trip
              using machine learning and Gemini AI to help you become a
              safer, smoother, and more confident driver.
            </p>

          </div>

          <Button
            asChild
            size="lg"
            className="rounded-xl px-8"
          >
            <Link href="/dashboard">
              Back to Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

        </div>
      </div>

      {/* ================= Summary ================= */}

      {!loading && coach && (
        <CoachSummary
          score={coach.driver_score}
          profile={coach.driver_profile}
          consistency={coach.behavioral_consistency}
        />
      )}

      {/* ================= Recommendation ================= */}

      {!loading && coach && (
        <CoachAnalysis
          recommendation={coach.recommendation}
        />
      )}

      {/* ================= AI Report ================= */}

      {!loading && coach && (
        <CoachReport
          summary={coach.feedback.summary}
          strengths={coach.feedback.strengths}
          improvements={coach.feedback.improvements}
          nextGoal={coach.feedback.next_goal}
          motivation={coach.feedback.motivation}
        />
      )}

      {/* ================= Conversation ================= */}

      <div className="glass-panel p-6">

        <div className="glass-glow" />

        <div className="relative">

          <div className="mb-6">

            <h2 className="text-2xl font-bold text-white">
              Continue the Conversation
            </h2>

            <p className="mt-2 text-slate-400">
              Ask RoadySetGo AI anything about your latest drive or how you can improve.
            </p>

          </div>

          <div className="space-y-6">

            {loading ? (

              <ChatMessage
                role="assistant"
                message="RoadySetGo AI is analyzing your latest trip..."
              />

            ) : (

              messages.map((msg, index) => (
                <ChatMessage
                  key={index}
                  role={msg.role}
                  message={msg.message}
                />
              ))

            )}

          </div>

        </div>

      </div>

      {/* ================= Suggested Questions ================= */}

      <div className="flex flex-wrap gap-3">

        {[
          "Explain my score",
          "How can I reach 85?",
          "Why is my consistency low?",
          "What should I improve first?",
        ].map((question) => (

          <button
            key={question}
            onClick={() => handleSend(question)}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500/20"
          >
            {question}
          </button>

        ))}

      </div>

      {/* ================= Chat Input ================= */}

      <ChatInput onSend={handleSend} />

    </div>
  );
}