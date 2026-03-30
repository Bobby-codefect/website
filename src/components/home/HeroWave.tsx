export default function HeroWave() {
    return (
        <div className="relative overflow-hidden bg-[#f4f6f8]">
            <svg
                viewBox="0 0 1440 170"
                xmlns="http://www.w3.org/2000/svg"
                className="block h-auto w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                {/* Couche sombre principale */}
                <path
                    d="M0,0 H1440 V70
             C1220,115 980,110 760,88
             C500,62 250,65 0,40
             Z"
                    fill="#17202a"
                />

                {/* Couche bleu sombre */}
                <path
                    d="M0,25
             C250,55 500,50 760,76
             C990,98 1220,100 1440,58
             V95
             C1210,132 980,130 760,106
             C500,80 250,82 0,55
             Z"
                    fill="#1b364f"
                />

                {/* Couche bleu accent */}
                <path
                    d="M0,55
             C250,82 500,78 760,102
             C990,122 1210,122 1440,88
             V112
             C1210,140 980,142 760,118
             C500,94 250,96 0,74
             Z"
                    fill="#1e6585"
                />

                {/* Liseré doré */}
                <path
                    d="M0,72
             C250,92 500,90 780,114
             C1040,136 1230,138 1440,108"
                    fill="none"
                    stroke="#e29e21"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}