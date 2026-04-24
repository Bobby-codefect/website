"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import type { CategorieService } from "@/data/services";

type ServiceFeatureSectionProps = {
  categorie: CategorieService;
  imageSrc: string;
  imageAlt: string;
  imageLeft?: boolean;
  description?: string;
};

function InfraBorder({
  W,
  H,
  animKey,
}: {
  W: number;
  H: number;
  animKey: number;
}) {
  if (!W || !H) return null;
  const r = 16;
  const segLen = W / 2 + (Math.PI * r) / 2 + 20;
  const segments = [
    { d: `M 0 ${r} Q 0 0 ${r} 0 L ${W / 2} 0`, delay: "0s" },
    { d: `M ${W} ${r} Q ${W} 0 ${W - r} 0 L ${W / 2} 0`, delay: "0s" },
    { d: `M 0 ${H - r} Q 0 ${H} ${r} ${H} L ${W / 2} ${H}`, delay: "0.15s" },
    {
      d: `M ${W} ${H - r} Q ${W} ${H} ${W - r} ${H} L ${W / 2} ${H}`,
      delay: "0.15s",
    },
  ];
  return (
    <svg
      key={`infra-border-${animKey}`}
      className="pointer-events-none absolute inset-0"
      width={W}
      height={H}
      style={{ zIndex: 10, overflow: "visible" }}
    >
      <defs>
        <linearGradient id="infraGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e6585" />
          <stop offset="100%" stopColor="#4db8e8" />
        </linearGradient>
        <linearGradient id="infraGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#1e6585" />
          <stop offset="100%" stopColor="#4db8e8" />
        </linearGradient>
      </defs>
      {segments.map((seg, i) => (
        <path
          key={i}
          d={seg.d}
          fill="none"
          stroke={i % 2 === 0 ? "url(#infraGrad1)" : "url(#infraGrad2)"}
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: segLen,
            strokeDashoffset: segLen,
            animation: `infraSegDraw 0.8s ease-in-out ${seg.delay} forwards`,
            filter: "drop-shadow(0 0 5px rgba(30,101,133,0.8))",
          }}
        />
      ))}
    </svg>
  );
}

function InfraIcon({ animKey }: { animKey: number }) {
  return (
    <div
      key={`infra-icon-${animKey}`}
      className="infra-icon-fixed animate-infra-icon-delayed"
      style={{ zIndex: 20 }}
    >
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        style={{ filter: "drop-shadow(0 0 10px rgba(30,101,133,0.9))" }}
      >
        <circle cx="23" cy="23" r="22" fill="#1e6585" />
        <rect
          x="11"
          y="12"
          width="24"
          height="7"
          rx="2"
          fill="white"
          opacity="0.95"
        />
        <circle cx="30" cy="15.5" r="1.5" fill="#4db8e8" />
        <rect x="13" y="14" width="8" height="1.5" rx="0.75" fill="#a9bfce" />
        <rect
          x="11"
          y="22"
          width="24"
          height="7"
          rx="2"
          fill="white"
          opacity="0.95"
        />
        <circle cx="30" cy="25.5" r="1.5" fill="#4db8e8" />
        <rect x="13" y="24" width="8" height="1.5" rx="0.75" fill="#a9bfce" />
        <circle cx="23" cy="36" r="2" fill="white" opacity="0.8" />
        <line
          x1="23"
          y1="29"
          x2="23"
          y2="34"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <line
          x1="16"
          y1="36"
          x2="30"
          y2="36"
          stroke="white"
          strokeWidth="1.2"
          opacity="0.5"
        />
        <circle cx="16" cy="36" r="1.5" fill="white" opacity="0.7" />
        <circle cx="30" cy="36" r="1.5" fill="white" opacity="0.7" />
      </svg>
    </div>
  );
}

