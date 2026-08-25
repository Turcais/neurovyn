/**
 * Neurovyn marka ve site sabitleri.
 * Metin degisikliklerinin tek kaynagi burasidir; bilesenler buradan okur.
 */

export const site = {
  name: "Neurovyn",
  tagline: "Nöroyaşam Tasarımı",
  slogan: "Bilimle anlarız • Birlikte tasarlarız",
  url: "https://neurovyn.com.tr",
  locale: "tr_TR",
  lang: "tr",
  description:
    "Neurovyn, bireyi değiştirmeyi değil; bireyin kendini ve ekosistemini anlayarak yaşamını bilinçli şekilde tasarlamasını destekleyen bilim temelli bir Nöroyaşam Tasarımı yaklaşımıdır.",
  founder: "Ebru Şahin Mercimek",
  email: "info@neurovyn.com.tr",
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const mainNav: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda", description: "Kurucu ve Neurovyn'in doğuşu" },
  { label: "Manifesto", href: "/manifesto", description: "Neye inanıyoruz?" },
  { label: "Yaklaşımımız", href: "/yaklasimimiz", description: "Nasıl düşünür, nasıl çalışırız?" },
  { label: "Yaşam Alanları", href: "/yasam-alanlari", description: "Gelişimin yedi alanı" },
  { label: "Blog", href: "/blog", description: "Yazılar ve notlar" },
  { label: "İletişim", href: "/iletisim" },
];

/** Neurovyn'in 7 Yaşam Alanı — ana sayfadaki çarkın veri kaynağı. */
export type LifeArea = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  /** globals.css icindeki --area-* degiskeninin adi */
  colorVar: string;
};

export const lifeAreas: LifeArea[] = [
  {
    slug: "egitim-ogrenme",
    title: "Eğitim & Öğrenme",
    short: "Eğitim",
    summary: "Sürekli öğrenme, merak ve zihinsel gelişim.",
    colorVar: "--area-egitim",
  },
  {
    slug: "aile-iliskiler",
    title: "Aile & İlişkiler",
    short: "Aile",
    summary: "Anlamlı bağlar, destekleyici ve sağlıklı ilişkiler.",
    colorVar: "--area-aile",
  },
  {
    slug: "saglik-beden",
    title: "Sağlık & Beden",
    short: "Sağlık",
    summary: "Fiziksel, zihinsel ve duygusal iyi oluş.",
    colorVar: "--area-saglik",
  },
  {
    slug: "kariyer-uretkenlik",
    title: "Kariyer & Üretkenlik",
    short: "Kariyer",
    summary: "Yetenekleri kullanmak, değer üretmek ve katkı sağlamak.",
    colorVar: "--area-kariyer",
  },
  {
    slug: "kisisel-gelisim",
    title: "Kişisel Gelişim & İç Dünya",
    short: "Kişisel Gelişim",
    summary: "Kendini tanımak, farkındalık ve içsel büyüme.",
    colorVar: "--area-gelisim",
  },
  {
    slug: "anlam-degerler",
    title: "Anlam & Değerler",
    short: "Anlam",
    summary: "Kendi değerleri doğrultusunda yaşamına yön verebilmek.",
    colorVar: "--area-anlam",
  },
  {
    slug: "toplum-cevre",
    title: "Toplum & Çevre",
    short: "Toplum",
    summary: "Yaşadığımız dünyayla uyumlu, sorumlu ve anlamlı bir yaşam.",
    colorVar: "--area-toplum",
  },
];
