import type { Metadata } from "next";
import { ContentPending, PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Kişisel verilerinizi nasıl işlediğimize dair açıklama.",
};

export default function Page() {
  return (
    <PageShell title="Gizlilik Politikası" lead="Kişisel verilerinizi nasıl işlediğimize dair açıklama.">
      <ContentPending note="KVKK aydınlatma metni ve çerez politikası hukuki onaydan sonra eklenecek." />
    </PageShell>
  );
}
