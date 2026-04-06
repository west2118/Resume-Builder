// utils/templates.ts

export type TemplateCategory =
  | "professional"
  | "academic"
  | "simple"
  | "creative"
  | "technical";

export type TemplateItem = {
  id: string;
  name: string;
  category: TemplateCategory;
  description: string;
  popularity?: string;
  image: string;
  layout: string;
  features: string[];
  isPremium?: boolean;
};

export const templates: TemplateItem[] = [
  {
    id: "plain",
    name: "Plain Professional",
    category: "professional",
    description: "Clean, modern layout focused on clarity and readability.",
    popularity: "Most Popular",
    image: "/images/plainResume.jpg",
    layout: "Single Column",
    features: [
      "Professional summary",
      "Work experience",
      "Education section",
      "Skills display",
      "Projects & certifications",
    ],
    isPremium: false,
  },
  {
    id: "harvard",
    name: "Harvard Classic",
    category: "academic",
    description:
      "Traditional academic resume inspired by Harvard formatting standards.",
    popularity: "ATS Friendly",
    image: "/images/harvardResume.jpg",
    layout: "Structured Academic",
    features: [
      "Formal academic layout",
      "Clean typography",
      "Experience-first structure",
      "Education emphasis",
      "Minimal styling",
    ],
    isPremium: false,
  },
];
