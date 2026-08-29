/**
 * Neurovyn marka, gezinme ve icerik sabitleri.
 * Metinlerin tek kaynagi burasidir; bilesenler yalnizca buradan okur.
 */
import {
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Compass,
  Eye,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Home,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  PencilRuler,
  Phone,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Sprout,
  Target,
  UserRound,
  Users,
  UsersRound,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from "@/components/brand/social-icons";

export const site = {
  name: "Neurovyn",
  tagline: "Nöroyaşam Tasarımı",
  sloganLead: "Bilimle anlarız",
  sloganTail: "Birlikte tasarlarız",
  url: "https://neurovyn.com.tr",
  locale: "tr_TR",
  lang: "tr",
  description:
    "Neurovyn, bireyi değiştirmeyi değil; bireyin kendini ve ekosistemini anlayarak yaşamını bilinçli şekilde tasarlamasını destekleyen bilim temelli bir Nöroyaşam Tasarımı yaklaşımıdır.",
  founder: "Ebru Şahin Mercimek",
  footerBlurb:
    "Bilimle anlarız, birlikte tasarlarız. İnsanı anlamak, yaşamı dönüştürmek için buradayız.",
} as const;

export const contact = {
  site: "neurovyn.com.tr",
  email: "info@neurovyn.com.tr",
  phone: "+90 555 824 84 20",
  phoneHref: "+905558248420",
  /** wa.me formati: basinda + ve bosluk olmadan */
  whatsapp: "905558248420",
  whatsappMessage: "Merhaba, Neurovyn hakkında bilgi almak istiyorum.",
  address: "İstanbul, Türkiye",
} as const;

/** Onceden doldurulmus mesajla WhatsApp baglantisi. */
export const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

/** Ust menu — mockup'taki ikonlu sekme sirasi. */
export const mainNav: NavItem[] = [
  { label: "Ana Sayfa", href: "/", icon: Home },
  { label: "Vizyonumuz", href: "/vizyonumuz", icon: Eye },
  { label: "Misyonumuz", href: "/misyonumuz", icon: Target },
  { label: "Ne Yapıyoruz", href: "/ne-yapiyoruz", icon: Lightbulb },
  { label: "Değer Ürettiğimiz Alanlar", href: "/alanlarimiz", icon: UsersRound },
  { label: "Bilimsel Temelimiz", href: "/bilimsel-temelimiz", icon: FlaskConical },
  { label: "Hakkımızda", href: "/hakkimizda", icon: UserRound },
  { label: "Blog", href: "/blog", icon: BookOpen },
];

export const ctaNav = { label: "Bize Ulaşın", href: "/iletisim" } as const;

/* ---------------- Ana sayfa: NE YAPIYORUZ? ---------------- */

export type Pillar = {
  title: string;
  summary: string;
  href: string;
  icon: LucideIcon;
  /** globals.css icindeki renk degiskeni */
  colorVar: string;
};

export const pillars: Pillar[] = [
  {
    title: "Anlıyoruz",
    summary: "İnsanı bütüncül olarak ele alır, güçlü yönleri ve ihtiyaçları derinlemesine değerlendiririz.",
    href: "/ne-yapiyoruz#anliyoruz",
    icon: ScanSearch,
    colorVar: "--area-egitim",
  },
  {
    title: "Tasarlıyoruz",
    summary: "Kişiye özel gelişim yolunu birlikte planlar, sürdürülebilir çözümler üretiriz.",
    href: "/ne-yapiyoruz#tasarliyoruz",
    icon: PencilRuler,
    colorVar: "--area-anlam",
  },
  {
    title: "Destekliyoruz",
    summary: "Uygulama ve izleme süreçleriyle gelişimi destekler, kalıcı dönüşümü mümkün kılarız.",
    href: "/ne-yapiyoruz#destekliyoruz",
    icon: Leaf,
    colorVar: "--area-toplum",
  },
];

/* ---------------- Ana sayfa: DEĞER ÜRETTİĞİMİZ ALANLAR ---------------- */

export type ValueArea = {
  slug: string;
  title: string;
  icon: LucideIcon;
  colorVar: string;
};

export const valueAreas: ValueArea[] = [
  { slug: "bireysel-gelisim-ve-farkindalik", title: "Bireysel Gelişim ve Farkındalık", icon: Sparkles, colorVar: "--area-egitim" },
  { slug: "egitim-ve-ogrenme", title: "Eğitim ve Öğrenme", icon: GraduationCap, colorVar: "--area-gelisim" },
  { slug: "aile-ve-ebeveynlik", title: "Aile ve Ebeveynlik", icon: Users, colorVar: "--area-aile" },
  { slug: "norocesitlilik-ve-kapsayicilik", title: "Nöroçeşitlilik ve Kapsayıcılık", icon: Brain, colorVar: "--area-toplum" },
  { slug: "iliskiler-ve-sosyal-yasam", title: "İlişkiler ve Sosyal Yaşam", icon: HeartHandshake, colorVar: "--area-saglik" },
  { slug: "kariyer-ve-yetiskin-yasami", title: "Kariyer ve Yetişkin Yaşamı", icon: Briefcase, colorVar: "--area-kariyer" },
  { slug: "yasam-ekosistemleri", title: "Yaşam Ekosistemleri", icon: Globe, colorVar: "--area-anlam" },
];

/** Ne Yapiyoruz sayfasindaki hizmet basliklari. */
export type Service = { slug: string; title: string; icon: LucideIcon; colorVar: string };

export const services: Service[] = [
  { slug: "bireysel-yasam-koclugu", title: "Bireysel Yaşam Koçluğu", icon: Compass, colorVar: "--area-gelisim" },
  { slug: "norocesitlilik-odakli-destek", title: "Nöroçeşitlilik Odaklı Destek", icon: Brain, colorVar: "--area-egitim" },
  { slug: "ogrenci-ve-egitim-yasami", title: "Öğrenci ve Eğitim Yaşamı", icon: GraduationCap, colorVar: "--area-kariyer" },
  { slug: "aile-ve-ebeveyn-destegi", title: "Aile ve Ebeveyn Desteği", icon: Users, colorVar: "--area-aile" },
  { slug: "kariyer-ve-is-yasami", title: "Kariyer ve İş Yaşamı", icon: Briefcase, colorVar: "--area-saglik" },
  { slug: "yasam-ekosistemi-calismalari", title: "Yaşam Ekosistemi Çalışmaları", icon: Globe, colorVar: "--area-toplum" },
  { slug: "gelisim-ve-yasam-tasarimi", title: "Gelişim ve Yaşam Tasarımı", icon: Sprout, colorVar: "--area-anlam" },
];

/* ---------------- Ana sayfa: guven seridi ---------------- */

export const trustPoints = [
  { title: "Bilimsel Temelli", summary: "Güncel bilimsel bilgi ve araştırmalara dayanır.", icon: ShieldCheck },
  { title: "Bireye Özgü", summary: "Her bireyin benzersizliğini merkeze alır.", icon: UserRound },
  { title: "Birlikte Tasarım", summary: "Süreci birlikte planlar, birlikte tasarlarız.", icon: HeartHandshake },
  { title: "Sürdürülebilir Gelişim", summary: "Uzun vadeli, kalıcı ve ölçülebilir gelişim hedefler.", icon: BarChart3 },
] as const;

/* ---------------- Footer ---------------- */

export const footerNav = {
  quick: {
    title: "Hızlı Erişim",
    items: [
      { label: "Ana Sayfa", href: "/" },
      { label: "Vizyonumuz", href: "/vizyonumuz" },
      { label: "Misyonumuz", href: "/misyonumuz" },
      { label: "Ne Yapıyoruz", href: "/ne-yapiyoruz" },
      { label: "Değer Ürettiğimiz Alanlar", href: "/alanlarimiz" },
      { label: "Bilimsel Temelimiz", href: "/bilimsel-temelimiz" },
      { label: "Blog", href: "/blog" },
    ],
  },
  corporate: {
    title: "Kurumsal",
    items: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Manifesto", href: "/manifesto" },
      { label: "İlkelerimiz", href: "/ilkelerimiz" },
      { label: "Ekibimiz", href: "/ekibimiz" },
      { label: "Yaklaşımımız", href: "/yaklasimimiz" },
      { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
      { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
    ],
  },
} as const;

export const contactLinks = [
  { label: contact.site, href: site.url, icon: Globe },
  { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: contact.phone, href: `tel:${contact.phoneHref}`, icon: Phone },
  { label: contact.address, href: null, icon: MapPin },
] as const;

/* TODO: gercek sosyal medya adresleri gelince guncellenecek. */
export const socialLinks = [
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
  { label: "E-posta", href: `mailto:${contact.email}`, icon: Mail },
] as const;

/* ---------------- Yedi Yaşam Alanı (ayri infografik bileseni icin) ---------------- */

export type LifeArea = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  colorVar: string;
};

export const lifeAreas: LifeArea[] = [
  { slug: "egitim-ogrenme", title: "Eğitim & Öğrenme", short: "Eğitim", summary: "Sürekli öğrenme, merak ve zihinsel gelişim.", colorVar: "--area-egitim" },
  { slug: "aile-iliskiler", title: "Aile & İlişkiler", short: "Aile", summary: "Anlamlı bağlar, destekleyici ve sağlıklı ilişkiler.", colorVar: "--area-aile" },
  { slug: "saglik-beden", title: "Sağlık & Beden", short: "Sağlık", summary: "Fiziksel, zihinsel ve duygusal iyi oluş.", colorVar: "--area-saglik" },
  { slug: "kariyer-uretkenlik", title: "Kariyer & Üretkenlik", short: "Kariyer", summary: "Yetenekleri kullanmak, değer üretmek ve katkı sağlamak.", colorVar: "--area-kariyer" },
  { slug: "kisisel-gelisim", title: "Kişisel Gelişim & İç Dünya", short: "Kişisel Gelişim", summary: "Kendini tanımak, farkındalık ve içsel büyüme.", colorVar: "--area-gelisim" },
  { slug: "anlam-degerler", title: "Anlam & Değerler", short: "Anlam", summary: "Kendi değerleri doğrultusunda yaşamına yön verebilmek.", colorVar: "--area-anlam" },
  { slug: "toplum-cevre", title: "Toplum & Çevre", short: "Toplum", summary: "Yaşadığımız dünyayla uyumlu, sorumlu ve anlamlı bir yaşam.", colorVar: "--area-toplum" },
];
