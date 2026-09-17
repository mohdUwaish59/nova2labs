import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ServiceIcon } from "@/components/ServiceIcons";
import { WORK, WORK_CATEGORIES, type WorkCategory } from "@/lib/work-data";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/work")({
  head: () =>
    seo({
      title: "Work — AI Systems, Platforms & Infrastructure We've Built | nova2labs",
      description:
        "Real systems built by nova2labs: RAG support agents, multi-agent workflows, hybrid vector-graph retrieval, enterprise endpoint automation, Zero-Trust networks and full-stack products.",
      path: "/work",
    }),
  component: Work,
});

const ease = [0.22, 1, 0.36, 1] as const;

function Work() {
  const [active, setActive] = useState<WorkCategory | "All">("All");

  const shown = useMemo(
    () => (active === "All" ? WORK : WORK.filter((w) => w.category === active)),
    [active],
  );

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const w of WORK) map.set(w.category, (map.get(w.category) ?? 0) + 1);
    return map;
  }, []);

  return (
    <PageShell>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden />
        <div className="hero-blob-1 right-0 top-[-200px]" aria-hidden />
        <div className="hero-blob-3 bottom-[-120px] left-[15%]" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="badge-primary mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Selected work
            </div>
            <h1 className="max-w-4xl font-display text-[2.15rem] font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
              Systems we've actually
              <br />
              <span className="text-gradient">shipped and run.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Not mockups. Retrieval systems in production, agent workflows that validate their own
              output, networks under real load and endpoint estates in the hundreds. Code
              walkthroughs and demos are available on request during scoping.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { v: String(WORK.length), l: "Systems documented" },
                { v: String(WORK_CATEGORIES.length), l: "Engineering disciplines" },
                { v: "100%", l: "Handed over to the client" },
              ].map((s) => (
                <div key={s.l}>
                  <span className="stat-number text-2xl font-bold text-foreground">{s.v}</span>
                  <span className="ml-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FILTER + GRID ────────────────────────────────────── */}
      <section className="border-y border-border py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="mb-10 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter work by discipline"
          >
            <FilterChip
              label="All"
              count={WORK.length}
              active={active === "All"}
              onClick={() => setActive("All")}
            />
            {WORK_CATEGORIES.filter((c) => counts.get(c)).map((c) => (
              <FilterChip
                key={c}
                label={c}
                count={counts.get(c) ?? 0}
                active={active === c}
                onClick={() => setActive(c)}
              />
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((w, i) => (
              <motion.article
                key={w.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.05, ease }}
                className="card-lift group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface"
              >
                <Link
                  to="/work/$slug"
                  params={{ slug: w.slug }}
                  className="flex flex-1 flex-col p-6"
                  aria-label={`${w.title} — read the breakdown`}
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="icon-stage h-[76px] w-[76px]">
                      <ServiceIcon
                        slug={w.service}
                        size={60}
                        className="icon-float"
                        eager={i < 3}
                      />
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {w.context}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground/60">
                        {w.year}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-display text-base font-bold leading-snug text-foreground">
                    {w.title}
                  </h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {w.summary}
                  </p>

                  {w.metric && (
                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="stat-number text-2xl font-bold text-gradient">
                        {w.metric.value}
                      </span>
                      <span className="text-xs text-muted-foreground">{w.metric.label}</span>
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                    {w.stack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                    {w.stack.length > 4 && (
                      <span className="px-1 py-0.5 font-mono text-[10px] text-muted-foreground/60">
                        +{w.stack.length - 4}
                      </span>
                    )}
                  </div>
                </Link>

                <div className="flex items-center justify-between gap-3 border-t border-border px-6 py-3.5">
                  <Link
                    to="/work/$slug"
                    params={{ slug: w.slug }}
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-primary"
                  >
                    Read the breakdown <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">
                    {w.category}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 md:py-32">
        <div className="absolute inset-0 bg-hero" aria-hidden />
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Want one of these
            <br />
            <span className="text-gradient">built for you?</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Tell us the problem in two lines. You'll get a plan, a fixed price and the engineer who
            would lead it — within 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition-all hover:scale-[1.03]"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/80 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-surface"
            >
              See services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function FilterChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all ${
        active
          ? "border-primary/50 bg-primary/10 text-primary"
          : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground"
      }`}
    >
      {label}
      <span
        className={`font-mono text-[10px] ${active ? "text-primary/70" : "text-muted-foreground/60"}`}
      >
        {count}
      </span>
    </button>
  );
}
