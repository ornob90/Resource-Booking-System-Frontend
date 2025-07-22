export function formatDateToDisplay(isoDate: string): string {
  const date = new Date(isoDate);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short", // e.g. "Jul"
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
}


