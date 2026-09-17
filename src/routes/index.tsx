import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import {
  HexIcon,
  IconAiAgent,
  IconLlmNlp,
  IconFullStack,
  IconDevOps,
  IconDevSecOps,
  IconNetworking,
  IconInfrastructure,
} from "@/components/ServiceIcons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "nova2labs — AI & Engineering Agency" },
      {
        name: "description",
        content:
          "nova2labs is a world-class engineering agency delivering production AI systems, cloud infrastructure, custom software, and DevOps solutions for global businesses.",
      },
      { property: "og:title", content: "nova2labs — AI & Engineering Agency" },
      {
        property: "og:description",
        content:
          "Production-ready AI agents, cloud infrastructure, full-stack platforms, and DevOps — engineered for scale.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

/* ── DATA ─────────────────────────────────────────────────────────────────── */

const stats = [
  { value: "50+", label: "Projects shipped" },
  { value: "12", label: "Countries served" },
  { value: "< 24h", label: "First response" },
  { value: "99.9%", label: "Uptime delivered" },
];

const capabilities = [
  { icon: IconAiAgent,        label: "AI Agents"        },
  { icon: IconLlmNlp,         label: "LLM & NLP"        },
  { icon: IconFullStack,      label: "Full-Stack"        },
  { icon: IconDevOps,         label: "DevOps"            },
  { icon: IconDevSecOps,      label: "DevSecOps"         },
  { icon: IconNetworking,     label: "Networking"        },
  { icon: IconInfrastructure, label: "IT Infrastructure" },
];

const caseStudies = [
  {
    tag: "AI Agents · 2026",
    icon: IconAiAgent,
    gradient: "from-[oklch(0.52_0.16_200)] to-[oklch(0.6_0.18_250)]",
    title: "Autonomous AI operations hub for a Fortune 500 logistics company",
    description:
      "Engineered a fleet of coordinated AI agents that monitor supply chain anomalies, auto-negotiate carrier contracts, and escalate edge cases to humans — running 24/7 with zero downtime.",
    outcomes: [
      "92% reduction in manual interventions",
      "$4.2M saved in annual operations cost",
      "Sub-2s decision latency at 10k events/day",
    ],
    tech: ["GPT-4o", "LangGraph", "Temporal", "Pinecone", "Kafka"],
  },
  {
    tag: "LLM & NLP · 2026",
    icon: IconLlmNlp,
    gradient: "from-[oklch(0.55_0.18_270)] to-[oklch(0.52_0.16_200)]",
    title: "Multimodal document intelligence platform for a global law firm",
    description:
      "Built a production LLM pipeline that ingests contracts, court filings, and briefs — extracting structured clauses, flagging risk, and generating summaries with 97% attorney-validated accuracy.",
    outcomes: [
      "97% extraction accuracy on legal documents",
      "Review time cut from 6 hours to 18 minutes",
      "Processes 50,000 pages per day",
    ],
    tech: ["Claude 3.5", "LlamaIndex", "Weaviate", "PyTorch", "FastAPI"],
  },
  {
    tag: "DevOps · 2026",
    icon: IconDevOps,
    gradient: "from-[oklch(0.6_0.15_160)] to-[oklch(0.52_0.16_200)]",
    title: "Zero-trust Kubernetes platform for a fintech SaaS at Series B",
    description:
      "Migrated a legacy monolith to a GitOps-driven, zero-trust Kubernetes platform with automated SAST/DAST, signed artifacts, policy-as-code, and full SOC 2 Type II audit trail.",
    outcomes: [
      "Deploy time: 45 min → 3 min",
      "Zero production security incidents post-launch",
      "SOC 2 Type II certified in 8 weeks",
    ],
    tech: ["Kubernetes", "ArgoCD", "Terraform", "Trivy", "OPA", "GitHub Actions"],
  },
  {
    tag: "Full-Stack · 2026",
    icon: IconFullStack,
    gradient: "from-[oklch(0.65_0.16_75)] to-[oklch(0.6_0.15_160)]",
    title: "AI-native B2B SaaS platform — from zero to $1M ARR in 9 months",
    description:
      "Architected and built a multi-tenant analytics platform with real-time AI insights, white-label customization, role-based access, and a self-serve onboarding funnel.",
    outcomes: [
      "Launched in 7 weeks from first commit",
      "140ms p95 API response time under load",
      "Scaled to 800 enterprise tenants",
    ],
    tech: ["React", "TanStack", "Node.js", "PostgreSQL", "Redis", "Stripe"],
  },
  {
    tag: "AI Agents · 2026",
    icon: IconLlmNlp,
    gradient: "from-[oklch(0.52_0.16_200)] to-[oklch(0.65_0.16_75)]",
    title: "Real-time AI trading signal engine for a quantitative hedge fund",
    description:
      "Designed a low-latency AI pipeline that ingests live market feeds, news sentiment, and alternative data to generate and explain trading signals with full audit trails.",
    outcomes: [
      "11ms average signal latency",
      "Processes 2M market events per second",
      "Full explainability for compliance",
    ],
    tech: ["PyTorch", "Ray", "Kafka", "TimescaleDB", "OpenAI", "ClickHouse"],
  },
  {
    tag: "IT Infrastructure · 2026",
    icon: IconNetworking,
    gradient: "from-[oklch(0.55_0.14_230)] to-[oklch(0.52_0.16_200)]",
    title: "Enterprise zero-trust network rollout across 14 global offices",
    description:
      "Designed and deployed a unified SD-WAN fabric with identity-aware access, micro-segmentation, and real-time threat detection — replacing a fragile legacy VPN that had been breached twice.",
    outcomes: [
      "100% zero-trust policy coverage",
      "Network incidents dropped 89%",
      "Rolled out to 1,200 employees in 6 weeks",
    ],
    tech: ["Fortinet", "Zscaler", "Cisco", "Terraform", "Zabbix", "Entra ID"],
  },
];

const process = [
  {
    num: "01",
    icon: ArrowRight,
    title: "Brief us",
    body: "Fill the contact form or email directly. Tell us what you're building. No commitment needed — just a conversation.",
  },
  {
    num: "02",
    icon: TrendingUp,
    title: "We scope it",
    body: "30-minute discovery call. We ask the right questions and come back with a clear, fixed-price proposal — no ambiguity.",
  },
  {
    num: "03",
    icon: Zap,
    title: "We build",
    body: "Working increments shipped weekly. You see progress every week, not after 3 months of silence.",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "You own it",
    body: "Full handover with docs, runbooks, and training. The code, infra, and IP are entirely yours.",
  },
];

const trustItems = [
  "Fixed-price scopes",
  "No lock-in contracts",
  "Direct engineer access",
  "< 24h response",
  "Full IP ownership",
  "Security by default",
];

const techLogos = [
  // AI & ML
  "OpenAI GPT-4o", "Anthropic Claude 3.5", "LangChain", "LangGraph", "LlamaIndex",
  "Hugging Face", "PyTorch", "TensorFlow", "Ollama", "Mistral AI", "Gemini Pro",
  "Pinecone", "Weaviate", "pgvector", "Qdrant", "Ray", "MLflow", "Weights & Biases",
  // DevOps & Cloud
  "Kubernetes", "Docker", "Helm", "ArgoCD", "Flux CD", "Terraform", "Pulumi",
  "AWS", "Azure", "Google Cloud", "Cloudflare", "GitHub Actions", "GitLab CI",
  "Prometheus", "Grafana", "OpenTelemetry", "Datadog", "Loki", "Trivy", "OPA",
  // Dev
  "React 19", "Next.js 15", "TanStack", "TypeScript", "Node.js", "Python",
  "Go", "FastAPI", "tRPC", "GraphQL", "PostgreSQL", "Redis", "Kafka", "RabbitMQ",
  // Security & Infra
  "Zero Trust", "DevSecOps", "SAST", "DAST", "SBOM", "SOC 2", "ISO 27001",
  "Entra ID", "Okta", "Active Directory", "WireGuard", "Fortinet", "Cisco",
  "MikroTik", "SD-WAN", "Zscaler", "Proxmox", "VMware", "Veeam", "Intune",
];

/* ── COMPONENT ────────────────────────────────────────────────────────────── */

function HeroBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="hero-blob-1 top-[-200px] left-[10%]" />
      <div className="hero-blob-2 top-[100px] right-[-100px]" />
      <div className="hero-blob-3 bottom-[-100px] left-[30%]" />
    </div>
  );
}

