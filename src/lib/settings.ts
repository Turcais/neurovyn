import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from "@/components/brand/social-icons";
import { sanityFetch } from "@/sanity/client";
import { siteSettingsQuery } from "@/sanity/queries";
import { contact, site, socialLinks as defaultSocialLinks } from "./site";

/**
 * Site ayarlari: once yonetim panelinden, kayit yoksa koddaki
 * varsayilanlardan okunur. Panelde bos birakilan her alan da
 * varsayilana duser, bu yuzden kismi doldurma guvenlidir.
 */

type SanitySettings = {
  brandName?: string;
  tagline?: string;
  sloganLead?: string;
  sloganTail?: string;
  footerBlurb?: string;
  email?: string;
  phone?: string;
  phoneHref?: string;
  whatsapp?: string;
  whatsappMessage?: string;
  address?: string;
  seoDescription?: string;
  socialLinks?: { platform: string; url: string }[];
};

/** Hem lucide ikonlari hem kendi SVG bilesenlerimiz bu tipe uyar. */
export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export type ContactLink = {
  label: string;
  href: string | null;
  icon: LucideIcon;
};

export type ResolvedSettings = {
  brandName: string;
  tagline: string;
  sloganLead: string;
  sloganTail: string;
  footerBlurb: string;
  seoDescription: string;
  email: string;
  phone: string;
  phoneHref: string;
  address: string;
  whatsappHref: string;
  contactLinks: ContactLink[];
  socialLinks: SocialLink[];
};

const socialMeta: Record<string, { label: string; icon: SocialLink["icon"] }> = {
  linkedin: { label: "LinkedIn", icon: LinkedInIcon },
  instagram: { label: "Instagram", icon: InstagramIcon },
  youtube: { label: "YouTube", icon: YouTubeIcon },
  email: { label: "E-posta", icon: Mail },
};

/** Bos string'leri de yok sayar; "" panelde silinmis alan demektir. */
const pick = (value: string | undefined, fallback: string) => value?.trim() || fallback;

export async function getSettings(): Promise<ResolvedSettings> {
  const cms = await sanityFetch<SanitySettings | null>(siteSettingsQuery, {}, null, {
    tags: ["siteSettings"],
  });

  const brandName = pick(cms?.brandName, site.name);
  const email = pick(cms?.email, contact.email);
  const phone = pick(cms?.phone, contact.phone);
  const phoneHref = pick(cms?.phoneHref, contact.phoneHref);
  const address = pick(cms?.address, contact.address);
  const whatsapp = pick(cms?.whatsapp, contact.whatsapp);
  const whatsappMessage = pick(cms?.whatsappMessage, contact.whatsappMessage);

  const social: SocialLink[] = cms?.socialLinks?.length
    ? cms.socialLinks
        .map(({ platform, url }) => {
          const meta = socialMeta[platform];
          return meta ? { label: meta.label, href: url, icon: meta.icon } : null;
        })
        .filter((item): item is SocialLink => item !== null)
    : defaultSocialLinks.map((item) => ({ ...item }));

  return {
    brandName,
    tagline: pick(cms?.tagline, site.tagline),
    sloganLead: pick(cms?.sloganLead, site.sloganLead),
    sloganTail: pick(cms?.sloganTail, site.sloganTail),
    footerBlurb: pick(cms?.footerBlurb, site.footerBlurb),
    seoDescription: pick(cms?.seoDescription, site.description),
    email,
    phone,
    phoneHref,
    address,
    whatsappHref: `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
    contactLinks: [
      { label: pick(undefined, contact.site), href: site.url, icon: Globe },
      { label: email, href: `mailto:${email}`, icon: Mail },
      { label: phone, href: `tel:${phoneHref}`, icon: Phone },
      { label: address, href: null, icon: MapPin },
    ],
    socialLinks: social,
  };
}
