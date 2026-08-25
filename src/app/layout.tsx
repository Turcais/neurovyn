import type { Metadata, Viewport } from "next";
import { Inter, Lora, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";
import "./globals.css";

/* Turkce karakterler icin latin-ext sart: ğ ş ı İ ö ü ç */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  keywords: [
    "Nöroyaşam Tasarımı",
    "nöroçeşitlilik",
    "yaşam tasarımı",
    "bütüncül gelişim",
    "eğitim danışmanlığı",
    "yaşam ekosistemi",
    "Neurovyn",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#080b1a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.lang} suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} ${lora.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a href="#icerik" className="skip-link">
            İçeriğe geç
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
