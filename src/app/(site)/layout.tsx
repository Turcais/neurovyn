import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { StructuredData } from "@/components/structured-data";

/** Ziyaretcinin gordugu tum sayfalarin ortak kabugu. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData />
      <a href="#icerik" className="skip-link">
        İçeriğe geç
      </a>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
