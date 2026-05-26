import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1E3F",
          color: "#F5F1EA",
          fontSize: 130,
          fontWeight: 500,
          fontFamily: "Georgia, serif",
          letterSpacing: -4,
        }}
      >
        G
      </div>
    ),
    size,
  );
}
