import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Globe2,
  Rocket,
  ShieldCheck,
  Target,
  Users,
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
} from "@/components/ServiceIcons";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — nova2labs" },
      {
        name: "description",
        content:
          "nova2labs is a world-class engineering agency specializing in AI systems, cloud infrastructure, and custom software. We build what others call impossible.",
      },
      { property: "og:title", content: "About — nova2labs" },
      {
        property: "og:description",
        content:
          "World-class AI engineering, cloud infrastructure, and custom software — built by nova2labs.",
      },
    ],
  }),
  component: About,
});

/* ── DATA ─────────────────────────────────────────────────────────────────── */

const stats = [
  { value: "50+", label: "Projects shipped" },
  { value: "12",  label: "Countries served" },
  { value: "6",   label: "Engineering domains" },
  { value: "100%", label: "Client satisfaction" },
];

const values = [
  {
    icon: Award,
    title: "Excellence without compromise",
    body: "We hold every deliverable to the same standard we'd want for ourselves. If it's not production-ready, it doesn't ship.",
  },
  {
    icon: IconDevSecOps,
    title: "Security is culture",
    body: "Threat modeling, zero-trust defaults, and DevSecOps practices aren't extras — they're in every project from line one.",
  },
  {
    icon: IconAiAgent,
    title: "AI-native thinking",
    body: "We don't retrofit AI into old architectures. We design systems where intelligent automation is a first-class citizen from day one.",
  },
  {
    icon: Users,
    title: "Direct access, always",
    body: "No account managers, no handoffs, no layers. You communicate directly with the engineers building your product.",
  },
  {
    icon: Rocket,
    title: "Bias toward shipping",
    body: "We move fast without breaking things. Working software in the first week — not after months of planning documents.",
  },
  {
    icon: Globe2,
    title: "Global perspective",
    body: "We serve clients from Silicon Valley to Singapore. Time zones are not an obstacle — async-first, overlap-friendly.",
  },
];

const techDomains = [
  {
    icon: IconAiAgent,
    title: "Artificial Intelligence",
    skills: ["AI Agents & Orchestration", "LLM Fine-tuning", "RAG Pipelines", "NLP & Classification", "Multimodal Systems", "AI Evaluation Harnesses"],
  },
  {
    icon: IconFullStack,
    title: "Full-Stack Engineering",
    skills: ["React / Next.js / TanStack", "Node.js / Python / Go", "REST & GraphQL APIs", "PostgreSQL / Redis / Queues", "Real-time Systems", "Mobile-first Design"],
  },
  {
    icon: IconDevOps,
    title: "DevOps & Cloud",
    skills: ["Kubernetes & GitOps", "Terraform / Pulumi IaC", "CI/CD Pipelines", "AWS / Azure / GCP", "Observability Stack", "Cost Optimization"],
  },
  {
    icon: IconDevSecOps,
    title: "Security & Compliance",
    skills: ["DevSecOps Pipelines", "SAST / DAST / SBOM", "Policy-as-Code (OPA)", "Zero-Trust Architecture", "SOC 2 Readiness", "Threat Modeling"],
  },
];

const milestones = [
  { year: "2021", event: "Founded with a mission to make world-class engineering accessible to growing businesses." },
  { year: "2022", event: "Delivered first large-scale AI system — an NLP pipeline processing 2M documents monthly." },
  { year: "2023", event: "Expanded into DevSecOps and enterprise IT infrastructure. Reached 20+ completed projects." },
  { year: "2024", event: "Became early adopters of LangGraph and multi-agent architectures. 35+ clients across 10 countries." },
  { year: "2025", event: "Launched AI-native platform practice. Delivered 3 Fortune 500 AI infrastructure projects." },
  { year: "2026", event: "Now — 50+ projects, 12 countries, and still every line of code reviewed by senior engineers." },
];

/* ── COMPONENT ────────────────────────────────────────────────────────────── */

