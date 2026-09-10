"use client";

import {
  type FormEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { FiCheck, FiLoader } from "react-icons/fi";

type DemoFormProps = {
  children: ReactNode;
  className?: string;
  successTitle: string;
  successMessage: string;
};

type FormControl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

function validationMessage(control: FormControl) {
  const value = control.value.trim();

  if (control instanceof HTMLInputElement && control.type === "checkbox") {
    return control.dataset.requiredTerms === "true" && !control.checked
      ? "Debes aceptar los términos y la política de privacidad."
      : "";
  }

  if (control.required && !value) return "Completa este campo.";

  if (control.dataset.validation === "name" && value) {
    return /^[\p{L}]+(?:[\s'-][\p{L}]+)*$/u.test(value)
      ? ""
      : "Ingresa únicamente letras en este campo.";
  }

  if (control instanceof HTMLInputElement && control.type === "email" && value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? ""
      : "Ingresa un correo válido que incluya @.";
  }

  return "";
}

export function DemoForm({
  children,
  className,
  successTitle,
  successMessage,
}: DemoFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (status === "idle") return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [status]);

  function validate(form: HTMLFormElement) {
    const controls = form.querySelectorAll<FormControl>("input, textarea, select");
    for (const control of controls) {
      const message = validationMessage(control);
      control.setCustomValidity(message);
      control.setAttribute("aria-invalid", message ? "true" : "false");
      if (message) {
        control.focus();
        control.reportValidity();
        return false;
      }
    }

    return true;
  }

  function handleInput(event: FormEvent<HTMLFormElement>) {
    const control = event.target as FormControl;
    if (!control.matches("input, textarea, select")) return;
    control.setCustomValidity("");
    control.removeAttribute("aria-invalid");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!validate(form)) return;

    setStatus("loading");
    timerRef.current = setTimeout(() => {
      form.reset();
      setStatus("success");
    }, 1400);
  }

  const feedback = status !== "idle" && (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-5 backdrop-blur-md animate-[modal-backdrop-in_400ms_ease-out_both]"
      role="dialog"
      aria-modal="true"
      aria-live="polite"
      aria-busy={status === "loading"}
      aria-label={status === "loading" ? "Enviando formulario" : successTitle}
    >
      {status === "loading" ? (
        <div className="flex min-h-52 w-full max-w-sm flex-col items-center justify-center border border-white/15 bg-white p-10 text-center shadow-2xl animate-[modal-card-in_500ms_cubic-bezier(.22,1,.36,1)_both]">
          <FiLoader className="h-12 w-12 animate-spin text-blue-900" aria-hidden="true" />
          <h2 className="mt-6 text-2xl font-semibold text-slate-950">Enviando…</h2>
          <p className="mt-2 text-slate-500">Un momento, estamos procesando tu solicitud.</p>
        </div>
      ) : (
        <div className="w-full max-w-md border border-slate-200 bg-white p-8 text-center shadow-2xl sm:p-10 animate-[modal-card-in_650ms_cubic-bezier(.22,1,.36,1)_both]">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-blue-50 text-3xl text-blue-900">
            <FiCheck aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950">{successTitle}</h2>
          <p className="mx-auto mt-4 max-w-sm leading-7 text-slate-500">{successMessage}</p>
          <button
            type="button"
            autoFocus
            className="button-primary mt-7 w-full"
            onClick={() => setStatus("idle")}
          >
            Aceptar
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      <form
        ref={formRef}
        className={className}
        noValidate
        onInput={handleInput}
        onChange={handleInput}
        onSubmit={handleSubmit}
      >
        {children}
      </form>
      {feedback && typeof document !== "undefined"
        ? createPortal(feedback, document.body)
        : null}
    </>
  );
}
