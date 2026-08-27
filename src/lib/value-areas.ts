import type { LucideIcon } from "lucide-react";
import { Brain, Building2, GraduationCap, Presentation, UserRound, Users } from "lucide-react";
import { sanityFetch } from "@/sanity/client";
import { groq } from "next-sanity";
import { valueAreaDetails } from "./content";
import { valueAreas as localAreas } from "./site";

/**
 * Deger Urettigimiz Alanlar.
 * Panelde kayit varsa oradan, yoksa koddaki listeden okunur.
 */

export type ResolvedValueArea = {
  slug: string;
  title: string;
  icon: LucideIcon;
  colorVar: string;
  lead?: string;
  forWhom: string[];
};

const iconByKey: Record<string, LucideIcon> = {
  user: UserRound,
  graduation: GraduationCap,
  brain: Brain,
  users: Users,
  presentation: Presentation,
  building: Building2,
};

const colorByKey: Record<string, string> = {
  egitim: "--area-egitim",
  toplum: "--area-toplum",
  saglik: "--area-saglik",
  kariyer: "--area-kariyer",
  gelisim: "--area-gelisim",
  anlam: "--area-anlam",
};

const valueAreasQuery = groq`
  *[_type == "valueArea" && defined(slug.current)] | order(order asc) {
    "slug": slug.current, title, icon, color, lead, forWhom
  }
`;

type SanityValueArea = {
  slug: string;
  title: string;
  icon?: string;
  color?: string;
  lead?: string;
  forWhom?: string[];
};

/** Koddaki listeyi cozulmus bicime cevirir. */
function localResolved(): ResolvedValueArea[] {
  return localAreas.map((area) => ({
    slug: area.slug,
    title: area.title,
    icon: area.icon,
    colorVar: area.colorVar,
    lead: valueAreaDetails[area.slug]?.lead,
    forWhom: valueAreaDetails[area.slug]?.forWhom ?? [],
  }));
}

export async function getValueAreas(): Promise<ResolvedValueArea[]> {
  const cms = await sanityFetch<SanityValueArea[]>(valueAreasQuery, {}, [], {
    tags: ["valueArea"],
  });

  if (cms.length === 0) return localResolved();

  return cms.map((area) => ({
    slug: area.slug,
    title: area.title,
    icon: (area.icon && iconByKey[area.icon]) || UserRound,
    colorVar: (area.color && colorByKey[area.color]) || "--area-egitim",
    lead: area.lead,
    forWhom: area.forWhom ?? [],
  }));
}

export async function getValueArea(slug: string) {
  const areas = await getValueAreas();
  return areas.find((area) => area.slug === slug) ?? null;
}
