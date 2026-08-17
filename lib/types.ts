export type WindowId = "about" | "work" | "process" | "contact";

export type ProjectCategory = "Brands" | "E-commerce" | "Experiments";

export interface Project {
  id: string;
  name: string;
  domain: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  gradient: string;
}

export interface PricingItem {
  label: string;
  price: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface AboutRow {
  label: string;
  value: string;
}

export interface ContactLink {
  id: "telegram" | "instagram" | "email";
  label: string;
  value: string;
  href: string;
}
