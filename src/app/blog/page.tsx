import type { Metadata } from "next";
import { ContentPending, PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Blog",
  description: "Yazılar, notlar ve bilimden yaşama taşıdıklarımız.",
};

export default function Page() {
  return (
    <PageShell title="Blog" lead="Yazılar, notlar ve bilimden yaşama taşıdıklarımız.">
      <ContentPending note="Blog yazıları Sanity CMS'e bağlandığında bu sayfada listelenecek." />
    </PageShell>
  );
}
