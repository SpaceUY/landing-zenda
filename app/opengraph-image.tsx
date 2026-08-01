import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Zenda | La primera tarjeta cripto de Uruguay";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const markSvg = await readFile(
    join(process.cwd(), "public/icon-light.svg"),
    "utf-8",
  );
  const markSrc = `data:image/svg+xml;base64,${Buffer.from(markSvg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #5511d6 0%, #400da0 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={44} height={44} alt="" />
          <span
            style={{
              fontSize: 40,
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            zenda
          </span>
        </div>
        <div
          style={{
            marginTop: 56,
            display: "flex",
            maxWidth: 920,
            fontSize: 62,
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          Todo lo que necesitás para operar cripto, en un solo lugar.
        </div>
        <div
          style={{
            marginTop: 32,
            display: "flex",
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          La primera tarjeta cripto de Uruguay
        </div>
      </div>
    ),
    { ...size },
  );
}
