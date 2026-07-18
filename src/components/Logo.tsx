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
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="IGO Pharma Logo"
        className="shrink-0"
        style={{ height: size * 1.5, objectFit: 'contain' }}
      />
    </div>
  );
}
