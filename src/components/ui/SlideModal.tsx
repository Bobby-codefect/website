"use client";

import { useEffect, ReactNode } from "react";

type AnimationVariant = "cyber" | "dev" | "infra" | "auto";

interface SlideModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  animationVariant?: AnimationVariant;
}

const overlayClass: Record<AnimationVariant, string> = {
  cyber: "animate-fadeInOverlay",
  dev:   "animate-fadeInOverlay-dev",
  infra: "animate-fadeInOverlay-infra",
  auto:  "animate-fadeInOverlay-auto",
};

const modalClass: Record<AnimationVariant, string> = {
  cyber: "animate-fadeInModal",
  dev:   "animate-fadeInModal-dev",
  infra: "animate-fadeInModal-infra",
  auto:  "animate-fadeInModal-auto",
};

export default function SlideModal({
  isOpen,
  onClose,
  children,
  animationVariant = "cyber",
}: SlideModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`${overlayClass[animationVariant]} fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm`}
      onClick={onClose}
    >
      <div
        className={modalClass[animationVariant]}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}