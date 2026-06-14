import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { PageShell, SectionHeader } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — nova2labs Engineering Agency" },
      {
        name: "description",
        content:
          "Learn about nova2labs — a freelance engineering agency specializing in AI, cloud infrastructure, and custom development.",
      },
      { property: "og:title", content: "About — nova2labs" },
      {
        property: "og:description",
        content:
          "Professional engineering services covering AI, full-stack development, DevOps, and cloud infrastructure.",
      },
    ],
  }),
  component: About,
});

type Person = {
  name: string;
  role: string;
  bio: string;
  focus: string[];
};

const people: Person[] = [
  {
    name: "Mohd Uwaish",
    role: "AI Engineer · Full-Stack",
    bio: "Specializes in AI agents, large language models, natural language processing and modern full-stack web. Comfortable from research prototypes to production deployments.",
    focus: ["AI Agents", "LLMs", "NLP", "Full-Stack"],
  },
  {
    name: "Muhammad Hammad",
    role: "DevOps & Infrastructure · Full-Stack",
    bio: "Specializes in DevOps, DevSecOps, networking and IT infrastructure — with full-stack range. Builds reliable platforms and the secure delivery pipelines around them.",
    focus: ["DevOps", "DevSecOps", "Networking", "IT Infrastructure", "Full-Stack"],
  },
];

function PlaceholderList({ label, count = 3 }: { label: string; count?: number }) {
  return (
    <ul className="mt-3 space-y-2">
      {Array.from({ length: count }).map((_, i) => (
        <li
          key={i}
          className="rounded-md border border-dashed border-border bg-surface/60 px-3 py-2 font-mono text-xs text-muted-foreground"
        >
          {label} entry {i + 1} — add details here
        </li>
      ))}
    </ul>
  );
}

function PersonCard({ person, index }: { person: Person; index: number }) {
  const initials = person.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden rounded-2xl border border-border bg-surface"
    >
      <div className="relative bg-gradient-primary p-8">
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
        <div className="relative flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-background/20 font-display text-xl font-bold text-primary-foreground backdrop-blur">
            {initials}
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold text-primary-foreground">
              {person.name}
            </h3>
            <p className="font-mono text-xs uppercase tracking-wider text-primary-foreground/80">
              {person.role}
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <p className="text-sm leading-relaxed text-muted-foreground">{person.bio}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {person.focus.map((f) => (
            <span
              key={f}
              className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-foreground"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Skills
            </div>
            <PlaceholderList label="Skill" count={4} />
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <GraduationCap className="h-4 w-4 text-primary" />
              Education
            </div>
            <PlaceholderList label="Education" count={2} />
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Briefcase className="h-4 w-4 text-primary" />
              Experience
            </div>
            <PlaceholderList label="Experience" count={3} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function About() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32">
          <SectionHeader
            eyebrow="About"
            title="Professional engineering services"
            description="nova2labs is a freelance engineering agency dedicated to delivering high-quality AI solutions, cloud infrastructure, and custom software development services to businesses of all sizes."
          />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {people.map((p, i) => (
              <PersonCard key={p.name} person={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
