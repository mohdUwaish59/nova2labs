import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "nova2labs — AI & Engineering Solutions for Your Business" },
      {
        name: "description",
        content:
          "Professional AI solutions, cloud infrastructure, custom software development, and DevOps services delivered by experienced engineers.",
      },
      { property: "og:title", content: "nova2labs — AI & Engineering Solutions" },
      {
        property: "og:description",
        content:
          "AI agents, cloud infrastructure, full-stack development, and DevOps services for modern businesses.",
      },
    ],
  }),
  component: Home,
});

const capabilities = [
  { icon: Bot, label: "AI Agents" },
  { icon: Sparkles, label: "LLM & NLP" },
  { icon: Code2, label: "Full-Stack" },
  { icon: Cloud, label: "DevOps" },
  { icon: ShieldCheck, label: "DevSecOps" },
  { icon: Network, label: "Networking" },
  { icon: Terminal, label: "IT Infrastructure" },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for new engagements
            </span>

            <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Your trusted partner for
              <br />
              <span className="text-gradient">AI solutions & modern infrastructure.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              We're <span className="text-foreground">nova2labs</span> — a freelance engineering agency delivering production-ready AI systems, cloud infrastructure, custom software, and DevOps solutions tailored to your business needs.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Explore services
              </Link>
            </div>
          </motion.div>

          {/* capability marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4 lg:grid-cols-7"
          >
            {capabilities.map((c) => (
              <div
                key={c.label}
                className="flex flex-col items-center justify-center gap-2 bg-surface px-4 py-6 text-center transition-colors hover:bg-surface-elevated"
              >
                <c.icon className="h-5 w-5 text-primary" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Expert delivery",
                body: "Work directly with experienced engineers who understand your business needs and deliver solutions that work.",
              },
              {
                title: "Production-ready",
                body: "Every solution is built for scale, secured, documented, and ready to support your business from day one.",
              },
              {
                title: "AI with purpose",
                body: "We build AI solutions that solve real business problems — not just demos. From concept to production deployment.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="font-mono text-xs uppercase tracking-wider text-primary">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Whether you need AI integration, infrastructure setup, or custom development — tell us about your project and we'll respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
