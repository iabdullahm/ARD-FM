export function RafidLogo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle cx="100" cy="100" r="95" fill="#FF7A00" opacity="0.1" />

      {/* Main Shape - "R" inspired design */}
      <g fill="#FF7A00">
        {/* Vertical stem */}
        <rect x="50" y="40" width="20" height="120" rx="4" />

        {/* Top curve */}
        <path d="M 70 40 Q 90 40 95 55 Q 100 70 85 80 L 70 80 Z" />

        {/* Bottom right diagonal */}
        <path d="M 70 100 L 100 150 Q 110 155 115 145 L 85 105 Z" />

        {/* Accent dot */}
        <circle cx="125" cy="65" r="8" fill="#FF7A00" />
      </g>

      {/* Subtle gradient overlay */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A00" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF5500" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Outline for definition */}
      <circle cx="100" cy="100" r="95" fill="none" stroke="#FF7A00" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}
