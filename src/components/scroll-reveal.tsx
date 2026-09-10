"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  "main h1",
  "main h2",
  "main h3",
  "main p",
  "main span",
  "main img",
  "main article",
  "main form",
  "main section:first-of-type a",
  "main section:first-of-type button",
  "footer h2",
  "footer p",
  "footer form",
].join(",");

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" },
    );

    let observeFrame = 0;
    const prepareFrame = window.requestAnimationFrame(() => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(revealSelector),
      ).filter((element) => {
        const firstSection = document.querySelector("main > section:first-child");
        if (firstSection?.contains(element)) return false;
        if (element.tagName === "IMG" && pathname !== "/acerca") return false;
        if (element.closest("[data-no-reveal]")) return false;
        if (element.tagName === "SPAN" && !element.textContent?.trim()) {
          return false;
        }
        if (
          element.tagName !== "ARTICLE" &&
          element.tagName !== "IMG" &&
          element.closest("article")
        ) {
          return false;
        }
        if (element.tagName !== "FORM" && element.closest("form")) return false;
        return true;
      });

      elements.forEach((element, index) => {
        const directions = ["up", "left", "up", "right"];
        const direction =
          element.tagName === "IMG"
            ? "up"
            : element.tagName === "ARTICLE"
            ? directions[index % directions.length]
            : element.tagName === "P"
              ? "fade"
              : "up";

        element.classList.add("scroll-reveal");
        element.dataset.reveal = direction;
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(index % 4, 3) * 120}ms`,
        );
      });

      observeFrame = window.requestAnimationFrame(() => {
        elements.forEach((element) => observer.observe(element));
      });
    });

    return () => {
      window.cancelAnimationFrame(prepareFrame);
      window.cancelAnimationFrame(observeFrame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