function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <PageShell>

      {/* ═══════════════════════════════════════════════════════════════ HERO */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center overflow-hidden bg-hero">
        <HeroBlobs />
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative w-full"
        >
          <div className="mx-auto max-w-7xl px-6 py-32 md:py-40">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-5xl text-center"
            >
              {/* Status pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-4 py-1.5 backdrop-blur-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Available for new engagements — 2026
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display font-bold tracking-tight">
                <span className="block text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-3">
                  We engineer the
                </span>
                <span className="block text-5xl md:text-7xl lg:text-8xl text-gradient leading-[0.95]">
                  AI-powered future
                </span>
                <span className="block text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mt-3">
                  of your business.
                </span>
              </h1>

              {/* Sub */}
              <p className="mx-auto mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">nova2labs</span> is a world-class engineering agency.
                We build production AI systems, cloud platforms, and custom software that global businesses
                rely on — engineered to scale, secured by design.
              </p>

              {/* CTAs */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-glow"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-xl border border-border bg-surface/80 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-surface hover:border-primary/40"
                >
                  Explore services
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Trust micro-list */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5">
                {trustItems.map((t) => (
                  <span key={t} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Capability grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-24 max-w-4xl"
            >
              <div className="grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-7">
                {capabilities.map((c) => (
                  <div
                    key={c.label}
                    className="group flex flex-col items-center justify-center gap-3 bg-surface px-3 py-7 text-center transition-colors hover:bg-surface-elevated"
                  >
                    <HexIcon size={40} className="text-primary transition-transform group-hover:scale-105">
                      <c.icon className="h-4 w-4" />
                    </HexIcon>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════ STATS */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center justify-center bg-surface px-6 py-10 text-center"
              >
                <span className="stat-number font-display text-4xl font-bold text-foreground md:text-5xl">
                  {s.value}
                </span>
                <span className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ CASE STUDIES */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">

          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="badge-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Featured work · 2026
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl text-foreground">
              Built for the world's{" "}
              <span className="text-gradient">most demanding teams</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              From AI-native startups to Fortune 500 enterprises — here's what
              production-grade engineering looks like.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="card-lift spotlight group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
              >
                {/* Gradient top bar */}
                <div className={`h-0.5 w-full bg-gradient-to-r ${cs.gradient}`} />

                <div className="flex flex-col flex-1 p-6">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cs.gradient} text-white shadow-glow`}>
                      <cs.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {cs.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-base font-semibold leading-snug text-foreground">
                    {cs.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                    {cs.description}
                  </p>

                  {/* Outcomes */}
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {cs.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cs.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-surface-elevated"
            >
              Discuss your project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ TECH TICKER */}
      <section className="border-b border-border bg-surface/40 overflow-hidden py-5">
        {/* Row 1 — left to right */}
        <div className="ticker-fade overflow-hidden mb-3">
          <div className="marquee-track flex gap-8 whitespace-nowrap">
            {[...techLogos.slice(0, 40), ...techLogos.slice(0, 40)].map((logo, i) => (
              <span key={i} className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/55 shrink-0">
                <span className="h-1 w-1 rounded-full bg-primary/40" />
                {logo}
              </span>
            ))}
          </div>
        </div>
        {/* Row 2 — right to left */}
        <div className="ticker-fade overflow-hidden">
          <div className="flex gap-8 whitespace-nowrap" style={{ animation: "marquee 34s linear infinite reverse" }}>
            {[...techLogos.slice(20), ...techLogos, ...techLogos.slice(20)].map((logo, i) => (
              <span key={i} className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/40 shrink-0">
                <span className="h-1 w-1 rounded-full bg-accent/40" />
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ HOW WE WORK */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] lg:items-start">
            {/* Left sticky label */}
            <div className="lg:sticky lg:top-32">
              <div className="badge-primary mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                How it works
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                From first message
                <br />
                <span className="text-gradient">to production.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                No long onboarding. No surprise invoices. A clear, repeatable
                process that gets results fast.
              </p>
              <Link
                to="/contact"
                className="mt-8 group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.02]"
              >
                Start the process
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {process.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative flex gap-6 rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/40 hover:shadow-elegant"
                >
                  <div className="flex flex-col items-center">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background font-mono text-sm font-bold text-primary transition-all group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:border-transparent group-hover:shadow-glow">
                      {step.num}
                    </span>
                    {i < process.length - 1 && (
                      <div className="mt-3 w-px flex-1 min-h-[24px] bg-border" />
                    )}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ WHY US */}
      <section className="border-b border-border bg-surface/40 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="badge-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Why nova2labs
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Engineering agencies are broken.
              <br />
              <span className="text-gradient">We fixed it.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              No bloated teams. No sales people. No junior developers learning
              on your budget. Just senior engineers who ship.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: IconAiAgent,
                title: "Senior execution only",
                body: "Every line of code is written by senior engineers with deep domain expertise — not outsourced or delegated to juniors.",
              },
              {
                icon: IconFullStack,
                title: "Fixed scope, fixed price",
                body: "You know exactly what you're getting and what it costs before we start. No hourly billing surprises at month-end.",
              },
              {
                icon: IconDevSecOps,
                title: "Security is non-negotiable",
                body: "DevSecOps, zero-trust defaults, and threat modeling are part of every project — not an add-on you pay extra for.",
              },
              {
                icon: IconDevOps,
                title: "Production-first mindset",
                body: "We only ship things that work at scale. Every deliverable is load-tested, documented, and ready for real traffic.",
              },
              {
                icon: IconInfrastructure,
                title: "Full IP ownership",
                body: "Everything we build belongs to you. Source code, infrastructure, documentation — fully transferred at handover.",
              },
              {
                icon: IconLlmNlp,
                title: "AI-native by default",
                body: "We don't bolt AI onto existing products as an afterthought. We design systems where AI is a first-class citizen.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                className="card-lift spotlight rounded-2xl border border-border bg-surface p-7"
              >
                <HexIcon size={48} className="text-primary mb-5">
                  <item.icon className="h-5 w-5" />
                </HexIcon>
                <h3 className="font-display text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ CTA */}
      <section className="relative overflow-hidden py-36 md:py-44">
        <div className="absolute inset-0 bg-hero" aria-hidden />
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden />
        <div className="hero-blob-1 top-[-100px] left-[-100px]" aria-hidden />
        <div className="hero-blob-2 bottom-[-200px] right-[-100px]" aria-hidden />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="badge-primary mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Limited spots available
            </div>
            <h2 className="font-display text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Ready to build
              <br />
              <span className="text-gradient">something great?</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Whether you need an AI agent, a Kubernetes platform, or a
              full-stack product — tell us about your project. We reply within
              24 hours, always.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.03]"
              >
                Start your project
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/80 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-surface hover:border-primary/40"
              >
                View all services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </PageShell>
  );
}
