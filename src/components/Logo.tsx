import React from "react";

interface LogoProps {
  /** Pixel size of the square mark */
  size?: number;
  /** Show the "IGO Pharma" wordmark next to the mark */
  showText?: boolean;
  /** Extra classes for the wrapping element */
  className?: string;
  /** Text color theme — "dark" for light backgrounds, "light" for dark backgrounds */
  theme?: "dark" | "light";
}

/**
 * IGO Pharma brand mark: two overlapping leaf shapes forming a heart,
 * with small capsule/tablet accents — approximating the IGO Pharma logo.
 * This is a placeholder vector recreation; swap for the official logo
 * file (img/igo-pharma-logo.png) once available in the project assets.
 */
export default function Logo({ size = 44, showText = true, className = "", theme = "dark" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Right leaf (dark green) */}
        <path
          d="M50 30 C50 30 80 15 88 45 C94 68 72 82 50 78 C50 78 45 50 50 30 Z"
          fill="#0f4d3a"
        />
        {/* Left leaf (bright green) */}
        <path
          d="M50 30 C50 30 20 15 12 45 C6 68 28 82 50 78 C50 78 55 50 50 30 Z"
          fill="#3fae49"
        />
        {/* Small capsule accent dots */}
        <circle cx="38" cy="66" r="3.2" fill="#0f4d3a" />
        <circle cx="46" cy="72" r="2.3" fill="#3fae49" />
        <circle cx="30" cy="70" r="1.8" fill="#0f4d3a" />
      </svg>

      {showText && (
        <div className="leading-none">
          <span className={`block text-xl font-black tracking-tight font-sans ${theme === "dark" ? "text-stone-800" : "text-white"}`}>
            IGO<span className="text-emerald-700">Pharma</span>
          </span>
          <span className={`text-[10px] uppercase tracking-widest font-medium font-mono ${theme === "dark" ? "text-amber-700" : "text-amber-300"}`}>
            Siddha &amp; Ayurveda Wellness
          </span>
        </div>
      )}
    </div>
  );
}
