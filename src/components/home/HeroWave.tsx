import React from "react";
import { homeContent } from "@/data/site-content";

const HeroWave = () => {
  const { badge, titre, description, boutonPrincipal, boutonSecondaire } =
      homeContent.hero;

  return (
      <div className="w-full bg-[var(--color-bg-light)]">
        <section className="bg-[var(--color-bg-dark)]">
          <div className="mx-auto flex max-w-7xl items-center px-6 pt-10 pb-0">
            <div className="max-w-2xl animate-[heroFadeUp_0.9s_ease-out_both]">
              <p className="mb-3 inline-flex rounded-full border border-[var(--color-accent-blue)] bg-[var(--color-surface-dark)] px-4 py-2 text-sm font-medium text-[#d7f3ff]">
                {badge}
              </p>

              <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
                {titre}
              </h1>

              <p className="mb-6 max-w-2xl text-lg leading-8 text-[var(--color-border-soft)]">
                {description}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                    href="/contact"
                    className="rounded-md bg-[var(--color-accent-gold-strong)] px-6 py-3 text-center font-semibold text-[var(--color-bg-dark)] transition hover:bg-[var(--color-accent-gold)]"
                >
                  {boutonPrincipal}
                </a>

                <a
                    href="/services"
                    className="rounded-md border border-[var(--color-border-soft)] px-6 py-3 text-center font-semibold text-white transition hover:bg-[var(--color-surface-dark)]"
                >
                  {boutonSecondaire}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full overflow-hidden leading-[0] bg-[var(--color-bg-light)]">
          <svg
              viewBox="0 0 1800 600"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="relative -top-px block h-auto w-full"
              aria-hidden="true"
          >
            <path
                fill="#be8620"
                d="M 0,85 C 300,350 1300,0 1800,0 L 1800,0 L 0,0 Z"
                strokeWidth="0"
            />
            <path
                fill="#b8c2cf"
                d="M 0,75 C 300,350 1300,0 1800,0 L 1800,0 L 0,0 Z"
                strokeWidth="0"
            />
            <path
                fill="#1e6585"
                d="M 0,50 C 300,350 1300,0 1800,0 L 1800,0 L 0,0 Z"
                strokeWidth="0"
            />
            <path
                fill="#17202a"
                d="M 0,0 C 300,350 1300,0 1800,0 L 1800,0 L 0,0 Z"
                strokeWidth="0"
            />
          </svg>
        </div>
      </div>
  );
};

export default HeroWave;