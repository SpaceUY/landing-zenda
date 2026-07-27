import type { NextRequest } from "next/server";

// Same-origin proxy for the landing API. Beyond dodging CORS, this exists
// because the upstream 500s on any request that carries an `Origin` header —
// which the browser always sends on POST. Forwarding server-side drops it.
const LANDING_API_ORIGIN =
  process.env.LANDING_API_ORIGIN ?? "https://api.zenda.cash";

const ENDPOINTS = new Set(["contact-empresas", "newsletter", "waitlist-card"]);

export async function POST(
  request: NextRequest,
  ctx: RouteContext<"/api/landing/[endpoint]">,
) {
  const { endpoint } = await ctx.params;

  if (!ENDPOINTS.has(endpoint)) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  const upstream = await fetch(
    `${LANDING_API_ORIGIN}/api/landing/${endpoint}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: await request.text(),
    },
  );

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: {
      "Content-Type":
        upstream.headers.get("content-type") ?? "application/json",
    },
  });
}
