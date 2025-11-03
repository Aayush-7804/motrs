"use server";

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

export const fetchDealerData = async (dealer: string = '') => {
  const res = await fetch(`http://localhost:5001/car-dealers/${dealer}`);
  const data = await res.json();
  if (dealer.trim() === "") return data;

  return {
    id: data.id,
    dealer: data.dealer,
    car: data.car,
    contact: data.contact,
    schedule: data.schedule,
    location: data.location,
  };
};
