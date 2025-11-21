import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProjectCase {
  id: number;
  client: string;
  category: string;
  image: string;
  stats: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}