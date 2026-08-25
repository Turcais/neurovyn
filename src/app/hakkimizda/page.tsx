import type { Metadata } from "next";
import { ContentPending, PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Bazı fikirler bir günde doğmaz. Onlar; yıllar boyunca biriken gözlemlerin, soruların, deneyimlerin ve anlam arayışının doğal sonucudur.",
};

export default function Page() {
  return (
    <PageShell title="Hakkımızda" lead="Bazı fikirler bir günde doğmaz. Onlar; yıllar boyunca biriken gözlemlerin, soruların, deneyimlerin ve anlam arayışının doğal sonucudur.">
      <ContentPending note="Kurucu Ebru Şahin Mercimek'in yazısı, Neurovyn'in doğuşu ve kurucu fotoğrafı bu sayfaya yerleştirilecek." />
    </PageShell>
  );
}
