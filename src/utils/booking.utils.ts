export function getBookingStatus(startTime: string | Date, endTime: string | Date): "Upcoming" | "Ongoing" | "Past" {
  const now = new Date();
  const start = new Date(startTime);
  const end = new Date(endTime);

  if (now < start) {
    return "Upcoming";
  } else if (now >= start && now <= end) {
    return "Ongoing";
  } else {
    return "Past";
  }
}
