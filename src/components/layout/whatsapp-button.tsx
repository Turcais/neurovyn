import { contact, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2.1 22l5.34-1.4a9.83 9.83 0 0 0 4.6 1.17h.01c5.43 0 9.85-4.42 9.85-9.86A9.79 9.79 0 0 0 19 4.89 9.79 9.79 0 0 0 12.04 2Zm0 18.02h-.01a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2a8.15 8.15 0 0 1 8.19 8.2c0 4.52-3.68 8.2-8.19 8.2Z" />
    </svg>
  );
}

/**
 * Sabit WhatsApp butonu.
 * Mobilde kucuk, masaustunde etiketli. Yeni sekmede acilir.
 */
export function WhatsAppButton({ className }: { className?: string }) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp'tan yazın: ${contact.phone}`}
      className={cn(
        "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full",
        "bg-[#25D366] px-4 py-3.5 text-[14px] font-semibold text-[#04301a] shadow-lg shadow-black/20",
        "transition-transform hover:scale-105 sm:bottom-7 sm:right-7",
        className,
      )}
    >
      <WhatsAppIcon className="size-6 shrink-0" />
      <span className="hidden sm:inline">WhatsApp&apos;tan yazın</span>
    </a>
  );
}

/** Sayfa icinde kullanilan satir ici WhatsApp baglantisi. */
export function WhatsAppLink({ className }: { className?: string }) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3",
        "text-[14px] font-semibold text-[#04301a] transition-opacity hover:opacity-90",
        className,
      )}
    >
      <WhatsAppIcon className="size-[18px] shrink-0" />
      WhatsApp&apos;tan yazın
    </a>
  );
}
