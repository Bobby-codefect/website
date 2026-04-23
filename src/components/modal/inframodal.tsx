"use client";

import SlideModal from "@/components/ui/SlideModal";
import { infraContent } from "@/data/modal/Infra-content";

interface InfraModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfraModal({ isOpen, onClose }: InfraModalProps) {
  return (
    <SlideModal isOpen={isOpen} onClose={onClose} animationVariant="infra">
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 overflow-visible"
        // style={{ marginTop: 56 }}
      >
        <svg
          style={{
            position: "absolute",
            top: -64,
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "visible",
            pointerEvents: "none",
            zIndex: 20,
          }}
          width="200"
          height="56"
          viewBox="0 0 200 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <circle id="sig" r="3" fill="#1e6585" />
          </defs>

          <line
            className="infra-cable infra-cable-1"
            x1="100" y1="8"
            x2="30" y2="48"
            stroke="#1e6585"
            strokeWidth="1.5"
            strokeDasharray="60"
            strokeDashoffset="60"
            strokeLinecap="round"
          />
          <line
            className="infra-cable infra-cable-2"
            x1="100" y1="8"
            x2="170" y2="48"
            stroke="#1e6585"
            strokeWidth="1.5"
            strokeDasharray="60"
            strokeDashoffset="60"
            strokeLinecap="round"
          />

          <g className="infra-node-top" style={{ transformOrigin: "100px 8px" }}>
            <rect x="86" y="0" width="28" height="16" rx="4" fill="#1e6585" />
            <rect x="90" y="5" width="8" height="2" rx="1" fill="white" opacity="0.6" />
            <rect x="90" y="9" width="12" height="2" rx="1" fill="white" opacity="0.4" />
            <circle cx="110" cy="8" r="2" fill="#28c840" className="infra-led" />
          </g>

          <g className="infra-node-left" style={{ transformOrigin: "30px 48px" }}>
            <rect x="16" y="40" width="28" height="16" rx="4" fill="#1b364f" />
            <rect x="20" y="45" width="8" height="2" rx="1" fill="white" opacity="0.5" />
            <rect x="20" y="49" width="12" height="2" rx="1" fill="white" opacity="0.3" />
            <circle cx="40" cy="48" r="2" fill="#1e6585" className="infra-led" />
          </g>

          <g className="infra-node-right" style={{ transformOrigin: "170px 48px" }}>
            <rect x="156" y="40" width="28" height="16" rx="4" fill="#1b364f" />
            <rect x="160" y="45" width="8" height="2" rx="1" fill="white" opacity="0.5" />
            <rect x="160" y="49" width="12" height="2" rx="1" fill="white" opacity="0.3" />
            <circle cx="180" cy="48" r="2" fill="#1e6585" className="infra-led" />
          </g>

          <circle className="infra-signal infra-signal-1" r="3" fill="#1e6585">
            <animateMotion dur="0.38s" begin="0.72s" fill="freeze"
              path="M100,8 L30,48" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.8;1"
              dur="0.38s" begin="0.72s" fill="freeze" />
          </circle>
          <circle className="infra-signal infra-signal-2" r="3" fill="#1e6585">
            <animateMotion dur="0.38s" begin="0.78s" fill="freeze"
              path="M100,8 L170,48" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.8;1"
              dur="0.38s" begin="0.78s" fill="freeze" />
          </circle>
        </svg>

        <div
          style={{
            position: "absolute",
            top: -8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 1,
            height: 8,
            background:
              "repeating-linear-gradient(to bottom, #1e658560 0px, #1e658560 3px, transparent 3px, transparent 6px)",
            pointerEvents: "none",
          }}
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors text-2xl leading-none"
          aria-label="Fermer"
        >
          ×
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{infraContent.title}</h2>
          {infraContent.subtitle && (
            <p className="text-sm text-gray-500 mt-1">{infraContent.subtitle}</p>
          )}
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">{infraContent.sections}</p>
      </div>
    </SlideModal>
  );
}