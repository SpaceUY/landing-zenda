<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Analytics (OpenPanel) — instrument every new conversion point

The site tracks events with OpenPanel (self-hosted; `OpenPanelComponent` in
`app/layout.tsx`, API URL in `lib/constants.ts`). GA4 also runs in the layout;
leave it alone. **Whenever you add or move a CTA, outbound link, or form,
wire up tracking in the same change** — don't leave it for later.

Conventions:

- **Event names**: snake_case, `<subject>_<action>` (e.g. `app_cta_click`,
  `waitlist_submit`). Reuse existing names when the destination is the same;
  distinguish position via the `placement` property, not a new event name.
- **Links/buttons** (works in server components — no `"use client"` needed):
  add `data-track="<event>" data-placement="<location>"` to the `<a>`/`<button>`
  (also works on `next/link`). Extra `data-*` attrs become camelCased properties.
- **Forms / imperative events** (client components only): `const { track } =
  useOpenPanel()` from `@openpanel/nextjs`; call `track("<event>")` only on
  success, right after the submit resolves.
- **Existing taxonomy**: `app_cta_click {placement: header_login | header_cta |
  hero | how_it_works}` (links to APP_URL), `google_play_click {placement}`,
  `empresas_cta_click {placement: empresas_hero | footer}`, `waitlist_submit`,
  `empresas_submit`, `newsletter_submit`. `screen_view` and `link_out` are
  automatic.
- New event names or funnels should be reflected in the OpenPanel dashboard
  (openpanel.1930.dev) — remind the user to add the funnel there.
- Local dev note: `/track` returns 401 from localhost (CORS allowlist only
  covers zenda.cash) — the request payload is still the right thing to verify.