function About() {
  return (
    <PageShell>

      {/* ════════════════════════════════════════════════════════ HERO */}
      <section className="relative overflow-hidden bg-hero min-h-[60vh] flex items-center">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="hero-blob-1 top-[-200px] right-[5%]" aria-hidden />
        <div className="hero-blob-2 bottom-[-150px] left-[-100px]" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="badge-primary mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              About nova2labs
            </div>
            <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl leading-[0.95]">
              We build what others
              <br />
              <span className="text-gradient">call impossible.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
              nova2labs is a world-class engineering agency. We exist for one
              reason: to take hard engineering problems and deliver production-grade
              solutions that genuinely move businesses forward.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.02]"
              >
                Work with us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/80 px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-surface"
              >
                Our services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ STATS */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-center justify-center bg-surface px-6 py-10 text-center"
              >
                <span className="font-display text-4xl font-bold text-foreground md:text-5xl">
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

      {/* ═══════════════════════════════════════════════════ MISSION */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="badge-primary mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Our mission
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                World-class engineering
                <br />
                <span className="text-gradient">for every business.</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                The best engineering used to be reserved for companies with
                100-person teams and $50M budgets. We changed that.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                nova2labs gives growing companies access to the same caliber of
                AI systems, cloud platforms, and custom software that Fortune 500s
                depend on — at a price that makes sense for a team that's scaling.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We believe the best engineering agency is one where the work is
                done with pride, urgency, and the understanding that what we build
                directly affects your business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target,      title: "Outcome-focused",    body: "We measure success by the impact on your business — not lines of code or hours logged." },
                { icon: Zap,         title: "Speed without chaos", body: "Prototype in days, production in weeks. We move with urgency because we know time costs money." },
                { icon: Award,       title: "Senior-only work",    body: "Every engagement is handled by engineers who've solved these problems at scale before." },
                { icon: CheckCircle2, title: "Zero handoffs",       body: "The engineer you talk to is the engineer building your product. No layers, no surprises." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-border bg-surface p-5"
                >
                  <HexIcon size={40} className="text-primary mb-4">
                    <item.icon className="h-4 w-4" />
                  </HexIcon>
                  <h3 className="font-display text-sm font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════ VALUES */}
      <section className="border-b border-border bg-surface/40 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="badge-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Our principles
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              What we stand for
            </h2>
            <p className="mt-4 text-muted-foreground">
              These aren't just words on a wall. They're the operating principles
              behind every decision we make.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                className="card-lift spotlight rounded-2xl border border-border bg-surface p-7"
              >
                <HexIcon size={48} className="text-primary mb-5">
                  <v.icon className="h-5 w-5" />
                </HexIcon>
                <h3 className="font-display text-base font-semibold mb-2">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ TECHNOLOGY DOMAINS */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="badge-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Technology
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Deep expertise.
              <br />
              <span className="text-gradient">Full coverage.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Six engineering domains, one team — so your AI agent, your
              infrastructure, and your product ship together.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {techDomains.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className="rounded-2xl border border-border bg-surface p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <HexIcon size={48} variant="gradient" className="shrink-0">
                    <domain.icon className="h-5 w-5 text-white" />
                  </HexIcon>
                  <h3 className="font-display text-lg font-semibold">{domain.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ MILESTONES */}
      <section className="border-b border-border bg-surface/40 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.8fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <div className="badge-primary mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Our story
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Built over
                <br />
                <span className="text-gradient">5 years of hard work.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                From our first project to global enterprise clients — every year
                raised the bar for what we deliver.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[22px] top-0 bottom-0 w-px bg-border" aria-hidden />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="relative flex gap-6 pl-14"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <span className="font-mono text-[10px] font-bold text-primary">{m.year}</span>
                    </div>
                    <div className="rounded-2xl border border-border bg-surface px-6 py-5 flex-1">
                      <p className="text-sm leading-relaxed text-muted-foreground">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ CTA */}
      <section className="relative overflow-hidden py-36">
        <div className="absolute inset-0 bg-hero" aria-hidden />
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden />
        <div className="hero-blob-1 top-[-150px] right-[10%]" aria-hidden />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl font-bold tracking-tight md:text-6xl">
              Ready to work
              <br />
              <span className="text-gradient">with the best?</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg text-muted-foreground">
              Tell us what you're building. We'll tell you exactly how we'd
              approach it — no commitment, no fluff.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.03]"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/80 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-surface"
              >
                See our services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </PageShell>
  );
}
