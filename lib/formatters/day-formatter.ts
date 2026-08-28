import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const dayFormatPatterns = {
  compact: "MMMM D, YYYY",
  short: "MMM D, YYYY",
  numeric: "DD/MM/YYYY",
  day: "DD",
  month: "MMM",
} as const;

type DayFormat = keyof typeof dayFormatPatterns | "relative";

const formatDay = (value: string, format: DayFormat = "compact") =>
  format === "relative"
    ? dayjs(value).fromNow()
    : dayjs(value).format(dayFormatPatterns[format]);

export { formatDay };
export type { DayFormat };
