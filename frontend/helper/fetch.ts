"use server";

import { redirect } from "next/navigation";

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

export const fetchDealerData = async (dealer: string = "") => {
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

export const submitForm = async (formData) => {
  const name = formData.get("name");
  const lastName = formData.get("last-name");
  const email = formData.get("email");
  const mobileNumber = formData.get("mobile-number");
  const message = formData.get("message");
  const TnC = formData.get("teams-condition");
  console.log(name, lastName, email, mobileNumber, message, TnC);

  if (
    !TnC ||
    TnC.trim() === "" ||
    name.trim() === "" ||
    email.trim() === "" ||
    message.trim() === "" ||
    lastName.trim() === "" ||
    mobileNumber.trim() === ""
  ) {
    console.log("not send");
  }

  const data = {
    name,
    lastName,
    email,
    mobileNumber,
    message,
  };

  const res = await fetch(
    `http://localhost:5001/deal/9f386734-5406-41b8-957e-3cb378c40076`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }
  );
  const response = await res.json();

  console.log(response);

  redirect("/");
};