function AuditBorder({
  W,
  H,
  animKey,
}: {
  W: number;
  H: number;
  animKey: number;
}) {
  if (!W || !H) return null;
  const r = 16;
  const half = W / 2 + H + (Math.PI * r) / 2 + 20;

  const leftPath = `M ${W / 2} 0  L ${r} 0  Q 0 0 0 ${r}  L 0 ${H - r}  Q 0 ${H} ${r} ${H}  L ${W / 2} ${H}`;
  const rightPath = `M ${W / 2} 0  L ${W - r} 0  Q ${W} 0 ${W} ${r}  L ${W} ${H - r}  Q ${W} ${H} ${W - r} ${H}  L ${W / 2} ${H}`;

  return (
    <svg
      key={`audit-border-${animKey}`}
      className="pointer-events-none absolute inset-0"
      width={W}
      height={H}
      style={{ zIndex: 10, overflow: "visible" }}
    >
      <defs>
        <linearGradient id="auditGradL" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        <linearGradient id="auditGradR" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>

      {/* Trait gauche */}
      <path
        d={leftPath}
        fill="none"
        stroke="url(#auditGradL)"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{
          strokeDasharray: half,
          strokeDashoffset: half,
          animation: `auditHalfDraw 1.4s ease-in-out 0s forwards`,
          filter: "drop-shadow(0 0 5px rgba(74,222,128,0.75))",
        }}
      />

      <path
        d={rightPath}
        fill="none"
        stroke="url(#auditGradR)"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{
          strokeDasharray: half,
          strokeDashoffset: half,
          animation: `auditHalfDraw 1.4s ease-in-out 0.08s forwards`,
          filter: "drop-shadow(0 0 5px rgba(74,222,128,0.75))",
        }}
      />
    </svg>
  );
}

function AuditCheckIcon({ animKey }: { animKey: number }) {
  return (
    <div
      key={`audit-icon-${animKey}`}
      className="audit-icon-fixed animate-audit-icon-delayed"
      style={{ zIndex: 20 }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        style={{ filter: "drop-shadow(0 0 10px rgba(226,158,33,0.9))" }}
      >
        <circle cx="24" cy="24" r="23" fill="#e29e21" />
        <path
          d="M 13 25 L 21 33 L 36 16"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{
            strokeDasharray: 40,
            strokeDashoffset: 40,
            animation: `drawCheck 0.4s ease-out 0.15s forwards`,
          }}
        />
      </svg>
    </div>
  );
}

