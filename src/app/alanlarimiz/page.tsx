import type { Metadata } from "next";
import { ContentPending, PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Değer Ürettiğimiz Alanlar",
  description: "Bireylerden kurumlara kadar yaşamın her alanında değer üretiyoruz.",
};

export default function Page() {
  return (
    <PageShell title="Değer Ürettiğimiz Alanlar" lead="Bireylerden kurumlara kadar yaşamın her alanında değer üretiyoruz.">
      <ContentPending note="Altı çalışma alanının her biri için ayrıntılı tanıtım, kimlere uygun olduğu ve süreç anlatımı bu sayfaya gelecek." />
    </PageShell>
  );
}
