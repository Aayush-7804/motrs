import { overviewIcons } from "@/types/overviewIcons";
import { body, EnD, EnE, features, overview } from "@/types/specifications";
import { format, parseISO } from "date-fns";

export const fetchCarData = async (id: string) => {
  const res = await fetch(`http://localhost:5001/car-details/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const fetchNewsData = async () => {
  const res = await fetch("http://localhost:5001/car-news", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const fetchSimilarData = async (id: string) => {
  const res = await fetch(`http://localhost:5001/car-details/${id}/similar`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

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
