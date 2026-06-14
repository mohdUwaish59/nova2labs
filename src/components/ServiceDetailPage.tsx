import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import type { ServiceDetail } from "@/lib/services-data";
import { SERVICES } from "@/lib/services-data";

export function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-16 md:pt-32">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" /> All services
          </Link>
          <div className="mt-6 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                {service.title}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground md:text-xl">{service.tagline}</p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {service.body}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Lead: {service.lead}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Deliverables
              </span>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                What you get
              </h2>
            </div>
            <ul className="space-y-4">
              {service.deliverables.map((d, i) => (
                <motion.li
                  key={d}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex gap-3 rounded-lg border border-border bg-surface p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed">{d}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Process
              </span>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                How we work
              </h2>
            </div>
            <ol className="space-y-5">
              {service.process.map((p, i) => (
                <li key={p.step} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background font-mono text-sm text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{p.step}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Stack
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                Tools we reach for
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Outcomes
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                What changes for you
              </h3>
              <ul className="mt-5 space-y-2.5">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                Explore related work
              </h3>
              <p className="mt-2 text-muted-foreground">
                We often blend these — many engagements span two or three.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Start a project
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {related.map((r) => {
              const RIcon = r.icon;
              return (
                <Link
                  key={r.slug}
                  to="/services/$slug"
                  params={{ slug: r.slug }}
                  className="group rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-elegant"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary">
                      <RIcon className="h-4 w-4" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <h4 className="mt-4 font-display text-base font-semibold">{r.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{r.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
