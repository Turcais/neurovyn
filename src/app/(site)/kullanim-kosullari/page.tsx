import type { Metadata } from "next";
import { ContentPending, PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Bu sitenin kullanımına ilişkin koşullar.",
};

export default function Page() {
  return (
    <PageShell title="Kullanım Koşulları" lead="Bu sitenin kullanımına ilişkin koşullar.">
      <ContentPending note="Kullanım koşulları metni hukuki onaydan sonra eklenecek." />
    </PageShell>
  );
}
