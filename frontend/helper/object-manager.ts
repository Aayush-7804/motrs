import { CarSpecification } from "@/types/cleaner";
import {
  body,
  EnD,
  EnE,
  features,
  specificationType,
} from "@/types/specifications";
import { fetchDealerData } from "./fetch";
import { dealer } from "@/types/dealer";

export function specificationArrayCreator(
  body: body & CarSpecification,
  EnE: EnE & CarSpecification,
  EnD: EnD & CarSpecification,
  features: features & CarSpecification
): specificationType {
  const cleanSpecBody = specificationObjectCleaner(body);
  const cleanSpecEnD = specificationObjectCleaner(EnD);
  const cleanSpecEnE = specificationObjectCleaner(EnE);
  const cleanSpecFeatures = specificationObjectCleaner(features);
  return [cleanSpecBody, cleanSpecEnD, cleanSpecEnE, cleanSpecFeatures];
}

export function specificationObjectCleaner(prop) {
  const { id, carInfoId, createdAt, updatedAt, ...cleanSpec } = prop;
  return cleanSpec;
}

export function specificationArrayTitle(index: number): string {
  const titles = [
    "Body",
    "Engine & Drivetrain",
    "Engine & Efficiency",
    "Features",
  ];
  return titles[index];
}

export async function getDealerTitle(data: dealer) {
  const dealers = await fetchDealerData("");
  const notCurrentDealer = dealers.filter(
    (dealer: { id: string }) => dealer.id !== data.id
  );

  let title = data.dealer;

  const sameDealerName = notCurrentDealer.filter(
    (dealer: { dealer: string }) => dealer.dealer === data.dealer
  ).length;
  const sameCity = notCurrentDealer.filter(
    (dealer: { location: { city: string } }) =>
      dealer.location.city === data.location.city
  ).length;
  if (sameDealerName > 0) {
    title = title + " " + data.location.streets;
  }
  if (sameCity > 0) {
    title = title + " " + data.location.city;
  }

  return title;
}
