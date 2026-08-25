import type { Metadata } from "next";
import { ContentPending, PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Bize Ulaşın",
  description: "Sorularınız, iş birlikleri ve görüşme talepleriniz için bize yazın.",
};

export default function Page() {
  return (
    <PageShell title="Bize Ulaşın" lead="Sorularınız, iş birlikleri ve görüşme talepleriniz için bize yazın.">
      <ContentPending note="İletişim formu, harita ve çalışma saatleri bu sayfaya eklenecek." />
    </PageShell>
  );
}
