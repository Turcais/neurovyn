import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "next-sanity";
import { urlForImage } from "@/sanity/client";
import type { SanityImage } from "@/sanity/blog";

/** Panelden gelen zengin metnin site tipografisine gore gorunumu. */
export const richTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-5 text-[16px] leading-[1.9] text-fg-muted">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 font-display text-[24px] font-bold leading-snug">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-9 font-display text-[19px] font-bold leading-snug">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-[3px] border-accent pl-6 font-serif text-[19px] italic leading-[1.7] text-ink">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-[16px] leading-[1.85] text-fg-muted">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-[16px] leading-[1.85] text-fg-muted">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="font-medium text-primary underline underline-offset-2"
        {...(value?.href?.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: SanityImage }) => {
      const url = urlForImage(value)?.width(1200).url();
      if (!url) return null;
      return (
        <Image
          src={url}
          alt={value.alt ?? ""}
          width={1200}
          height={800}
          sizes="(min-width: 768px) 68ch, 90vw"
          className="my-8 h-auto w-full rounded-2xl border border-border"
        />
      );
    },
  },
};

export function RichText({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={richTextComponents} />;
}
