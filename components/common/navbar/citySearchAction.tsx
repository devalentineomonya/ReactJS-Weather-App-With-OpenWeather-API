"use server";
import {LocationInfo} from "@/types/location"
export default async function citySearchHandler(query: string) {
  if (!query) {
    return { error: "Query parameter is required" };
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${query}&format=json`
    );
    const data:LocationInfo[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching city data:", error);
    return { error: "Failed to fetch city data" };
  }
}
