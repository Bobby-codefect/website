export default function FooterWave() {
  return (
      <div className="w-full overflow-hidden leading-[0] bg-[var(--color-bg-light)]">
        <svg
            viewBox="0 0 1800 600"
            xmlns="http://www.w3.org/2000/svg"
            className="relative top-px block h-auto w-full"
            aria-hidden="true"
        >
          <path
              fill="#be8620"
              d="M 0,215 C 0,215 0,570 900,300 C 900,300 1650,-80 1800,215 L 1800,600 L 0,600 Z"
              strokeWidth="0"
          />
          <path
              fill="#b8c2cf"
              d="M 0,225 C 0,225 0,580 900,300 C 900,300 1650,-70 1800,225 L 1800,600 L 0,600 Z"
              strokeWidth="0"
          />
          <path
              fill="#1e6585"
              d="M 0,250 C 0,250 0,590 900,300 C 900,300 1650,-60 1800,250 L 1800,600 L 0,600 Z"
              strokeWidth="0"
          />
          <path
              fill="#17202a"
              d="M 0,300 C 0,300 0,600 900,300 C 900,300 1650,-50 1800,300 L 1800,600 L 0,600 Z"
              strokeWidth="0"
          />
        </svg>
      </div>
  );
}