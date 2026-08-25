import { MessageCircle, MoveRight } from "lucide-react";
import { BrandTreeImage } from "@/components/brand/tree-image";
import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { ctaNav, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero-wash">
      <div className="mx-auto grid max-w-[86rem] items-center gap-10 px-6 pb-14 pt-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pb-20 lg:pt-14">
        <div>
          <Logo size="lg" asLink={false} />

          <p className="mt-4 font-display text-[13px] font-bold uppercase tracking-[0.13em] sm:text-sm">
            <span className="text-ink">{site.sloganLead}</span>
            <span className="mx-2 text-accent" aria-hidden>
              •
            </span>
            <span className="text-secondary">{site.sloganTail}</span>
          </p>

          <hr className="mt-7 h-1 w-14 rounded-full border-0 bg-accent" />

          <h1 className="mt-7 font-display text-[32px] font-bold leading-[1.22] tracking-tight sm:text-[40px]">
            İnsanı anlamak,
            <br />
            yaşamı birlikte tasarlamanın
            <br />
            ilk adımıdır.
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-fg-muted">
            Her bireyin kendine özgü bir gelişim yolu vardır. Neurovyn; bilimsel bilgiyle yaşamı
            buluşturur, güçlü yönleri görünür kılar, potansiyeli ortaya çıkarır ve daha bilinçli,
            dengeli bir yaşam tasarlamanıza rehberlik eder.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="/yaklasimimiz" size="lg">
              Neurovyn&apos;i Keşfet
              <MoveRight className="size-[18px]" aria-hidden />
            </ButtonLink>
            <ButtonLink href={ctaNav.href} variant="outline" size="lg">
              <MessageCircle className="size-[18px] text-primary" aria-hidden />
              {ctaNav.label}
            </ButtonLink>
          </div>
        </div>

        <BrandTreeImage priority className="mx-auto w-full max-w-[30rem] lg:max-w-none" />
      </div>
    </section>
  );
}