export default function ServiceFeatureSection({
  categorie,
  imageSrc,
  imageAlt,
  imageLeft = false,
  description,
}: ServiceFeatureSectionProps) {
  const [isLocked, setIsLocked] = useState(false);
  const [cyberKey, setCyberKey] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [infraKey, setInfraKey] = useState(0);
  const [isValidated, setIsValidated] = useState(false);
  const [auditKey, setAuditKey] = useState(0);

  const boxRef = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState({ width: 0, height: 0 });

  const isCyber = categorie.id === 2;
  const isInfra = categorie.id === 1;
  const isAudit = categorie.id === 3;

  useEffect(() => {
    if (!boxRef.current) return;
    const obs = new ResizeObserver(() => {
      if (boxRef.current)
        setRect({
          width: boxRef.current.offsetWidth,
          height: boxRef.current.offsetHeight,
        });
    });
    obs.observe(boxRef.current);
    return () => obs.disconnect();
  }, []);

  const handleClick = () => {
    if (isCyber)
      setIsLocked((p) => {
        if (!p) setCyberKey((k) => k + 1);
        return !p;
      });
    if (isInfra)
      setIsConnected((p) => {
        if (!p) setInfraKey((k) => k + 1);
        return !p;
      });
    if (isAudit)
      setIsValidated((p) => {
        if (!p) setAuditKey((k) => k + 1);
        return !p;
      });
  };

  const r = 16;
  const W = rect.width;
  const H = rect.height;
  const cyberPerimeter = W && H ? 2 * (W + H) - 8 * r + 2 * Math.PI * r : 0;

  return (
    <section className="relative overflow-visible bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-6 px-6 py-16 md:gap-8 md:py-20 ${
          imageLeft ? "lg:grid-cols-[1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1fr]"
        }`}
      >
        <div
          ref={boxRef}
          className={`relative p-10 ${imageLeft ? "lg:order-2" : ""}`}
        >
          {/* Infra */}
          {isInfra && isConnected && (
            <InfraBorder W={W} H={H} animKey={infraKey} />
          )}
          {isInfra && isConnected && <InfraIcon animKey={infraKey} />}

          {/* Cyber */}
          {isCyber && isLocked && W > 0 && H > 0 && (
            <svg
              key={`border-${cyberKey}`}
              className="pointer-events-none absolute inset-0"
              width={W}
              height={H}
              style={{ zIndex: 10, overflow: "visible" }}
            >
              <defs>
                <linearGradient
                  id="cyberGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#ff0000" />
                  <stop offset="50%" stopColor="#ff6060" />
                  <stop offset="100%" stopColor="#ff0000" />
                </linearGradient>
              </defs>
              <path
                d={`M ${W / 2} 0 L ${W - r} 0 Q ${W} 0 ${W} ${r}
                                    L ${W} ${H - r} Q ${W} ${H} ${W - r} ${H}
                                    L ${r} ${H} Q 0 ${H} 0 ${H - r}
                                    L 0 ${r} Q 0 0 ${r} 0 L ${W / 2} 0`}
                fill="none"
                stroke="url(#cyberGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{
                  strokeDasharray: cyberPerimeter,
                  strokeDashoffset: cyberPerimeter,
                  animation: `drawBorderFull 2s ease-in-out forwards`,
                  filter: "drop-shadow(0 0 6px rgba(255,0,0,0.7))",
                }}
              />
            </svg>
          )}
          {isCyber && isLocked && (
            <div
              key={`lock-${cyberKey}`}
              className="cyber-lock-fixed animate-lock-delayed"
              style={{ zIndex: 20 }}
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 36 36"
                fill="none"
                style={{ filter: "drop-shadow(0 0 12px rgba(255,0,0,0.9))" }}
              >
                <rect
                  x="5"
                  y="16"
                  width="26"
                  height="18"
                  rx="4"
                  fill="#ff0000"
                />
                <path
                  d="M 11 17 L 11 11 Q 11 3 18 3 Q 25 3 25 11 L 25 17"
                  stroke="#cc0000"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="18" cy="25" r="3" fill="white" />
              </svg>
            </div>
          )}

          {/* Audit */}
          {isAudit && isValidated && (
            <AuditBorder W={W} H={H} animKey={auditKey} />
          )}
          {isAudit && isValidated && <AuditCheckIcon animKey={auditKey} />}

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
            Services
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
            {categorie.titre}
          </h2>
          <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />
          {description && (
            <p className="mb-8 max-w-3xl text-lg leading-8 text-[var(--color-text-soft)]">
              {description}
            </p>
          )}
          <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
            {categorie.blocs.map((bloc) => (
              <div key={bloc.titre} className="flex items-start gap-3">
                <span className="mt-1 text-xl leading-none text-green-500">
                  ✓
                </span>
                <h3 className="text-lg leading-8 text-[var(--color-text-soft)]">
                  {bloc.titre}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`flex justify-center ${imageLeft ? "lg:justify-start" : "lg:justify-end"}`}
        >
          <div
            className="group relative flex h-[220px] w-[320px] cursor-pointer items-center justify-center transition-transform active:scale-95"
            onClick={handleClick}
          >
            {isInfra && (
              <div className="absolute inset-0 rounded-full bg-[#1e6585]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
            {isCyber && (
              <div className="absolute inset-0 rounded-full bg-red-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
            {isAudit && (
              <div className="absolute inset-0 rounded-full bg-green-500/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}

            <Image
              src={imageSrc}
              alt={imageAlt}
              width={320}
              height={220}
              className={`relative h-auto max-h-[220px] w-auto max-w-[320px] transition-all duration-500
                                ${isLocked && isCyber ? "brightness-125 drop-shadow-[0_0_25px_rgba(255,0,0,0.7)] scale-105" : ""}
                                ${isConnected && isInfra ? "drop-shadow-[0_0_20px_rgba(30,101,133,0.55)] scale-105" : ""}
                                ${isValidated && isAudit ? "drop-shadow-[0_0_20px_rgba(22,163,74,0.5)] scale-105 brightness-110" : ""}
                            `}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
