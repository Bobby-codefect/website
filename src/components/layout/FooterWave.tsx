export default function FooterWave() {
    return (
        <div className="relative overflow-hidden bg-[#17202a]">
            <svg
                viewBox="0 0 1440 140"
                xmlns="http://www.w3.org/2000/svg"
                className="block h-auto w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                {/* Fond clair qui descend vers le sombre */}
                <path
                    d="
            M0,0
            C220,18 460,14 720,34
            C980,54 1190,96 1440,84
            L1440,0
            Z
          "
                    fill="#f4f6f8"
                />

                {/* Bande bleu sombre */}
                <path
                    d="
            M0,26
            C220,40 460,38 720,54
            C980,72 1190,106 1440,98
            L1440,122
            C1190,126 980,100 720,82
            C460,64 220,58 0,48
            Z
          "
                    fill="#1b364f"
                />

                {/* Bande bleu accent */}
                <path
                    d="
            M0,46
            C220,58 460,60 720,76
            C980,92 1190,122 1440,118
            L1440,138
            C1190,140 980,120 720,102
            C460,86 220,78 0,68
            Z
          "
                    fill="#1e6585"
                />

                {/* Liseré doré */}
                <path
                    d="
            M0,68
            C220,78 460,86 720,102
            C980,120 1190,140 1440,138
          "
                    fill="none"
                    stroke="#e29e21"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}