import type { Metadata, Viewport } from "next";
import { isSanityConfigured } from "@/sanity/env";
import { StudioOrSetup } from "./studio";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Yönetim Paneli",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export default function StudioPage() {
  return <StudioOrSetup configured={isSanityConfigured} />;
}
