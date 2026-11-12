import { Link } from "react-router-dom";

/*
 * Shared barcode logo — the "Faber" brand mark used in every page header.
 *
 * Built once, used on all pages (that's what components are FOR: change
 * the logo once here and every page updates instantly).
 *
 * - Uses .barcode-logo from globals.css (Libre Barcode 128 font).
 * - <Link to="/"> = clicking the logo navigates back to the homepage —
 *   logo-as-home-link is the standard convention of the web.
 * - The color comes from `className` (default: white) because each page
 *   has a different background: white bars on the dark landing hero,
 *   dark bars on the light subpages. A prop with a default value is a
 *   classic React pattern — callers only customize what they need.
 * - aria-label: barcodes are unreadable to screen readers, so we spell
 *   out what this is and where it goes.
 */
export function BarcodeLogo({
  className = "text-white",
}: {
  className?: string;
}) {
  return (
    <Link
      to="/"
      className={`barcode-logo text-5xl leading-none transition hover:opacity-80 ${className}`}
      aria-label="Faber — back to homepage"
    >
      Faber
    </Link>
  );
}
