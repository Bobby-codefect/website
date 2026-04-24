import React from 'react';
import { homeContent } from "@/data/site-content";

const HeroWave = () => {
  const { badge, titre, description, boutonPrincipal, boutonSecondaire } =
    homeContent.hero;

  return (
    <div className="relative w-full overflow-hidden bg-[var(--color-bg-dark)]">
      {/* 1. Header Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-6 pt-10 pb-0">
        <div className="max-w-3xl animate-[heroFadeUp_0.9s_ease-out_both]">
          <p className="mb-4 inline-flex rounded-full border border-[var(--color-accent-blue)] bg-[var(--color-surface-dark)] px-4 py-2 text-sm font-medium text-[#d7f3ff]">
            {badge}
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
            {titre}
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-[var(--color-border-soft)]">
            {description}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
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

      {/* 2. Le Divider SVG */}
      <div className="relative w-full leading-[0] mt-6">
        <svg
          viewBox="0 0 1440 180"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="fadeOut" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stopColor="white" stopOpacity="1" />
              <stop offset="70%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="lisereMask">
              <rect x="0" y="0" width="1440" height="180" fill="url(#fadeOut)" />
            </mask>
          </defs>

          {/* COUCHE 1 : Bleu profond */}
          <path
            d="M0,90 C900,120 1200,10 1440,0 L1440,20 C1200,30 900,140 0,110 Z"
            fill="#1b364f"
          />

          <g mask="url(#lisereMask)">
            {/* Pétrole */}
            <path
              d="M0,110 C900,140 1200,30 1440,20 L1440,36 C1200,46 900,156 0,126 Z"
              fill="#1e6585"
            />
            {/* Cyan */}
            <path
              d="M0,126 C900,156 1200,46 1440,36 L1440,44 C1200,54 900,164 0,134 Z"
              fill="#eaf7fc"
              fillOpacity="0.4"
            />
            {/* Ligne dorée */}
            <path
              d="M0,117 C900,147 1200,37 1440,27"
              fill="none"
              stroke="#e29e21"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* COUCHE 5 : Blanc */}
          <path
            d="M0,134 C900,164 1200,54 1440,44 L1440,180 L0,180 Z"
            fill="#eaf7fc"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroWave;