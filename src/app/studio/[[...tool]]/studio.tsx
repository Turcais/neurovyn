"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

/**
 * Yonetim paneli. Sanity proje kimligi tanimli degilse panel yerine
 * ne yapilmasi gerektigini anlatan bir ekran gosterilir.
 */
export function StudioOrSetup({ configured }: { configured: boolean }) {
  if (!configured) {
    return (
      <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center gap-5 px-6 py-16">
        <h1 className="font-display text-2xl font-bold">Yönetim paneli henüz bağlı değil</h1>
        <p className="text-[15px] leading-[1.8] text-fg-muted">
          Paneli açabilmek için Sanity proje kimliğinin tanımlanması gerekiyor. Kurulum adımları
          projedeki <code className="rounded bg-bg-subtle px-1.5 py-0.5">docs/kurulum.md</code>{" "}
          dosyasında anlatılıyor.
        </p>
        <p className="text-[14px] leading-[1.8] text-fg-faint">
          Kısaca: sanity.io üzerinden ücretsiz bir proje açın, proje kimliğini{" "}
          <code className="rounded bg-bg-subtle px-1.5 py-0.5">NEXT_PUBLIC_SANITY_PROJECT_ID</code>{" "}
          değişkenine yazın ve sunucuyu yeniden başlatın.
        </p>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
