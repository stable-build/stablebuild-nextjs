import { ImageResponse } from "next/og";

export const alt = "StableBuild social preview card";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const pills = ["Security-first", "AI systems", "Protocol-grade", "Senior execution"];
const description =
  "Security-first full-stack systems for product teams, AI workflows, and protocol-grade engineering shipped by the same people who scope the work.";

function BrandMark() {
  return (
    <svg
      width="64"
      height="58"
      viewBox="0 0 145 130"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="145" height="130" rx="22" fill="#f7f7f7" />
      <rect x="15" y="10" width="58" height="14" fill="#1c1c1c" />
      <rect x="15" y="24" width="14" height="31" fill="#1c1c1c" />
      <rect x="15" y="55" width="58" height="14" fill="#1c1c1c" />
      <rect x="59" y="69" width="14" height="37" fill="#1c1c1c" />
      <rect x="15" y="106" width="58" height="14" fill="#1c1c1c" />
      <rect x="15" y="75" width="14" height="35" fill="#1c1c1c" />
      <rect x="73" y="10" width="14" height="110" fill="#fa651e" />
      <rect x="87" y="10" width="43" height="14" fill="#fa651e" />
      <rect x="116" y="24" width="14" height="31" fill="#fa651e" />
      <rect x="87" y="55" width="43" height="14" fill="#fa651e" />
      <rect x="116" y="69" width="14" height="38" fill="#fa651e" />
      <rect x="87" y="106" width="43" height="14" fill="#fa651e" />
    </svg>
  );
}

function PatternField() {
  const columns = 12;
  const rows = 7;
  const glyphs = ["<", ">", "/", "=", ":", "[]", "{}", "*"];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        opacity: 0.18,
      }}
    >
      {Array.from({ length: columns * rows }, (_, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);

        return (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${(column / (columns - 1)) * 100}%`,
            top: `${(row / (rows - 1)) * 100}%`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: index % 5 === 0 ? "#fa651e" : "#b8b3aa",
            fontSize: 18 + (index % 3) * 3,
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            width: 36,
            height: 24,
            transform: "translate(-50%, -50%)",
          }}
        >
          {glyphs[index % glyphs.length]}
        </div>
        );
      })}
    </div>
  );
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 58% 22%, rgba(250,101,30,0.18), transparent 24%), linear-gradient(180deg, #fffefb 0%, #f7f7f3 54%, #f1ece4 100%)",
          color: "#111111",
        }}
      >
        <PatternField />

        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            height: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 18px",
            borderRadius: 28,
            border: "1px solid rgba(255,255,255,0.7)",
            background: "rgba(255,255,255,0.76)",
            boxShadow: "0 18px 48px rgba(24,24,27,0.07)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid #e6e4df",
                background: "#ffffff",
                boxShadow: "0 4px 12px rgba(24,24,27,0.07)",
              }}
            >
              <BrandMark />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                }}
              >
                StableBuild
              </div>
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.34em",
                  color: "#6b7280",
                }}
              >
                Build fast. Build stable.
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 24px",
              borderRadius: 999,
              background: "#111111",
              color: "#ffffff",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            stablebuild.tech
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            inset: "124px 54px 44px 54px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: 620,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "flex-start",
                gap: 12,
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.82)",
                boxShadow: "0 10px 30px rgba(24,24,27,0.06)",
                color: "#5f6470",
                textTransform: "uppercase",
                letterSpacing: "0.26em",
                fontSize: 16,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#34c784",
                }}
              />
              Available for product, AI, and protocol work
            </div>

            <div
              style={{
                marginTop: 28,
                display: "flex",
                flexDirection: "column",
                fontSize: 88,
                lineHeight: 0.95,
                letterSpacing: "-0.065em",
                fontWeight: 700,
              }}
            >
              <div style={{ display: "flex" }}>Build fast.</div>
              <div style={{ display: "flex" }}>
                <span>Build&nbsp;</span>
                <span style={{ color: "#fa651e" }}>secure.</span>
              </div>
              <div style={{ display: "flex" }}>Ship confident.</div>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 28,
                maxWidth: 560,
                color: "#5f6470",
                fontSize: 29,
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
          </div>

          <div
            style={{
              width: 430,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 390,
                height: 390,
                borderRadius: 999,
                border: "1px solid rgba(235, 155, 117, 0.55)",
                boxShadow: "0 0 0 22px rgba(255,255,255,0.22)",
                opacity: 0.95,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 310,
                height: 310,
                borderRadius: 999,
                border: "1px solid rgba(235, 155, 117, 0.38)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 430,
                height: 430,
                borderRadius: 999,
                background:
                  "radial-gradient(circle, rgba(250,101,30,0.16) 0%, rgba(250,101,30,0.05) 38%, transparent 70%)",
              }}
            />

            {[
              { top: 38, left: 126, label: "TS", bg: "#45b4e8", fg: "#ffffff" },
              { top: 76, left: 254, label: "AI", bg: "#111111", fg: "#ffffff" },
              { top: 190, left: 30, label: "API", bg: "#ffffff", fg: "#3178c6" },
              { top: 278, left: 120, label: "SEC", bg: "#fde68a", fg: "#7c2d12" },
              { top: 304, left: 274, label: "WEB3", bg: "#ffffff", fg: "#111111" },
              { top: 186, left: 308, label: "OPS", bg: "#ffffff", fg: "#fa651e" },
            ].map((node) => (
              <div
                key={node.label}
                style={{
                  position: "absolute",
                  top: node.top,
                  left: node.left,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 84,
                  height: 54,
                  padding: "0 18px",
                  borderRadius: 18,
                  border: "1px solid rgba(228, 224, 216, 0.9)",
                  background: node.bg,
                  color: node.fg,
                  boxShadow: "0 10px 26px rgba(24,24,27,0.08)",
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                }}
              >
                {node.label}
              </div>
            ))}

            <div
              style={{
                display: "flex",
                position: "absolute",
                bottom: -6,
                left: 38,
                right: 38,
                justifyContent: "space-between",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              {pills.map((pill) => (
                <div
                  key={pill}
                  style={{
                    padding: "10px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(229,225,217,0.95)",
                    background: "rgba(255,255,255,0.76)",
                    color: "#5f6470",
                    fontSize: 15,
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                  }}
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
