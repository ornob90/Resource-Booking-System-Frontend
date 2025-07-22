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

export function getStatusStyles(status: string) {
  switch (status) {
    case "Upcoming":
      return {
        background: "#E6F2DF",
        color: "#2D2D2D",     
      };
    case "Ongoing":
      return {
        background: "#4F9EF8",
        color: "#FFFFFF",     
      };
    case "Past":
      return {
        background: "#F7B9AC",
        color: "#4A2F2F",     
      };
    default:
      return {
        background: "#E0E0E0",
        color: "#333333",     
      };
  }
}
