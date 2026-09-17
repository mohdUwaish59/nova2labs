import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  FileText,
  Minus,
  PhoneCall,
  Plus,
  Rocket,
  ShieldCheck,
  X,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ServiceIcon } from "@/components/ServiceIcons";
import { SERVICES } from "@/lib/services-data";
import { featuredWork, WORK } from "@/lib/work-data";
import { PRACTICES } from "@/lib/practices";
import { CONTACT_EMAIL, faqJsonLd, seo } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => {
    const base = seo({
      title: "nova2labs — AI Agents, LLM Systems & Cloud Engineering",
      description:
        "Engineering studio building production AI agents, LLM systems, full-stack products and cloud platforms. Fixed-price scopes, senior engineers, working prototype in week one.",
      path: "/",
    });
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
    };
  },
  component: Home,
});

/* ── DATA ──────────────────────────────────────────────────────────────────── */

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "6+", label: "Years in production IT" },
  { value: "500+", label: "Endpoints managed" },
  { value: "15", label: "Systems documented" },
  { value: "< 24h", label: "Reply guaranteed" },
];

const industries = [
  "Fintech",
  "Healthcare Tech",
  "Logistics",
  "Legal Tech",
  "E-commerce",
  "B2B SaaS",
  "Enterprise IT",
  "EdTech",
  "Real Estate",
  "Media",
];

const process = [
  {
    icon: PhoneCall,
    title: "Free discovery call",
    time: "Day 1",
    body: "30 minutes. We learn your goal, constraints and what success looks like — no sales pitch.",
  },
  {
    icon: FileText,
    title: "Fixed-scope proposal",
    time: "Within 48h",
    body: "A clear plan, timeline and fixed price. You know exactly what you get before you commit.",
  },
  {
    icon: Rocket,
    title: "Weekly shipping",
    time: "Week 1 onward",
    body: "A working prototype in week one, then demos every week. You see progress, not status reports.",
  },
  {
    icon: ShieldCheck,
    title: "Handover & support",
    time: "Launch",
    body: "Full source code, docs and runbooks. 30 days of free support after go-live.",
  },
];

const comparison = [
  {
    label: "Senior engineers on every line of code",
    us: true,
    agency: false,
    freelancer: "partial",
  },
  { label: "Fixed price agreed before work starts", us: true, agency: false, freelancer: false },
  { label: "Working prototype in week one", us: true, agency: false, freelancer: "partial" },
  {
    label: "AI, product, cloud & network under one roof",
    us: true,
    agency: "partial",
    freelancer: false,
  },
  {
    label: "Security & DevSecOps built in by default",
    us: true,
    agency: "partial",
    freelancer: false,
  },
  { label: "100% IP and source code ownership", us: true, agency: "partial", freelancer: true },
] as const;

const faqs = [
  {
    q: "How much does a project cost?",
    a: "Most scoped projects fall between $900 and $40,000 depending on complexity. After a free discovery call you receive a fixed price — what we quote is what you pay, with no hourly surprises.",
  },
  {
    q: "How fast can you start?",
    a: "Usually within one week of the proposal being approved. You'll see a working prototype by the end of the first week of development.",
  },
  {
    q: "Do I own the code and IP?",
    a: "Yes — 100%. Source code, infrastructure, documentation and credentials are fully transferred to you at handover.",
  },
  {
    q: "Will you sign an NDA?",
    a: "Of course. We're happy to sign your NDA (or provide ours) before you share any details about your project.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes 30 days of free support. After that you can choose a flexible retainer for maintenance, monitoring and new features — or run it yourself with our runbooks.",
  },
  {
    q: "How do we communicate?",
    a: "Directly with the engineers building your product via email, chat or calls — plus a live demo every week. No account managers in between.",
  },
];

