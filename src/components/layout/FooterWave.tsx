export default function FooterWave() {
    return (
        <div className="relative overflow-hidden bg-[var(--color-bg-dark)]">
            <svg
                viewBox="0 0 1440 95"
                xmlns="http://www.w3.org/2000/svg"
                className="block h-auto w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                {/* Fond clair qui descend vers le sombre */}
                <path
                    d="
            M0,0
            C220,10 460,10 720,22
            C980,34 1190,58 1440,50
            L1440,0
            Z
          "
                    fill="#eaf7fc"
                />

                {/* Bande bleu sombre */}
                <path
                    d="
            M0,18
            C220,28 460,30 720,40
            C980,52 1190,74 1440,68
            L1440,82
            C1190,84 980,68 720,58
            C460,48 220,42 0,36
            Z
          "
                    fill="#1b364f"
                />

                {/* Bande bleu accent */}
                <path
                    d="
            M0,34
            C220,42 460,48 720,58
            C980,68 1190,84 1440,82
            L1440,92
            C1190,92 980,82 720,72
            C460,62 220,56 0,50
            Z
          "
                    fill="#1e6585"
                />

                {/* Liseré doré */}
                <path
                    d="
            M0,50
            C220,56 460,62 720,72
            C980,82 1190,92 1440,92
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