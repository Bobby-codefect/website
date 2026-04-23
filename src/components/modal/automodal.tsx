"use client";

import SlideModal from "@/components/ui/SlideModal";
import { autoContent } from "@/data/modal/Automation-content";

interface AutoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/* SVG path d'un engrenage à N dents centré en 0,0 */
function gearPath(r: number, teeth: number, toothH: number, toothW: number): string {
  const inner = r;
  const outer = r + toothH;
  const pts: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * Math.PI * 2;
    const a1 = a0 + (Math.PI / teeth) * (1 - toothW);
    const a2 = a0 + (Math.PI / teeth) * (1 + toothW);
    const a3 = a0 + (Math.PI / teeth) * 2;
    pts.push(`L${(inner * Math.cos(a0)).toFixed(2)},${(inner * Math.sin(a0)).toFixed(2)}`);
    pts.push(`L${(outer * Math.cos(a1)).toFixed(2)},${(outer * Math.sin(a1)).toFixed(2)}`);
    pts.push(`L${(outer * Math.cos(a2)).toFixed(2)},${(outer * Math.sin(a2)).toFixed(2)}`);
    pts.push(`L${(inner * Math.cos(a3)).toFixed(2)},${(inner * Math.sin(a3)).toFixed(2)}`);
  }
  return "M" + pts.join(" ").slice(1) + " Z";
}

export default function AutoModal({ isOpen, onClose }: AutoModalProps) {
  const bigGear   = gearPath(13, 10, 5, 0.6);
  const smallGear = gearPath(8,  7,  4, 0.6);

  return (
    <SlideModal isOpen={isOpen} onClose={onClose} animationVariant="auto">
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 overflow-visible"
        style={{ marginTop: 56 }}
      >
        {/* Engrenages flottants au-dessus */}
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
          width="120"
          height="52"
          viewBox="-60 -4 120 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(0, 20)" className="auto-gear-wrap">
            <g className="auto-gear-main">
              <path d={bigGear} fill="#1e6585" opacity="0.9" />
              <circle r="5" fill="white" />
              <circle r="2" fill="#1e658580" />
            </g>
          </g>

          <g transform="translate(-26, 28)" className="auto-gear-wrap">
            <g className="auto-gear-left">
              <path d={smallGear} fill="#1b364f" opacity="0.85" />
              <circle r="3" fill="white" />
              <circle r="1.2" fill="#1b364f50" />
            </g>
          </g>

          <g transform="translate(26, 28)" className="auto-gear-wrap">
            <g className="auto-gear-right">
              <path d={smallGear} fill="#1b364f" opacity="0.85" />
              <circle r="3" fill="white" />
              <circle r="1.2" fill="#1b364f50" />
            </g>
          </g>
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
          <h2 className="text-2xl font-bold text-gray-900">{autoContent.title}</h2>
          {autoContent.subtitle && (
            <p className="text-sm text-gray-500 mt-1">{autoContent.subtitle}</p>
          )}
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">{autoContent.sections}</p>

        <div className="flex justify-end mt-5">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
            <polyline
              className="auto-check-path"
              points="2,10 9,17 26,2"
              stroke="#1e6585"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </SlideModal>
  );
}