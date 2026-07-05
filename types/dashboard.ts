export interface RadarPoint {
  skill: string;
  value: number;
}

export interface DashboardData {
  driver_score: number;
  average_score: number;
  safety_rating: number;
  total_trips: number;
  distance: number;

  xp: number;
  level: number;
  streak: number;

  driver_profile: string;
  behavioral_consistency: number;
  recommendation: string;

  radar: RadarPoint[];
}