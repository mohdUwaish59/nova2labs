import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PageShell, SectionHeader } from "@/components/PageShell";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Uwaish & Hammad" },
      {
        name: "description",
        content:
          "AI agents, LLM/NLP systems, full-stack engineering, DevOps, DevSecOps, networking and IT infrastructure — services delivered end-to-end.",
      },
      { property: "og:title", content: "Services — Uwaish & Hammad" },
      {
        property: "og:description",
        content:
          "End-to-end engineering services across AI, full-stack, DevOps and IT infrastructure.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32">
          <SectionHeader
            eyebrow="Services"
            title="A small team. A wide stack."
            description="We move from strategy to shipping under one roof — across AI, application code and the infrastructure underneath."
          />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary/40 hover:shadow-elegant"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-primary">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <ul className="mt-5 space-y-1.5">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-primary">
                    View details <ArrowUpRight className="h-3 w-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Send us a brief — we'll respond with a clear path forward, an honest estimate, and the
            right person to lead it.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            Contact us
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
