import { CarSpecification } from "@/types/cleaner";
import {
  body,
  EnD,
  EnE,
  features,
  specificationType,
} from "@/types/specifications";

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
