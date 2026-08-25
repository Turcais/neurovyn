"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendContactMessage, type ContactState } from "./actions";
import { cn } from "@/lib/utils";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "w-full rounded-xl border bg-surface px-4 py-3 text-[15px] text-fg placeholder:text-fg-faint " +
  "transition-colors focus:border-primary";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending}>
      {pending ? "Gönderiliyor…" : "Mesajı Gönder"}
      <Send className="size-[17px]" aria-hidden />
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const errors = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Sonuç bildirimi — ekran okuyucular da duysun */}
      <div aria-live="polite">
        {state.status !== "idle" && state.message && (
          <p
            className={cn(
              "flex items-start gap-2.5 rounded-xl border px-4 py-3.5 text-[14px] leading-relaxed",
              state.status === "success"
                ? "border-secondary/40 bg-secondary-soft text-secondary"
                : "border-area-saglik/40 bg-surface text-area-saglik",
            )}
          >
            {state.status === "success" ? (
              <CheckCircle2 className="mt-0.5 size-[18px] shrink-0" aria-hidden />
            ) : (
              <AlertCircle className="mt-0.5 size-[18px] shrink-0" aria-hidden />
            )}
            {state.message}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-[13.5px] font-semibold text-ink">
            Ad Soyad <span className="text-area-saglik">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(fieldClass, "mt-2", errors.name ? "border-area-saglik" : "border-border")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-[13px] text-area-saglik">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-[13.5px] font-semibold text-ink">
            E-posta <span className="text-area-saglik">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(fieldClass, "mt-2", errors.email ? "border-area-saglik" : "border-border")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-[13px] text-area-saglik">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-[13.5px] font-semibold text-ink">
          Konu
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className={cn(fieldClass, "mt-2 border-border")}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[13.5px] font-semibold text-ink">
          Mesajınız <span className="text-area-saglik">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          required
          minLength={20}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className={cn(fieldClass, "mt-2 resize-y", errors.message ? "border-area-saglik" : "border-border")}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-[13px] text-area-saglik">
            {errors.message}
          </p>
        ) : (
          <p id="message-hint" className="mt-1.5 text-[13px] text-fg-faint">
            En az 20 karakter. Size nasıl yardımcı olabileceğimizi kısaca anlatın.
          </p>
        )}
      </div>

      {/* Bot tuzagi — gorunmez, ekran okuyuculardan da gizli */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="website">Bu alanı boş bırakın</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="pt-2">
        <SubmitButton />
      </div>

      <p className="text-[12.5px] leading-relaxed text-fg-faint">
        Gönderdiğiniz bilgiler yalnızca talebinize dönüş yapmak için kullanılır, üçüncü taraflarla
        paylaşılmaz.
      </p>
    </form>
  );
}
