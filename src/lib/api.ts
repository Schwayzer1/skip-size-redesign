import { Skip } from "@/types/skip";

export async function getSkips(): Promise<Skip[]> {
  const res = await fetch(
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch skips");
  }

  const data: Skip[] = await res.json();
  return data;
}
