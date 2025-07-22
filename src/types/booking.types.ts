export interface Booking {
  id: string;
  resource: string;
  startTime: string;
  endTime: string;
  requestedBy: string;
  createdAt: Date;
  status: "Ongoing" | "Past" | "Upcoming"
}

export type AvailableSlotsResult = {
  gaps: { start: string; end: string }[];
  nextAvailableSlot: string;
};