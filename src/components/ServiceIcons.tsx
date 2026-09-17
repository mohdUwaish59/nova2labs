/**
 * nova2labs — Custom Service Icons
 * Hand-crafted SVG icons. No icon library. Each one unique.
 * Stroke-based, 24×24 viewBox, accepts className for size/color.
 */

type IconProps = { className?: string };

/* ── AI AGENTS ───────────────────────────────────────────────────────────── */
export function IconAiAgent({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      {/* Hexagonal head */}
      <path d="M12 2L19.5 6.5V14.5L12 19L4.5 14.5V6.5L12 2Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      {/* Brain circuit inside */}
      <circle cx="12" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 8V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9.83 9.25L8.6 8.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M14.17 9.25L15.4 8.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      {/* Connection nodes at bottom */}
      <path d="M9 14.5L10.5 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M15 14.5L13.5 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="9" cy="15.2" r="0.9" fill="currentColor" />
      <circle cx="15" cy="15.2" r="0.9" fill="currentColor" />
      <circle cx="12" cy="16.5" r="0.9" fill="currentColor" />
      <path d="M9 15.2H12M15 15.2H12M12 15.2V16.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      {/* Pulse ring */}
      <circle cx="12" cy="10.5" r="4.5" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1.5 2.5" opacity="0.5" />
    </svg>
  );
}

/* ── LLM / NLP ───────────────────────────────────────────────────────────── */
export function IconLlmNlp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      {/* Text input lines */}
      <rect x="2" y="3" width="20" height="3.5" rx="1.75"
        stroke="currentColor" strokeWidth="1.4" />
      {/* Token blocks */}
      <rect x="2" y="9" width="5.5" height="3" rx="1"
        stroke="currentColor" strokeWidth="1.3" />
      <rect x="9.25" y="9" width="5.5" height="3" rx="1"
        stroke="currentColor" strokeWidth="1.3" />
      <rect x="16.5" y="9" width="5.5" height="3" rx="1"
        stroke="currentColor" strokeWidth="1.3" />
      {/* Attention arrows */}
      <path d="M4.75 12.5V14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 12.5V14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M19.25 12.5V14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Weighted connections */}
      <path d="M4.75 14.5 Q12 13.5 19.25 14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Output layer */}
      <rect x="7" y="17" width="10" height="3.5" rx="1.75"
        stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="18.75" r="0.8" fill="currentColor" />
      <circle cx="9.5" cy="18.75" r="0.5" fill="currentColor" opacity="0.5" />
      <circle cx="14.5" cy="18.75" r="0.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/* ── FULL-STACK ──────────────────────────────────────────────────────────── */
