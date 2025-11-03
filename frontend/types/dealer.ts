export type dealer = {
  id: string;
  dealer: string;
  car: { carBrand: string }[];
  contact: string;
  schedule: string[][];
  location: {
    country: string;
    city: string;
    streets: string;
  };
};