/* ── COMPONENT ─────────────────────────────────────────────────────────────── */

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden />
        <div className="hero-blob-1 left-[5%] top-[-150px]" aria-hidden />
        <div className="hero-blob-3 bottom-[-120px] right-[10%]" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-4 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Accepting new projects
                </span>
              </div>

              <h1 className="font-display text-[2.15rem] font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                AI and engineering
                <br />
                that turns into <span className="text-gradient">revenue.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                <strong className="text-foreground">nova2labs</strong> designs, builds and runs
                production AI agents, software platforms and cloud infrastructure for businesses
                that can't afford to get it wrong — fixed scope, senior engineers, shipped in weeks.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-glow transition-all hover:scale-[1.03]"
                >
                  Book a free strategy call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/80 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-surface"
                >
                  See our work
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <ul className="mt-9 grid max-w-lg grid-cols-2 gap-x-6 gap-y-2.5">
                {[
                  "Fixed-price scopes",
                  "Full IP ownership",
                  "Reply within 24 hours",
                  "NDA on request",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Delivery dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.8, ease }}
              className="relative"
            >
              <HeroPanel />
            </motion.div>
          </div>
        </div>

        {/* Industries marquee */}
        <div className="relative border-t border-border bg-background/40 py-5 backdrop-blur-sm">
          <div className="ticker-fade overflow-hidden">
            <div className="marquee-track flex w-max gap-12">
              {[...industries, ...industries].map((name, i) => (
                <span
                  key={i}
                  className="flex items-center gap-12 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/70"
                >
                  {name}
                  <span className="h-1 w-1 rounded-full bg-primary/50" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`flex flex-col items-center border-border px-6 py-10 text-center md:border-r md:py-12 md:last:border-r-0 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
            >
              <span className="stat-number text-4xl font-bold text-foreground md:text-5xl">
                {s.value}
              </span>
              <span className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES — the only place they appear on the home page */}
      <section id="services" className="scroll-mt-20 border-b border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="badge-primary mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                What we do
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                One partner for <span className="text-gradient">every layer of your stack.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                From the AI agent your customers talk to, down to the network it runs on — so you
                never coordinate five vendors again.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Compare all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                className="h-full"
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-7 hover:border-primary/40"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div className="icon-stage h-[104px] w-[104px]">
                      <ServiceIcon slug={s.slug} size={88} className="icon-float" eager={i < 3} />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm font-medium text-primary/90">{s.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2.5 text-xs text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <span className="font-mono text-xs text-muted-foreground">
                      From <span className="font-semibold text-foreground">{s.startingAt}</span>
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-primary">
                      Explore →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-border bg-surface/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="badge-primary mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              How it works
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              From first call to <span className="text-gradient">live in production.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A simple, transparent process with zero guesswork at any stage.
            </p>
          </div>

          <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div
              className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
              aria-hidden
            />
            {process.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative rounded-2xl border border-border bg-background p-7"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-3xl font-bold text-foreground/10">0{i + 1}</span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  {p.time}
                </span>
                <h3 className="mt-1.5 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="results" className="scroll-mt-20 border-b border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="badge-primary mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Selected work
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Real systems,
                <br />
                <span className="text-gradient">documented end to end.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every project below is one we designed, built and ran — with the problem, the
                architecture and the outcome written out. No stock photos, no invented client logos.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50"
            >
              All {WORK.length} projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredWork().map((w, i) => (
              <motion.article
                key={w.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card-lift group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface"
              >
                <Link to="/work/$slug" params={{ slug: w.slug }} className="flex flex-1 flex-col">
                  <div className="relative border-b border-border bg-hero px-7 pb-7 pt-6">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {w.category}
                      </span>
                      <span className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {w.context}
                      </span>
                    </div>
                    {w.metric && (
                      <>
                        <div className="stat-number mt-5 text-4xl font-bold text-gradient">
                          {w.metric.value}
                        </div>
                        <div className="mt-1 text-sm font-medium text-foreground">
                          {w.metric.label}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className="icon-stage h-[72px] w-[72px]">
                        <ServiceIcon slug={w.service} size={56} className="icon-float" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <h3 className="font-display text-base font-bold leading-snug">{w.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {w.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border pt-5">
                      {w.stack.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE ARE ORGANISED */}
      <section className="border-b border-border bg-surface/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="badge-primary mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              How we are organised
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Two practices.
              <br />
              <span className="text-gradient">One accountable team.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              The AI and product layer, and the infrastructure it runs on — under one roof, so
              nothing gets thrown over a wall mid-project.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {PRACTICES.map((pr, i) => (
              <motion.div
                key={pr.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card-lift flex flex-col rounded-3xl border border-border bg-background p-7"
              >
                <h3 className="font-display text-lg font-bold">{pr.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {pr.focus}
                </p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {pr.owns.slice(0, 3).map((o) => (
                    <li key={o} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {pr.skills.slice(0, 6).map((sk) => (
                    <span
                      key={sk}
                      className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Full capabilities, certifications and how we work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US — COMPARISON */}
      <section className="border-b border-border py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="badge-primary mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Why nova2labs
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Agency quality. <span className="text-gradient">Without the agency baggage.</span>
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border bg-surface shadow-card">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-5 font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                    What you get
                  </th>
                  <th className="bg-primary/8 p-5 text-center font-display text-base font-bold text-primary">
                    nova2labs
                  </th>
                  <th className="p-5 text-center font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                    Typical agency
                  </th>
                  <th className="p-5 text-center font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                    Freelancer
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-border last:border-0">
                    <td className="p-5 font-medium text-foreground">{row.label}</td>
                    <td className="bg-primary/8 p-5">
                      <Mark v={row.us} />
                    </td>
                    <td className="p-5">
                      <Mark v={row.agency} />
                    </td>
                    <td className="p-5">
                      <Mark v={row.freelancer} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border bg-surface/40 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="badge-primary mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              FAQ
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight">Questions, answered.</h2>
            <p className="mt-4 text-muted-foreground">
              Still unsure? Ask us anything — a real engineer replies within 24 hours.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Ask a question <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="faq-item group rounded-2xl border border-border bg-background transition-colors"
                open={i === 0}
              >
                <summary className="flex items-center justify-between gap-4 p-6">
                  <span className="font-display text-base font-semibold">{f.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border">
                    <Plus className="faq-plus h-4 w-4 text-primary" />
                  </span>
                </summary>
                <p className="-mt-1 px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 bg-hero" aria-hidden />
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
        <div className="hero-blob-1 left-[-80px] top-[-150px]" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
              Let's build
              <br />
              <span className="text-gradient">your unfair advantage.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tell us what you're building. Within 24 hours you'll get a clear plan, an honest
              estimate and the engineer who'd lead it — free, with zero obligation.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition-all hover:scale-[1.03]"
              >
                Get my free project plan
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/80 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-surface"
              >
                Email us directly
              </a>
            </div>
            <p className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-primary" /> Average reply time: under 6 hours
            </p>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}

/* ── PIECES ───────────────────────────────────────────────────────────────── */

function Mark({ v }: { v: boolean | "partial" }) {
  if (v === true)
    return (
      <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Check className="h-4 w-4" aria-label="Yes" />
      </span>
    );
  if (v === "partial")
    return (
      <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <Minus className="h-4 w-4" aria-label="Sometimes" />
      </span>
    );
  return (
    <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground/50">
      <X className="h-4 w-4" aria-label="No" />
    </span>
  );
}

function HeroPanel() {
  const bars = [
    { label: "Tickets auto-resolved", value: 78, display: "78%" },
    { label: "Cost per ticket reduced", value: 64, display: "−64%" },
    { label: "CSAT score", value: 94, display: "4.7 / 5" },
  ];
  const feed = [
    { t: "09:42", text: "Agent v2.3 deployed to production", ok: true },
    { t: "09:15", text: "Eval suite passed — 312 / 312 checks", ok: true },
    { t: "08:50", text: "Weekly demo scheduled with client", ok: false },
  ];

  return (
    <div className="relative">
      <div
        className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-20 blur-3xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/90 shadow-elegant backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          </div>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Delivery
            dashboard
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Example view · every engagement gets one
              </p>
              <h3 className="mt-1 font-display text-lg font-bold">AI support agent</h3>
            </div>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              On track
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                First response
              </p>
              <p className="stat-number mt-1.5 text-2xl font-bold">
                4h <span className="text-muted-foreground/50">→</span>{" "}
                <span className="text-gradient">9s</span>
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Time to launch
              </p>
              <p className="stat-number mt-1.5 text-2xl font-bold">
                <span className="text-gradient">5</span> weeks
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {bars.map((b, i) => (
              <div key={b.label}>
                <div className="mb-1.5 flex justify-between text-xs">
                  <span className="text-muted-foreground">{b.label}</span>
                  <span className="font-mono font-semibold text-foreground">{b.display}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="bar-grow h-full rounded-full bg-gradient-primary"
                    style={{ width: `${b.value}%`, animationDelay: `${0.5 + i * 0.15}s` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2.5 border-t border-border pt-5">
            {feed.map((f) => (
              <div key={f.text} className="flex items-center gap-3 text-xs">
                <span className="font-mono text-muted-foreground/70">{f.t}</span>
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${f.ok ? "bg-emerald-500" : "bg-primary"}`}
                />
                <span className="truncate text-muted-foreground">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
