import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-xl shadow-elegant"
          : "border-b border-border/50 bg-background/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2">
          {/* Inline SVG so dark: CSS class works properly */}
          <svg
            viewBox="0 0 452 140"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
            aria-label="nova2labs"
            className="h-7 w-auto md:h-16 text-[#0B1220] dark:text-[#f0f4ff]"
          >
            <g stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
              <path d="M26,110 L26,72 A14 14 0 0 1 54,72 L54,110" />
              <path d="M54,110 C60,108 62,93 66,85" />
              <circle cx="92" cy="84" r="26" />
              <path d="M118,84 C123,78 125,66 128,58" />
              <path d="M128,58 L146,110 L164,58" />
              <path d="M164,58 C168,66 168,80 170,86" />
              <circle cx="192" cy="88" r="22" />
              <path d="M214,58 L214,110" />
              <path d="M214,110 L226,110" />
              <path d="M263,110 L272,110" />
              <path d="M272,30 L272,110" />
              <path d="M272,110 C282,111 286,99 290,88" />
              <circle cx="312" cy="88" r="22" />
              <path d="M334,58 L334,110" />
              <path d="M334,110 L348,110" />
              <path d="M348,30 L348,110" />
              <circle cx="368" cy="88" r="22" />
              <path d="M390,88 C396,80 402,74 407,69" />
              <path d="M431,67 C431,54 410,53 408,68 C406,80 431,80 429,95 C427,110 406,110 404,98" />
              <path d="M18,110 L26,110" />
            </g>
            {/* "2" — original cyan, always */}
            <path d="M227,60 C227,42 258,40 259,61 C260,76 242,87 230,99 L226,110 L263,110" stroke="#15C0E0" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            {/* dot — original cyan, always */}
            <circle cx="14" cy="110" r="6.5" fill="#15C0E0" />
          </svg>
          <span className="font-display text-base font-semibold tracking-tight">
            
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground bg-secondary" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Start a project
          </Link>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="py-3 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
