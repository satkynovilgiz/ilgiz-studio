import type {
  AboutRow,
  ContactLink,
  PricingItem,
  Project,
  ProcessStep,
} from "./types";

// Replace with real handles when ready to launch.
export const SOCIAL = {
  telegram: "ilgizsatkynov",
  instagram: "ilgizsatkynov",
  github: "ilgizsatkynov",
  email: "satkynovilgiz2008@gmail.com",
};

export const TELEGRAM_URL = `https://t.me/${SOCIAL.telegram}`;
export const GITHUB_URL = `https://github.com/${SOCIAL.github}`;
export const INSTAGRAM_URL = `https://instagram.com/${SOCIAL.instagram}`;
export const EMAIL_URL = `mailto:${SOCIAL.email}`;

export const PROJECTS: Project[] = [
  {
    id: "aurora-cosmetics",
    name: "Aurora Cosmetics",
    domain: "aurora-cosmetics.com",
    description: "E-commerce storefront for an indie skincare brand.",
    category: "E-commerce",
    tags: ["Design", "code"],
    gradient: "from-rose-300 via-fuchsia-300 to-indigo-300",
  },
  {
    id: "north-coffee",
    name: "North Coffee Co.",
    domain: "northcoffee.co",
    description: "Brand site and online ordering for a specialty roaster.",
    category: "Brands",
    tags: ["Design", "code", "CMS"],
    gradient: "from-amber-300 via-orange-300 to-red-300",
  },
  {
    id: "fieldnote",
    name: "Fieldnote",
    domain: "fieldnote.app",
    description: "Marketing site for a minimalist journaling app.",
    category: "Brands",
    tags: ["Design", "code"],
    gradient: "from-emerald-300 via-teal-300 to-cyan-300",
  },
  {
    id: "loop-studio",
    name: "Loop Studio",
    domain: "loop.studio",
    description: "Portfolio and shop for an independent motion designer.",
    category: "E-commerce",
    tags: ["Design", "code", "Animation"],
    gradient: "from-violet-300 via-purple-300 to-pink-300",
  },
  {
    id: "glass-desk",
    name: "Glass Desk",
    domain: "glassdesk.io",
    description: "Interactive playground exploring window-manager UI patterns.",
    category: "Experiments",
    tags: ["Prototype", "motion"],
    gradient: "from-sky-300 via-blue-300 to-indigo-300",
  },
  {
    id: "quiet-hours",
    name: "Quiet Hours",
    domain: "quiethours.co",
    description: "Landing page and waitlist for a focus-timer product.",
    category: "Brands",
    tags: ["Design", "code"],
    gradient: "from-lime-300 via-green-300 to-emerald-300",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Briefing",
    description: "We talk through goals, audience, and what success looks like.",
  },
  {
    number: "02",
    title: "Structure",
    description: "I map the site's structure and content before any visuals.",
  },
  {
    number: "03",
    title: "Concept",
    description: "A visual direction takes shape, tuned to your brand.",
  },
  {
    number: "04",
    title: "Development",
    description: "The design gets built into a fast, responsive, real site.",
  },
  {
    number: "05",
    title: "Launch",
    description: "We ship it, test it live, and hand over everything you need.",
  },
];

export const PRICING: PricingItem[] = [
  { label: "Minor edits", price: "from $80" },
  { label: "One-page site", price: "from $450" },
  { label: "Multi-page site", price: "from $900" },
  { label: "Online store", price: "from $1,600" },
  { label: "Custom complex project", price: "calculated individually" },
];

export const ABOUT_ROWS: AboutRow[] = [
  { label: "Specialization", value: "Brand sites, e-commerce, product landing pages" },
  { label: "Work format", value: "Design + development + full launch" },
  { label: "System", value: "ILGIZ.STUDIO" },
  { label: "Status", value: "Available for new projects" },
  { label: "Sleep mode", value: "Unavailable" },
  { label: "Memory", value: "Too many ideas" },
];

export const CONTACT_LINKS: ContactLink[] = [
  { id: "telegram", label: "Telegram", value: `@${SOCIAL.telegram}`, href: TELEGRAM_URL },
  { id: "instagram", label: "Instagram", value: `@${SOCIAL.instagram}`, href: INSTAGRAM_URL },
  { id: "email", label: "Email", value: SOCIAL.email, href: EMAIL_URL },
];
