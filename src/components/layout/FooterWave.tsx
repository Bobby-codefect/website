export default function FooterWave() {
  return (
    <div className="relative overflow-hidden bg-[var(--color-bg-dark)]">
      <svg
        width="100%"
        viewBox="0 0 1500 500"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Vague</title>
        <desc>Masse marine qui cache le creux des couches fines</desc>
        <defs>
          <clipPath id="above-mass">
            <path d="M0,0 L1500,0 L1500,25 C1450,40 1350,70 1200,120 C800,280 400,390 0,400 L0,0 Z" />
          </clipPath>
          <clipPath id="top-right-clip">
            <path d="M1500,0 L1500,25 C1450,40 1350,70 1200,120 C1100,160 1000,200 900,240 L900,0 Z" />
          </clipPath>
          <clipPath id="below-mass-thin">
            <path d="M0,400 C400,390 800,280 1200,120 C1350,70 1450,40 1500,25 L1500,120 C1450,135 1350,165 1200,215 C800,375 400,480 0,490 Z" />
          </clipPath>
        </defs>

        <rect x="0" y="0" width="1500" height="500" fill="#ffffff" />

        {/* Masse marine */}
        <path
          d="M0,500 L0,400 C400,390 800,280 1200,120 C1350,70 1450,40 1500,25 L1500,500 Z"
          fill="#0c1c2e"
        />

        {/* Couches fines clippées au-dessus de la masse */}
        <g clipPath="url(#above-mass)">
          <path
            d="M0,370 C150,355 300,345 400,348 C450,350 480,358 500,372 C520,386 530,395 550,390 C580,382 620,360 700,320 C900,240 1150,120 1500,42"
            fill="none"
            stroke="#163a5f"
            strokeWidth={28}
          />
          <path
            d="M0,382 C150,367 300,357 400,360 C450,362 480,370 500,384 C520,398 530,407 550,402 C580,394 620,372 700,332 C900,252 1150,132 1500,54"
            fill="none"
            stroke="#1e6a96"
            strokeWidth={20}
          />
          <path
            d="M0,391 C150,376 300,366 400,369 C450,371 480,379 500,393 C520,407 530,416 550,411 C580,403 620,381 700,341 C900,261 1150,141 1500,63"
            fill="none"
            stroke="#3a90bc"
            strokeWidth={12}
          />
          <path
            d="M0,397 C150,382 300,372 400,375 C450,377 480,385 500,399 C520,413 530,422 550,417 C580,409 620,387 700,347 C900,267 1150,147 1500,69"
            fill="none"
            stroke="#c0e0ee"
            strokeWidth={7}
          />
          <path
            d="M0,401 C150,386 300,376 400,379 C450,381 480,389 500,403 C520,417 530,426 550,421 C580,413 620,391 700,351 C900,271 1150,151 1500,73"
            fill="none"
            stroke="#c98a00"
            strokeWidth={5}
            strokeLinecap="round"
          />
        </g>

        {/* Couches fines en haut à droite */}
        <g clipPath="url(#top-right-clip)">
          <path
            d="M0,370 C150,355 300,345 400,348 C450,350 480,358 500,372 C520,386 530,395 550,390 C580,382 620,360 700,320 C900,240 1150,120 1500,42"
            fill="none"
            stroke="#163a5f"
            strokeWidth={28}
          />
          <path
            d="M0,382 C150,367 300,357 400,360 C450,362 480,370 500,384 C520,398 530,407 550,402 C580,394 620,372 700,332 C900,252 1150,132 1500,54"
            fill="none"
            stroke="#1e6a96"
            strokeWidth={20}
          />
          <path
            d="M0,391 C150,376 300,366 400,369 C450,371 480,379 500,393 C520,407 530,416 550,411 C580,403 620,381 700,341 C900,261 1150,141 1500,63"
            fill="none"
            stroke="#3a90bc"
            strokeWidth={12}
          />
          <path
            d="M0,397 C150,382 300,372 400,375 C450,377 480,385 500,399 C520,413 530,422 550,417 C580,409 620,387 700,347 C900,267 1150,147 1500,69"
            fill="none"
            stroke="#c0e0ee"
            strokeWidth={7}
          />
          <path
            d="M0,401 C150,386 300,376 400,379 C450,381 480,389 500,403 C520,417 530,426 550,421 C580,413 620,391 700,351 C900,271 1150,151 1500,73"
            fill="none"
            stroke="#c98a00"
            strokeWidth={5}
            strokeLinecap="round"
          />
        </g>

        {/* Fine bande de couches visible juste sous le bord de la masse */}
        <g clipPath="url(#below-mass-thin)">
          <path
            d="M0,370 C150,355 300,345 400,348 C450,350 480,358 500,372 C520,386 530,395 550,390 C580,382 620,360 700,320 C900,240 1150,120 1500,42"
            fill="none"
            stroke="#163a5f"
            strokeWidth={28}
          />
          <path
            d="M0,382 C150,367 300,357 400,360 C450,362 480,370 500,384 C520,398 530,407 550,402 C580,394 620,372 700,332 C900,252 1150,132 1500,54"
            fill="none"
            stroke="#1e6a96"
            strokeWidth={20}
          />
          <path
            d="M0,391 C150,376 300,366 400,369 C450,371 480,379 500,393 C520,407 530,416 550,411 C580,403 620,381 700,341 C900,261 1150,141 1500,63"
            fill="none"
            stroke="#3a90bc"
            strokeWidth={12}
          />
          <path
            d="M0,397 C150,382 300,372 400,375 C450,377 480,385 500,399 C520,413 530,422 550,417 C580,409 620,387 700,347 C900,267 1150,147 1500,69"
            fill="none"
            stroke="#c0e0ee"
            strokeWidth={7}
          />
          <path
            d="M0,401 C150,386 300,376 400,379 C450,381 480,389 500,403 C520,417 530,426 550,421 C580,413 620,391 700,351 C900,271 1150,151 1500,73"
            fill="none"
            stroke="#c98a00"
            strokeWidth={5}
            strokeLinecap="round"
          />
        </g>

        {/* Masque qui suit la courbe de la masse — remplace le rectangle brutal */}
        <path
          d="M0,408 C400,398 800,288 1200,128 C1350,78 1450,48 1500,33 L1500,500 L0,500 Z"
          fill="#0c1c2e"
        />
      </svg>
    </div>
  );
}