import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

function FooterLogo() {
  return (
    <svg
      viewBox="0 0 452 140"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-label="nova2labs"
      className="h-8 w-auto text-foreground"
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
      <path d="M227,60 C227,42 258,40 259,61 C260,76 242,87 230,99 L226,110 L263,110" stroke="#15C0E0" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="110" r="6.5" fill="#15C0E0" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">

          {/* Brand col */}
          <div className="md:col-span-5">
            <FooterLogo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A freelance engineering agency delivering AI solutions, cloud infrastructure,
              custom software development, and DevOps services for modern businesses.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="mailto:contact@nova2labs.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-[#15C0E0] hover:text-[#15C0E0]"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-[#15C0E0] hover:text-[#15C0E0]"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-[#15C0E0] hover:text-[#15C0E0]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:col-span-1 md:block" />

          {/* Navigate col */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-[#15C0E0]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground transition-colors hover:text-[#15C0E0]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground transition-colors hover:text-[#15C0E0]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground transition-colors hover:text-[#15C0E0]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services col */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>AI Solutions</li>
              <li>Cloud Infrastructure</li>
              <li>Custom Software</li>
              <li>DevOps</li>
            </ul>
          </div>

          {/* Contact col */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#15C0E0]" />
                <span>contact@nova2labs.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#15C0E0]" />
                <span>Remote · Worldwide</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#15C0E0]" />
                <span>Available on request</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} nova2labs. All rights reserved.</span>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#15C0E0]" />
            <span className="font-mono">v1.0 · Built with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
