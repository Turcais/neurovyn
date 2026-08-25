import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { WhatWeDo } from "@/components/home/what-we-do";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <TrustBar />
    </>
  );
}
