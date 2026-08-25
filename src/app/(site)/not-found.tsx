import { MoveRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { PageShell } from "@/components/layout/page-shell";

export default function NotFound() {
  return (
    <PageShell
      title="Aradığınız sayfayı bulamadık"
      lead="Bağlantı taşınmış ya da hiç var olmamış olabilir. Ana sayfadan devam edebilirsiniz."
    >
      <ButtonLink href="/" size="lg">
        Ana sayfaya dön
        <MoveRight className="size-[18px]" aria-hidden />
      </ButtonLink>
    </PageShell>
  );
}
