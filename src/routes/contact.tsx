import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Send } from "lucide-react";
import { PageShell, SectionHeader } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — nova2labs" },
      {
        name: "description",
        content:
          "Get in touch with nova2labs to discuss your project. We respond within 24 hours.",
      },
      { property: "og:title", content: "Contact — nova2labs" },
      {
        property: "og:description",
        content: "Reach out to start a project or discuss your business needs with nova2labs.",
      },
    ],
  }),
  component: Contact,
});

type FormState = "idle" | "sending" | "success" | "error";

function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const topic = data.get("topic") as string;
    const message = data.get("message") as string;

    // Build mailto: href as a reliable fallback that opens the user's email client
    // pre-filled with all the form data — this ALWAYS works without any backend.
    const subject = encodeURIComponent(`[nova2labs] ${topic} — ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        `Topic: ${topic}`,
        "",
        "Project Brief:",
        message,
      ]
        .filter(Boolean)
        .join("\n")
    );

    const mailtoHref = `mailto:nova2labai@gmail.com?subject=${subject}&body=${body}`;

    // Open the mailto link — works on desktop & mobile
    try {
      window.location.href = mailtoHref;
      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErrorMsg("Something went wrong. Please email us directly at contact@nova2labs.com");
    }
  };

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32">
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something together"
            description="Tell us about your project. We read every message and reply within one business day."
          />
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="border-b border-border bg-surface/60">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              { icon: Clock, label: "< 24 hr response" },
              { icon: CheckCircle2, label: "No commitment required" },
              { icon: Mail, label: "Direct line to engineers" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FORM + SIDEBAR */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.4fr]">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-xl font-semibold">Reach us directly</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer a direct email? Write to us anytime at{" "}
                <a
                  href="mailto:nova2labai@gmail.com"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  contact@nova2labs.com
                </a>
              </p>
            </div>

            <a
              href="mailto:nova2labai@gmail.com"
              className="flex items-start gap-4 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary/50"
            >
              <Mail className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="text-sm font-semibold">Email</div>
                <div className="font-mono text-xs text-muted-foreground">
                  contact@nova2labs.com
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-lg border border-border bg-surface p-4">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="text-sm font-semibold">Working remotely</div>
                <div className="font-mono text-xs text-muted-foreground">
                  Available across time zones
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5">
              <div className="font-mono text-xs uppercase tracking-wider text-primary">
                Typical engagement process
              </div>
              <ol className="mt-3 space-y-3">
                {[
                  "You send a brief via this form",
                  "We review & reply with questions / a rough estimate",
                  "Discovery call to align on scope & timeline",
                  "Proposal → kick-off",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-[10px] text-primary">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-lg border border-dashed border-primary/30 bg-primary/5 p-5">
              <div className="font-mono text-xs uppercase tracking-wider text-primary">
                Not sure what you need?
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                That's fine — send us a rough idea. We'll help you scope it out with no obligation.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {state === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-surface p-12 text-center shadow-elegant"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">Message sent!</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Your email client should have opened with a pre-filled message. Hit send there and
                  we'll reply within one business day.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-8 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-border bg-surface p-8 shadow-elegant"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Name" name="name" required placeholder="Your full name" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                </div>
                <div className="mt-5">
                  <Field label="Company" name="company" placeholder="Optional" />
                </div>
                <div className="mt-5">
                  <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Topic
                  </label>
                  <select
                    name="topic"
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                  >
                    <option>AI Solutions & Integration</option>
                    <option>Cloud Infrastructure</option>
                    <option>Custom Software Development</option>
                    <option>DevOps & CI/CD</option>
                    <option>Networking & IT Infrastructure</option>
                    <option>Consulting & Strategy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mt-5">
                  <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Project brief
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="A few sentences on what you're building, your timeline, and what you need from us."
                    className="mt-2 w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>

                {state === "error" && (
                  <p className="mt-3 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-60"
                >
                  {state === "sending" ? "Opening email client…" : "Send message"}
                  <Send className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  This opens your email client pre-filled — no data is sent to third parties.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
