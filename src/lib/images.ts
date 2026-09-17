/**
 * Photography used across the site.
 *
 * Real photographs served from the Unsplash CDN (Unsplash License: free for
 * commercial use, no attribution required). Every id below was verified live.
 * Images are requested through the CDN's transform params, so each placement
 * gets exactly the crop and size it needs — nothing oversized ships to a phone.
 */

export type Photo = { id: string; alt: string };

const CDN = "https://images.unsplash.com/photo-";

/** Builds a cropped, auto-formatted CDN url for one placement. */
export function photoUrl(id: string, w: number, h: number, q = 74) {
  return `${CDN}${id}?auto=format&fit=crop&crop=entropy&w=${w}&h=${h}&q=${q}`;
}

/** Widths offered to the browser; it picks what the layout actually needs. */
export const PHOTO_WIDTHS = [480, 768, 1080, 1600, 2000];

/* ── Service photography ──────────────────────────────────────────────────── */
export const SERVICE_PHOTOS: Record<string, Photo> = {
  "ai-agents": {
    id: "1550751827-4bd374c3f58b",
    alt: "Close-up of an illuminated circuit board carrying signal traces",
  },
  "llm-nlp": {
    id: "1487058792275-0ad4aaf24ca7",
    alt: "Streams of syntax-highlighted source code on a dark display",
  },
  "full-stack": {
    id: "1498050108023-c5249f4df085",
    alt: "A laptop on a clean desk showing an editor mid-build",
  },
  devops: {
    id: "1517180102446-f3ece451e9d8",
    alt: "A terminal and editor open on a dark screen during a deployment",
  },
  networking: {
    id: "1544197150-b99a580bb7a8",
    alt: "Patch panel with numbered ports and network cables connected",
  },
  "it-infrastructure": {
    id: "1573164713988-8665fc963095",
    alt: "Engineers working with a laptop in a lit data-centre aisle",
  },
  "graphic-design": {
    id: "1581092160562-40aa08e78837",
    alt: "A designer sketching interface wireframes at a desk",
  },
};

/* ── Work photography, by discipline ─────────────────────────────────────── */
export const WORK_CATEGORY_PHOTOS: Record<string, Photo> = {
  "AI Agents": {
    id: "1531297484001-80022131f5a1",
    alt: "A laptop glowing in a darkened room",
  },
  "LLM & NLP": {
    id: "1526628953301-3e589a6a8b74",
    alt: "A dashboard of charts and metrics on a widescreen monitor",
  },
  "Full-Stack": {
    id: "1504639725590-34d0984388bd",
    alt: "A developer workstation with code across two monitors",
  },
  "DevOps & Cloud": {
    id: "1555949963-aa79dcee981c",
    alt: "Colour-highlighted code on screen during a review",
  },
  "IT Infrastructure": {
    id: "1558494949-ef010cbdcc31",
    alt: "Server racks with structured fibre cabling",
  },
  "Networking & Security": {
    id: "1591808216268-ce0b82787efe",
    alt: "Network cables patched into a rack-mounted switch",
  },
  "Brand & Design": {
    id: "1581092160562-40aa08e78837",
    alt: "A designer sketching interface wireframes at a desk",
  },
};

/** Per-project overrides where a specific photo fits better than the discipline default. */
export const WORK_PHOTOS: Record<string, Photo> = {
  "infotech-wizard": {
    id: "1531482615713-2afd69097998",
    alt: "Two colleagues troubleshooting together at a support desk",
  },
  "n8n-agent-workflows": {
    id: "1551288049-bebda4e38f71",
    alt: "Analytics charts on a laptop screen",
  },
  "enterprise-endpoint-automation": {
    id: "1573164713988-8665fc963095",
    alt: "Engineers working with a laptop in a lit data-centre aisle",
  },
  "itsm-automation": {
    id: "1522071820081-009f0129c71c",
    alt: "A team working across laptops around a shared table",
  },
  "otree-proxy-server": {
    id: "1519389950473-47ba0277781c",
    alt: "Overhead view of laptops and notebooks on a desk during a session",
  },
  "universitaet-kompass": {
    id: "1552664730-d307ca884978",
    alt: "A planning session with notes on a wall and open laptops",
  },
  "pfsense-security-lab": {
    id: "1544197150-b99a580bb7a8",
    alt: "Patch panel with numbered ports and network cables connected",
  },
};

/* ── Page photography ─────────────────────────────────────────────────────── */
export const PAGE_PHOTOS = {
  homeBand: {
    id: "1558494949-ef010cbdcc31",
    alt: "Server racks with structured fibre cabling",
  },
  aboutMission: {
    id: "1556761175-b413da4baf72",
    alt: "An open-plan studio with a team at work",
  },
  aboutEngagement: {
    id: "1552664730-d307ca884978",
    alt: "A planning session with notes on a wall and open laptops",
  },
  contact: {
    id: "1521791136064-7986c2920216",
    alt: "Two people shaking hands at the start of a project",
  },
  workHero: {
    id: "1451187580459-43490279c0fa",
    alt: "Earth at night from orbit, city lights visible",
  },
  practiceAi: {
    id: "1550751827-4bd374c3f58b",
    alt: "Close-up of an illuminated circuit board carrying signal traces",
  },
  practiceInfra: {
    id: "1581092918056-0c4c3acd3789",
    alt: "Hands working on hardware components at a bench",
  },
} satisfies Record<string, Photo>;

export const workPhoto = (slug: string, category: string): Photo =>
  WORK_PHOTOS[slug] ?? WORK_CATEGORY_PHOTOS[category] ?? PAGE_PHOTOS.homeBand;

export const servicePhoto = (slug: string): Photo => SERVICE_PHOTOS[slug] ?? PAGE_PHOTOS.homeBand;
