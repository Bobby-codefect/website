"use client";

import SlideModal from "@/components/ui/SlideModal";
import { devContent } from "@/data/modal/Dev-content";

interface DevModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DevModal({ isOpen, onClose }: DevModalProps) {
  return (
    <SlideModal isOpen={isOpen} onClose={onClose} animationVariant="dev">
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 overflow-visible"
        style={{ marginTop: 56 }}
      >
        <svg
          style={{
            position: "absolute",
            top: -60,
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "visible",
            pointerEvents: "none",
            zIndex: 20,
          }}
          width="240"
          height="52"
          viewBox="0 0 240 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="240" height="52" rx="8" fill="#17202a" />

          <rect x="0" y="0" width="240" height="18" rx="8" fill="#1b2a38" />
          <rect x="0" y="10" width="240" height="8" fill="#1b2a38" />

          <circle cx="16" cy="9" r="4" fill="#ff5f57" />
          <circle cx="29" cy="9" r="4" fill="#febc2e" />
          <circle cx="42" cy="9" r="4" fill="#28c840" />

          <text x="12" y="33" fontFamily="monospace" fontSize="10" fill="#28c840">❯</text>
          <rect className="dev-tline-1" x="24" y="26" width="0" height="8" rx="2" fill="#1e6585" />

          <text x="12" y="46" fontFamily="monospace" fontSize="10" fill="#28c840" opacity="0.5">❯</text>
          <rect className="dev-tline-2" x="24" y="39" width="0" height="6" rx="2" fill="#1e658555" />

          <rect className="dev-cursor-block" x="24" y="26" width="6" height="9" rx="1" fill="#1e6585" />
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
          <div className="relative pb-2 mb-1">
            <h2 className="text-2xl font-bold text-gray-900">{devContent.title}</h2>
            <span
              className="dev-title-underline"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: 2,
                width: 0,
                background: "#1e6585",
                borderRadius: 1,
                display: "block",
              }}
            />
          </div>
          {devContent.subtitle && (
            <p className="text-sm text-gray-500 mt-1">{devContent.subtitle}</p>
          )}
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">{devContent.sections}</p>
      </div>
    </SlideModal>
  );
}