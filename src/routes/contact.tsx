import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { PageShell, SectionHeader } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — nova2labs" },
      {
        name: "description",
        content: "Get in touch with nova2labs to discuss your project and receive a quote.",
      },
      { property: "og:title", content: "Contact — nova2labs" },
      {
        property: "og:description",
        content: "Reach out to start a project or discuss your business needs.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message queued — connect this form to a backend to deliver it.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32">
          <SectionHeader
            eyebrow="Contact"
            title="Let's discuss your project"
            description="Tell us about your business needs and how we can help. We respond within 24 hours."
          />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer email? Reach us directly at contact@nova2labs.com
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:contact@nova2labs.com"
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
            </div>

            <div className="rounded-lg border border-border bg-surface p-5">
              <div className="font-mono text-xs uppercase tracking-wider text-primary">
                Response time
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                We reply to every serious inquiry within one business day.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-surface p-8 shadow-elegant"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" name="name" required placeholder="Your full name" />
              <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
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
                placeholder="A few sentences on what you're building, the timeline, and what you need from us."
                className="mt-2 w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
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
