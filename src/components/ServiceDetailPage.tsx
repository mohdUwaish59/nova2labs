import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HexIcon } from "@/components/ServiceIcons";
import type { ServiceDetail } from "@/lib/services-data";
import { SERVICES } from "@/lib/services-data";

export function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageShell>

      {/* ──────────────────────────────────────── HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="hero-blob-1 top-[-200px] right-[-50px]" aria-hidden />

        <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-16 md:pt-36">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" /> All services
          </Link>

          <div className="mt-8 flex items-start gap-6">
            <HexIcon variant="gradient" size={64} className="shrink-0">
              <Icon className="h-7 w-7 text-white" />
            </HexIcon>
            <div>
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground md:text-xl">{service.tagline}</p>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {service.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {service.points.map((p) => (
              <span key={p} className="badge-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {p}
              </span>
            ))}
            {service.startingAt && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-accent">
                From {service.startingAt}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────── DELIVERABLES */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
            <div className="md:sticky md:top-32 md:self-start">
              <span className="badge-primary mb-4 inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Deliverables
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                What you get
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Every item below is shipped, tested, and documented before handover.
              </p>
            </div>
            <ul className="space-y-3">
              {service.deliverables.map((d, i) => (
                <motion.li
                  key={d}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/30"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed">{d}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────── PROCESS */}
      <section className="border-t border-border bg-surface/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
            <div className="md:sticky md:top-32 md:self-start">
              <span className="badge-primary mb-4 inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Process
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                How we work
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                A clear, repeatable process — so you always know where things stand.
              </p>
            </div>
            <ol className="relative space-y-4">
              <div className="absolute left-[22px] top-0 bottom-0 w-px bg-border" aria-hidden />
              {service.process.map((p, i) => (
                <motion.li
                  key={p.step}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="flex gap-5 pl-14 relative"
                >
                  <div className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="rounded-xl border border-border bg-background px-5 py-4 flex-1">
                    <h3 className="font-display text-base font-semibold">{p.step}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{p.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── STACK + OUTCOMES */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-7">
              <span className="badge-primary mb-5 inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Tech stack
              </span>
              <h3 className="font-display text-xl font-bold mb-5">Tools we reach for</h3>
              <div className="flex flex-wrap gap-2">
                {service.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-7">
              <span className="badge-primary mb-5 inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Outcomes
              </span>
              <h3 className="font-display text-xl font-bold mb-5">What changes for you</h3>
              <ul className="space-y-3.5">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────── RELATED + CTA */}
      <section className="border-t border-border bg-surface/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end mb-10">
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                Explore related services
              </h3>
              <p className="mt-2 text-muted-foreground">
                Many engagements combine two or three — we handle it all.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.02]"
            >
              Start a project
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r) => {
              const RIcon = r.icon;
              return (
                <Link
                  key={r.slug}
                  to="/services/$slug"
                  params={{ slug: r.slug }}
                  className="card-lift group rounded-2xl border border-border bg-background p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <HexIcon size={44} className="text-primary">
                      <RIcon className="h-5 w-5" />
                    </HexIcon>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <h4 className="font-display text-base font-semibold">{r.title}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{r.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </PageShell>
  );
}
