import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPending, PageShell } from "@/components/layout/page-shell";
import { valueAreas } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return valueAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = valueAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return { title: area.title };
}

export default async function ValueAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = valueAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  return (
    <PageShell title={area.title}>
      <ContentPending
        note={`"${area.title}" alanının ayrıntılı tanıtımı, kimlere uygun olduğu ve süreç anlatımı bu sayfaya gelecek.`}
      />
    </PageShell>
  );
}