export function IconFullStack({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      {/* Browser chrome */}
      <rect x="2" y="3" width="20" height="14" rx="2"
        stroke="currentColor" strokeWidth="1.4" />
      {/* Title bar */}
      <path d="M2 7H22" stroke="currentColor" strokeWidth="1.2" />
      {/* Dots */}
      <circle cx="5.5" cy="5" r="0.8" fill="currentColor" opacity="0.6" />
      <circle cx="8.5" cy="5" r="0.8" fill="currentColor" opacity="0.4" />
      <circle cx="11.5" cy="5" r="0.8" fill="currentColor" opacity="0.2" />
      {/* Code lines inside */}
      <path d="M6 10.5L8 12.5L6 14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 10.5L16 12.5L18 14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 15L13 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      {/* Stand */}
      <path d="M12 17V20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8.5 20H15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* API bracket */}
      <path d="M2.5 8.5L4 10L2.5 11.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

/* ── DEVOPS ──────────────────────────────────────────────────────────────── */
export function IconDevOps({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      {/* Infinity loop (CI/CD symbol) */}
      <path d="M8.5 12C8.5 12 6 8 3.5 8C1 8 1 12 3.5 12C6 12 8.5 8 11 8H13C15.5 8 18 12 20.5 12C23 12 23 8 20.5 8C18 8 15.5 12 13 12H11C8.5 12 6 16 3.5 16C1 16 1 12 3.5 12"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Deploy arrow up */}
      <path d="M12 4V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M10.3 5.7L12 4L13.7 5.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Deploy arrow down */}
      <path d="M12 16.5V20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M10.3 18.3L12 20L13.7 18.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── DEVSECOPS ───────────────────────────────────────────────────────────── */
export function IconDevSecOps({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      {/* Shield */}
      <path d="M12 2.5L20 6V12C20 16.4 16.4 20.3 12 21.5C7.6 20.3 4 16.4 4 12V6L12 2.5Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      {/* Checkmark */}
      <path d="M8.5 12L10.8 14.3L15.5 9.5"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Scan lines */}
      <path d="M7 12H4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M19.5 12H17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M12 4.5V2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Corner accents */}
      <path d="M8.5 5.2L7 5.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M15.5 5.2L17 5.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

/* ── NETWORKING ──────────────────────────────────────────────────────────── */
export function IconNetworking({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      {/* Central node */}
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.4" />
      {/* Outer nodes */}
      <circle cx="4.5"  cy="6"  r="1.8" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="19.5" cy="6"  r="1.8" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="4.5"  cy="18" r="1.8" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="19.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.3" />
      {/* Connections */}
      <path d="M6.2 7.1L9.9 10.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M17.8 7.1L14.1 10.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6.2 16.9L9.9 13.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M17.8 16.9L14.1 13.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Cross connections */}
      <path d="M6.2 6.8L17.8 6.8" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeDasharray="1.5 2" opacity="0.4" />
      <path d="M6.2 17.2L17.8 17.2" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeDasharray="1.5 2" opacity="0.4" />
    </svg>
  );
}

/* ── IT INFRASTRUCTURE ───────────────────────────────────────────────────── */
export function IconInfrastructure({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      {/* Server rack units */}
      <rect x="3" y="3.5" width="18" height="4" rx="1"
        stroke="currentColor" strokeWidth="1.4" />
      <rect x="3" y="10" width="18" height="4" rx="1"
        stroke="currentColor" strokeWidth="1.4" />
      <rect x="3" y="16.5" width="18" height="4" rx="1"
        stroke="currentColor" strokeWidth="1.4" />
      {/* Status dots row 1 */}
      <circle cx="17.5" cy="5.5" r="0.85" fill="currentColor" opacity="0.8" />
      <circle cx="15.2" cy="5.5" r="0.85" fill="currentColor" opacity="0.4" />
      {/* Status dots row 2 */}
      <circle cx="17.5" cy="12" r="0.85" fill="currentColor" opacity="0.8" />
      <circle cx="15.2" cy="12" r="0.85" fill="currentColor" opacity="0.4" />
      {/* Status dots row 3 */}
      <circle cx="17.5" cy="18.5" r="0.85" fill="currentColor" opacity="0.8" />
      <circle cx="15.2" cy="18.5" r="0.85" fill="currentColor" opacity="0.4" />
      {/* Disk slots */}
      <path d="M6 4.8H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 6.2H10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 11.3H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 12.7H10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 17.8H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 19.2H10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/* ── SMALL ICON WRAPPERS (for capability grid / inline use) ──────────────── */
export const serviceIconMap = {
  "ai-agents":        IconAiAgent,
  "llm-nlp":          IconLlmNlp,
  "full-stack":       IconFullStack,
  "devops":           IconDevOps,
  "devsecops":        IconDevSecOps,
  "networking":       IconNetworking,
  "it-infrastructure": IconInfrastructure,
} as const;

/* ── HEXAGON WRAPPER ─────────────────────────────────────────────────────── */
export function HexIcon({
  children,
  className = "",
  size = 52,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: number;
  variant?: "default" | "gradient" | "outline";
}) {
  const r = (size / 2) * 0.9;
  const cx = size / 2;
  const cy = size / 2;
  // pointy-top hexagon
  const pts = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 30);
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className="absolute inset-0"
        aria-hidden
      >
        {variant === "gradient" && (
          <defs>
            <linearGradient id={`hexGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.75 0.15 200)" />
              <stop offset="100%" stopColor="oklch(0.68 0.18 220)" />
            </linearGradient>
          </defs>
        )}
        <polygon
          points={pts}
          fill={
            variant === "gradient"
              ? `url(#hexGrad-${size})`
              : variant === "outline"
              ? "transparent"
              : "var(--color-secondary)"
          }
          stroke={variant === "outline" ? "var(--color-primary)" : "none"}
          strokeWidth={variant === "outline" ? 1.5 : 0}
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </div>
  );
}
