"use client";

import SlideModal from "@/components/ui/SlideModal";
import { cybersecurityContent } from "@/data/modal/CyberSecurity-content";

interface CyberSecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CyberSecurityModal({ isOpen, onClose }: CyberSecurityModalProps) {
  return (
    <SlideModal isOpen={isOpen} onClose={onClose}>
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 overflow-visible"
        style={{ marginTop: 28 }}
      >
        <svg
          style={{
            position: "absolute",
            top: -3,
            left: -3,
            width: "calc(100% + 6px)",
            height: "calc(100% + 6px)",
            pointerEvents: "none",
            overflow: "visible",
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="redGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ff1111" />
              <stop offset="50%" stopColor="#ff5555" />
              <stop offset="100%" stopColor="#ff1111" />
            </linearGradient>
          </defs>
          <rect
            className="cyber-border-rect"
            x="1"
            y="1"
            width="98"
            height="98"
            rx="5"
            ry="5"
          />
        </svg>

        <div className="cyber-lock-wrap">
          <svg
            className="cyber-lock-icon"
            width="44"
            height="44"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="lockGrad"
                x1="5"
                y1="16"
                x2="31"
                y2="34"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ff3333" />
                <stop offset="1" stopColor="#aa0000" />
              </linearGradient>
            </defs>
            <rect x="5" y="16" width="26" height="18" rx="4" fill="url(#lockGrad)" />
            <g className="cyber-shackle">
              <path
                d="M 11 17 L 11 11 Q 11 3 18 3 Q 25 3 25 11 L 25 17"
                stroke="#cc1111"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                style={{ filter: "drop-shadow(0 0 4px #ff2200aa)" }}
              />
            </g>
            <circle cx="18" cy="25" r="3" fill="white" opacity={0.9} />
            <rect x="16.5" y="25" width="3" height="5" rx="1.5" fill="white" opacity={0.9} />
          </svg>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors text-2xl leading-none"
          aria-label="Fermer"
        >
          ×
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{cybersecurityContent.title}</h2>
          {cybersecurityContent.subtitle && (
            <p className="text-sm text-gray-500 mt-1">{cybersecurityContent.subtitle}</p>
          )}
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">{cybersecurityContent.sections}</p>
      </div>
    </SlideModal>
  );
}