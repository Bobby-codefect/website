export default function HeroWave() {
    return (
        <div className="relative overflow-hidden bg-[#17202a]">
            <svg
                viewBox="0 0 1440 220"
                xmlns="http://www.w3.org/2000/svg"
                className="block h-auto w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                {/* Fond principal de transition */}
                <path
                    d="M0,40 C220,120 420,20 720,70 C980,115 1180,180 1440,90 L1440,220 L0,220 Z"
                    fill="#1b364f"
                />

                {/* Couche intermédiaire */}
                <path
                    d="M0,70 C240,150 470,55 760,105 C1020,150 1210,195 1440,125 L1440,220 L0,220 Z"
                    fill="#1e6585"
                    opacity="0.9"
                />

                {/* Couche claire pour donner de la profondeur */}
                <path
                    d="M0,105 C260,175 520,95 800,135 C1060,172 1240,205 1440,155 L1440,220 L0,220 Z"
                    fill="#d7f3ff"
                    opacity="0.18"
                />

                {/* Liseré doré inspiré de la plaquette */}
                <path
                    d="M0,92 C250,160 500,78 780,120 C1050,160 1230,192 1440,140"
                    fill="none"
                    stroke="#e29e21"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}