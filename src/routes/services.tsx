import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HexIcon } from "@/components/ServiceIcons";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — nova2labs" },
      {
        name: "description",
        content:
          "AI agents, LLM/NLP systems, full-stack engineering, DevOps, DevSecOps, networking and IT infrastructure — delivered end-to-end by nova2labs.",
      },
      { property: "og:title", content: "Services — nova2labs" },
      {
        property: "og:description",
        content:
          "World-class engineering services across AI, full-stack, DevOps and IT infrastructure.",
      },
    ],
  }),
  component: Services,
});

const guarantees = [
  { icon: Zap,          title: "Working prototype in week 1",     body: "Not after months of planning — you see real progress immediately." },
  { icon: CheckCircle2, title: "Fixed price, no surprises",        body: "Scope agreed upfront. What we quote is what you pay." },
  { icon: ShieldCheck,  title: "Security built-in, not bolted on", body: "DevSecOps practices from line one, every project." },
  { icon: Clock,        title: "24-hour response guarantee",       body: "Every serious inquiry gets a response within one business day." },
  { icon: MessageSquare, title: "Direct engineer access",          body: "Talk to the person building your product, always." },
  { icon: ArrowUpRight, title: "100% IP ownership on handover",   body: "Source code, docs, infrastructure — fully yours at delivery." },
];

function Services() {
  return (
    <PageShell>

      {/* ════════════════════════════════════════════════════════ HERO */}
      <section className="relative overflow-hidden bg-hero min-h-[50vh] flex items-center">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="hero-blob-1 top-[-200px] right-[0%]" aria-hidden />
        <div className="hero-blob-3 bottom-[-100px] left-[20%]" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="badge-primary mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              What we build
            </div>
            <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl leading-[0.95]">
              One team.
              <br />
              <span className="text-gradient">Every layer of the stack.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              From AI agents that work autonomously to the infrastructure they
              run on — nova2labs handles the full stack so you don't have to
              coordinate five different vendors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ SERVICE CARDS */}
      <section className="border-y border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="card-lift spotlight group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface"
                >
                  {/* Gradient accent bar */}
                  <div className="h-0.5 w-full bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex flex-col flex-1 p-7">
                    <div className="flex items-start justify-between">
                      <HexIcon size={48} className="text-primary shrink-0 transition-transform group-hover:scale-105">
                        <s.icon className="h-5 w-5" />
                      </HexIcon>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>

                    <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground flex-1">{s.body}</p>

                    <ul className="mt-5 space-y-2 border-t border-border pt-5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    {s.startingAt && (
                      <div className="mt-5 flex items-center justify-between">
                        <span className="badge-primary">From {s.startingAt}</span>
                        <span className="font-mono text-xs uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          View details →
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ GUARANTEES */}
      <section className="border-b border-border bg-surface/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="badge-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Our guarantees
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              What every engagement
              <br />
              <span className="text-gradient">includes by default</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guarantees.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                className="flex gap-5 rounded-2xl border border-border bg-surface p-6"
              >
                <HexIcon size={44} className="text-primary shrink-0">
                  <g.icon className="h-4 w-4" />
                </HexIcon>
                <div>
                  <h3 className="font-display text-sm font-semibold mb-1.5">{g.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{g.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════ PRICING */}
      <section className="border-b border-border py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface">
            {/* Top gradient stripe */}
            <div className="h-1 w-full bg-gradient-primary" />

            <div className="grid gap-10 p-10 md:grid-cols-[1fr_1.6fr] md:p-16">
              <div>
                <div className="badge-primary mb-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Pricing
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                  Transparent,
                  <br />
                  <span className="text-gradient">scope-based pricing</span>
                </h2>
              </div>

              <div className="space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  We don't charge by the hour and surprise you at month-end. Every engagement
                  starts with a clear scope — you know what you're getting and what it costs
                  before we write a single line of code.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { range: "$1,500 – $5,000",   label: "Scoped feature / integration" },
                    { range: "$5,000 – $15,000",  label: "Full-stack product / MVP" },
                    { range: "$15,000 – $40,000", label: "Enterprise platform / AI system" },
                    { range: "Custom",             label: "Ongoing retainer / scale" },
                  ].map((tier) => (
                    <div key={tier.label} className="rounded-xl border border-border bg-background p-4">
                      <div className="font-display text-base font-bold text-foreground">{tier.range}</div>
                      <div className="mt-1 font-mono text-[11px] text-muted-foreground">{tier.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground">
                  Not sure which tier fits? Send us a brief and we'll give you an honest estimate — no
                  commitment, no pitch.
                </p>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.02]"
                >
                  Get a free estimate
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ CTA */}
      <section className="relative overflow-hidden py-36">
        <div className="absolute inset-0 bg-hero" aria-hidden />
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden />
        <div className="hero-blob-2 top-[-100px] left-[-50px]" aria-hidden />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl font-bold tracking-tight md:text-6xl">
              Not sure where
              <br />
              <span className="text-gradient">to start?</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg text-muted-foreground">
              Send us a brief — we'll respond with a clear path forward, an honest
              estimate, and zero pressure.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.03]"
              >
                Contact us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/80 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-surface"
              >
                About nova2labs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </PageShell>
  );
}
