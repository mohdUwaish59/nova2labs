import type { ComponentType } from "react";
import {
  IconAiAgent,
  IconLlmNlp,
  IconFullStack,
  IconDevOps,
  IconNetworking,
  IconInfrastructure,
} from "@/components/ServiceIcons";

type IconComponent = ComponentType<{ className?: string }>;

export type ServiceDetail = {
  slug: string;
  icon: IconComponent;
  title: string;
  tagline: string;
  body: string;
  points: string[];
  deliverables: string[];
  process: { step: string; detail: string }[];
  stack: string[];
  outcomes: string[];
  lead: string;
  startingAt?: string;
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "ai-agents",
    icon: IconAiAgent,
    title: "AI Agents",
    tagline: "Autonomous systems that act, not just answer.",
    body: "Autonomous and assistive agents with tool-use, memory, evaluation and guardrails. From scoped copilots to multi-agent workflows wired into your real systems.",
    points: ["Tool-use & function calling", "RAG + memory architectures", "Evaluation harnesses"],
    deliverables: [
      "Agent architecture design document with task graph and tool contracts",
      "Production agent runtime with tool-calling, memory and tracing",
      "Evaluation suite covering accuracy, safety, latency and cost",
      "Guardrails, prompt-injection defenses and human-in-the-loop checkpoints",
      "Operator dashboard for runs, traces, replay and overrides",
    ],
    process: [
      { step: "Scope", detail: "Identify the workflow, success metric and acceptance criteria." },
      { step: "Prototype", detail: "Ship a thin vertical slice with one agent, one tool, real data." },
      { step: "Harden", detail: "Add evals, retries, fallbacks, observability and cost ceilings." },
      { step: "Operate", detail: "Hand over with runbooks, dashboards and on-call playbooks." },
    ],
    stack: ["OpenAI", "Anthropic", "LangGraph", "Vercel AI SDK", "Pinecone / pgvector", "Temporal"],
    outcomes: [
      "Cut manual workflow time by 60–90%",
      "Auditable, replayable agent decisions",
      "Predictable per-task cost and latency",
    ],
    lead: "nova2labs",
    startingAt: "$3,500",
  },
  {
    slug: "llm-nlp",
    icon: IconLlmNlp,
    title: "LLM & NLP",
    tagline: "From raw text to reliable, structured signal.",
    body: "Production LLM systems — model selection, fine-tuning, prompt engineering, classical NLP pipelines and structured extraction that holds up under load.",
    points: ["Fine-tuning & adapters", "Retrieval pipelines", "Classification & NER"],
    deliverables: [
      "Model selection report with cost, latency and quality benchmarks",
      "Retrieval pipeline: ingestion, chunking, embeddings, hybrid search",
      "Fine-tuned model or LoRA adapter with reproducible training pipeline",
      "Structured extraction layer with schema validation and fallbacks",
      "Eval harness with golden sets and regression tracking",
    ],
    process: [
      { step: "Data audit", detail: "Inventory sources, licensing, PII and label quality." },
      { step: "Baseline", detail: "Start with the simplest model that could work; measure." },
      { step: "Optimize", detail: "Iterate on retrieval, prompts, fine-tunes — only where it moves the metric." },
      { step: "Ship", detail: "Deploy behind a typed API with rate limits, caching and observability." },
    ],
    stack: ["PyTorch", "Hugging Face", "spaCy", "LlamaIndex", "Weaviate", "Ray"],
    outcomes: [
      "Higher extraction accuracy at a fraction of frontier-model cost",
      "Deterministic, schema-validated outputs",
      "Repeatable training and eval pipelines",
    ],
    lead: "nova2labs",
    startingAt: "$2,500",
  },
  {
    slug: "full-stack",
    icon: IconFullStack,
    title: "Full-Stack Engineering",
    tagline: "Modern web products, shipped end-to-end.",
    body: "Typed APIs, clean data layers, accessible UI and a delivery pipeline that scales with the team. From greenfield products to rescuing stalled codebases.",
    points: ["React / Next / TanStack", "Node, Python, Go services", "Postgres, Redis, queues"],
    deliverables: [
      "Architecture document covering data model, APIs and deployment topology",
      "Typed end-to-end stack with shared contracts between client and server",
      "Accessible, responsive UI built on a documented design system",
      "Authentication, authorization and role model wired to the database",
      "CI pipeline with previews, tests and one-click rollbacks",
    ],
    process: [
      { step: "Discovery", detail: "Map users, jobs-to-be-done and the smallest valuable release." },
      { step: "Foundations", detail: "Set up the stack, conventions and CI before feature work." },
      { step: "Iterate", detail: "Ship in weekly increments behind feature flags." },
      { step: "Scale", detail: "Profile, cache, denormalize and split services only when needed." },
    ],
    stack: ["React", "TanStack Start", "Node.js", "Python", "PostgreSQL", "Redis"],
    outcomes: [
      "Production launch in weeks, not quarters",
      "A codebase your team can extend without us",
      "Measurable performance and accessibility budgets",
    ],
    lead: "nova2labs",
    startingAt: "$5,000",
  },
  {
    slug: "devops",
    icon: IconDevOps,
    title: "DevOps & DevSecOps",
    tagline: "Pipelines and platforms your team can actually operate.",
    body: "CI/CD, infrastructure as code and Kubernetes — with security woven into the pipeline. Cost-aware, observable, reproducible and hardened by default.",
    points: ["Terraform / Pulumi", "Kubernetes & GitOps", "SAST/DAST, SBOM, policy-as-code"],
    deliverables: [
      "Infrastructure as code covering networks, clusters, data and secrets",
      "GitOps-driven Kubernetes platform with progressive delivery",
      "CI/CD pipelines with SAST, DAST, SBOM generation and signed artifacts",
      "Policy-as-code (OPA / Kyverno) enforcing security and cost guardrails",
      "Observability stack: metrics, logs, traces and SLO-based alerts",
    ],
    process: [
      { step: "Assess", detail: "Audit current infra, pipelines, security posture and cost." },
      { step: "Design", detail: "Target architecture with explicit trade-offs and migration path." },
      { step: "Migrate", detail: "Move workloads in safe slices with rollback at every step." },
      { step: "Enable", detail: "Train the team and leave runbooks they actually use." },
    ],
    stack: ["Terraform", "Kubernetes", "ArgoCD", "GitHub Actions", "Prometheus", "Trivy"],
    outcomes: [
      "Faster, safer deploys with measurable lead time",
      "Security findings caught at PR time, not in production",
      "Lower cloud bill through right-sizing and policy",
    ],
    lead: "nova2labs",
    startingAt: "$2,000",
  },
  {
    slug: "networking",
    icon: IconNetworking,
    title: "Networking",
    tagline: "Networks designed to stay up under real load.",
    body: "Designing and operating networks that stay up. From SD-WAN and segmentation to VPN, routing and edge connectivity for distributed teams and sites.",
    points: ["Routing & switching", "VPN / SD-WAN", "Segmentation & ACLs"],
    deliverables: [
      "Network architecture and addressing plan with growth headroom",
      "Segmentation model, ACLs and zero-trust access policies",
      "Site-to-site and remote-access VPN / SD-WAN deployment",
      "Monitoring, alerting and capacity dashboards",
      "Runbooks for incident response and change management",
    ],
    process: [
      { step: "Survey", detail: "Inventory sites, links, devices and current pain points." },
      { step: "Design", detail: "Propose topology, segmentation and failure domains." },
      { step: "Roll out", detail: "Stage changes per site with documented rollback." },
      { step: "Operate", detail: "Set SLOs, dashboards and a change cadence." },
    ],
    stack: ["Cisco", "MikroTik", "Fortinet", "WireGuard", "pfSense", "Zabbix"],
    outcomes: [
      "Documented, predictable network behavior",
      "Reduced incidents and faster MTTR",
      "Secure remote access without VPN sprawl",
    ],
    lead: "nova2labs",
    startingAt: "$1,500",
  },
  {
    slug: "it-infrastructure",
    icon: IconInfrastructure,
    title: "IT Infrastructure",
    tagline: "Foundations that scale from 10 to 1,000 people.",
    body: "Foundational IT — directory, identity, endpoint management, virtualization and disaster recovery designed for organizations that need to grow without breaking.",
    points: ["Identity & SSO", "Virtualization", "Backup & DR"],
    deliverables: [
      "Identity and SSO rollout (Entra ID / Google Workspace / Okta)",
      "Endpoint management with baseline policies and patching",
      "Virtualization or private-cloud platform with HA storage",
      "Backup, retention and disaster-recovery plan with tested RPO/RTO",
      "Asset inventory, lifecycle and offboarding workflow",
    ],
    process: [
      { step: "Audit", detail: "Map current systems, accounts, devices and risks." },
      { step: "Plan", detail: "Target state with phased migration and budget." },
      { step: "Deploy", detail: "Implement in waves, verifying at each milestone." },
      { step: "Handover", detail: "Documentation, training and ongoing support model." },
    ],
    stack: ["Entra ID", "Active Directory", "Proxmox", "VMware", "Veeam", "Intune"],
    outcomes: [
      "One identity, one device policy, one source of truth",
      "Tested recovery — not just backups",
      "Clean joiner / mover / leaver workflows",
    ],
    lead: "nova2labs",
    startingAt: "$1,500",
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
