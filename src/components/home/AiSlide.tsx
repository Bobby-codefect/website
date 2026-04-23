"use client";

import Image from "next/image";
import { useState } from "react";
import CyberSecurityModal from "@/components/modal/cybersecuritymodal";
import DevModal from "@/components/modal/devmodal";
import InfraModal from "@/components/modal/inframodal";
import AutoModal from "@/components/modal/automodal";

export default function AISlide() {
  const [isCyberModalOpen, setIsCyberModalOpen] = useState(false);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const [isInfraModalOpen, setIsInfraModalOpen] = useState(false);
  const [isAutoModalOpen, setIsAutoModalOpen] = useState(false);

  return (
    <>
      <CyberSecurityModal
        isOpen={isCyberModalOpen}
        onClose={() => setIsCyberModalOpen(false)}
      />
      <DevModal
        isOpen={isDevModalOpen}
        onClose={() => setIsDevModalOpen(false)}
      />
      <InfraModal
        isOpen={isInfraModalOpen}
        onClose={() => setIsInfraModalOpen(false)}
      />
      <AutoModal
        isOpen={isAutoModalOpen}
        onClose={() => setIsAutoModalOpen(false)}
      />

      <div className="flex items-center justify-center gap-16 py-12 px-12 bg-white">
        <div
          className="flex items-center justify-center self-center icon-cyber"
          onClick={() => setIsCyberModalOpen(true)}
        >
          <Image
            src="/assets/images/cyber-security.png"
            alt="Cybersécurité"
            width={140}
            height={140}
          />
        </div>

        <div className="flex items-center justify-center self-center">
          <Image
            src="/assets/images/LigneHorizontale.png"
            alt="Sliders de paramètres"
            width={150}
            height={110}
          />
        </div>

        <div
          className="flex flex-col items-center self-center"
          style={{ marginTop: -250 }}
        >
          <div className="icon-dev" onClick={() => setIsDevModalOpen(true)}>
            <Image
              src="/assets/images/dev.png"
              alt="Icône code"
              width={140}
              height={140}
            />
          </div>
          <Image
            src="/assets/images/LigneUP.png"
            alt="Connecteur vertical"
            width={150}
            height={110}
          />
          <Image
            src="/assets/images/ai.png"
            alt="Chip AI"
            width={140}
            height={140}
            className="heartbeat"
            style={{ marginTop: -25 }}
          />
        </div>

        <div className="flex items-center justify-center self-center">
          <Image
            src="/assets/images/LigneHorizontale.png"
            alt="Lignes horizontales"
            width={150}
            height={110}
          />
        </div>

        <div
          className="flex flex-col items-center self-center"
          style={{ width: 140 }}
        >
          <div className="icon-infra" onClick={() => setIsInfraModalOpen(true)}>
            <Image
              src="/assets/images/infra.png"
              alt="Écran automatisation"
              width={140}
              height={140}
              style={{ filter: "brightness(0)" }}
            />
          </div>
          <Image
            src="/assets/images/LigneUP1.png"
            alt="Fils montants"
            width={140}
            height={140}
            className="w-full h-auto"
          />
          <Image
            src="/assets/images/LigneCrosse.png"
            alt="Grille de connexions"
            width={140}
            height={140}
            className="w-full h-auto"
          />
          <Image
            src="/assets/images/LigneDOWN.png"
            alt="Fils descendants"
            width={140}
            height={140}
            className="w-full h-auto"
          />
          <div className="icon-auto" onClick={() => setIsAutoModalOpen(true)}>
            <Image
              src="/assets/images/automation.png"
              alt="Icône play"
              width={140}
              height={140}
              style={{ filter: "brightness(0)" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
