export interface Booking {
  id: string;
  resource: string;
  startTime: string;
  endTime: string;
  requestedBy: string;
  createdAt: Date;
  status: "Ongoing" | "Past" | "Upcoming";
}

export type AvailableSlotsResult = {
  gaps: { start: string; end: string }[];
  nextAvailableSlot: string;
};

export interface AnalyticsSummary {
  nextMeetingIn: string | null;
  totalToday: number;
  totalThisWeek: number;
  totalThisMonth: number;
  mostBookedResource: string | null;
  peakHourRange: string | null;
}
