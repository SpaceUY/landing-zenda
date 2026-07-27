import { LANDING_API_URL } from "@/lib/constants";

type LandingEndpoint = "waitlist-card" | "contact-empresas" | "newsletter";

export async function submitLanding(
  endpoint: LandingEndpoint,
  payload: Record<string, string>,
) {
  const res = await fetch(`${LANDING_API_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const json = await res.json().catch(() => null);

  if (!res.ok) {
    const message = Array.isArray(json?.message)
      ? json.message.join(" ")
      : json?.message;
    throw new Error(message || "No pudimos enviar el formulario.");
  }

  return json;
}

export function formToPayload(form: HTMLFormElement) {
  const data = new FormData(form);
  const payload: Record<string, string> = {};
  for (const [key, value] of data.entries()) {
    const trimmed = String(value).trim();
    if (trimmed) payload[key] = trimmed;
  }
  return payload;
}
