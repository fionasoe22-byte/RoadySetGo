import { DashboardData } from "@/types/dashboard";

const API_URL = "http://127.0.0.1:8000";

// =====================================================
// Dashboard
// =====================================================

export async function getDashboard(): Promise<DashboardData> {
  const response = await fetch(`${API_URL}/dashboard`);

  if (!response.ok) {
    throw new Error("Failed to load dashboard");
  }

  return response.json();
}

// =====================================================
// Drive Summary
// =====================================================

export async function getDriveSummary() {
  const response = await fetch(`${API_URL}/drive-summary`);

  if (!response.ok) {
    throw new Error("Failed to load Drive Summary");
  }

  return response.json();
}

// =====================================================
// AI Coach Dashboard
// =====================================================

export async function getCoach() {
  const response = await fetch(`${API_URL}/coach`);

  if (!response.ok) {
    throw new Error("Failed to load AI Coach");
  }

  return response.json();
}

// =====================================================
// AI Coach Chat
// =====================================================

export async function chatWithCoach(question: string) {
  const response = await fetch(`${API_URL}/coach/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to chat with AI Coach");
  }

  return response.json();
}

// =====================================================
// AI Insights
// =====================================================

export async function getInsights() {
  const response = await fetch(`${API_URL}/insights`);

  if (!response.ok) {
    throw new Error("Failed to load AI Insights");
  }

  return response.json();
}

// =====================================================
// Driver Score Prediction
// =====================================================

export async function predictDriverScore(
  features: Record<string, number>
) {
  const response = await fetch(`${API_URL}/prediction`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      features,
    }),
  });

  if (!response.ok) {
    throw new Error("Prediction failed");
  }

  return response.json();
}
// ========================================
// Profile
// ========================================

export async function getProfile() {
  const response = await fetch(`${API_URL}/profile`);

  if (!response.ok) {
    throw new Error("Failed to load profile");
  }

  return response.json();
}