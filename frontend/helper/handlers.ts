import { overviewIcons } from "@/types/overviewIcons";
import { body, EnD, EnE, features, overview } from "@/types/specifications";
import { format, parseISO } from "date-fns";

export const objectEntries = (
  spec: body | EnD | EnE | features | overview | overviewIcons
) => {
  return Object.entries(spec);
};

export const dateConversion = (date: string) => {
  return format(parseISO(date), "d MMM yyyy");
};

export const carHierarchy = (current: string, previous: string) => {
  if (parseInt(current) > parseInt(previous) - parseInt(previous) * 0.1) {
    return false;
  }
  return true;
};

export const toZAR = (amount: string): string => {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(num)) return "R0";

  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(num)
    .replace(/,/g, " ")
    .trim();
};

export const scheduling = (schedule: string[][]) => {
  const weeklySlots: string[][] = [
    ["9:31", "22:15"], // Sun
    ["9:32", "22:25"], // Mon
    ["9:33", "22:35"], // Tue
    ["9:34", "22:45"], // Wed
    ["9:35", "22:55"], // Thu
    ["9:36", "12:05"], // Fri
    ["close", "close"], // Sat
  ];
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const toMinutes = (time: string): number => {
    const [h, m] = time.split(":").map(Number);
    if (m) {
      return h * 60 + m;
    }
    return h * 60;
  };

  const format12 = (time: string): string => {
    const [h, m] = time.split(":").map(Number);
    const period = h >= 12 ? "pm" : "am";
    const displayH = h === 0 ? 12 : h > 12 ? h - 12 : h;
    return `${displayH}:${m ? m.toString().padStart(2, "0") : "00"} ${period}`;
  };

  const findNextOpen = (
    slots: string[][],
    startIdx: number
  ): string | undefined => {
    for (let i = 0; i < 7; i++) {
      const idx = (startIdx + i) % 7;
      const slot = slots[idx];
      if (slot[0] !== "close") {
        const dayName = day[idx];
        const suffix =
          i === -1 ? "today" : i === 0 ? "tomorrow" : `next ${dayName}`;
        return `${format12(slot[0])} ${suffix}`;
      }
    }
    return undefined;
  };

  const getTimeStatus = (
    slots: string[][],
    dayIndex: number = new Date().getDay()
  ) => {
    const today = slots[dayIndex - 1];
    const currentMinutes = new Date().getHours() * 60 + new Date().getMinutes();

    // Full day closed
    if (today[0] === "close" || today[1] === "close") {
      return {
        isOpen: false,
        label: "Closed",
        nextOpen: findNextOpen(slots, dayIndex % 7),
      };
    }

    const openMin = toMinutes(today[0]);
    const closeMin = toMinutes(today[1]);
    const open12 = format12(today[0]);
    const close12 = format12(today[1]);
    const label = `${open12}-${close12}`;

    const isOpen = currentMinutes >= openMin && currentMinutes < closeMin;

    if (isOpen) {
      return { isOpen, label, nextClose: close12 };
    }

    const nextOpen =
      currentMinutes < openMin
        ? `${open12} today`
        : findNextOpen(slots, dayIndex % 7);

    return { isOpen: false, label, nextOpen, nextClose: close12 };
  };

  const status = getTimeStatus(schedule);

  console.log(new Date().getDay());
  return status;
};
