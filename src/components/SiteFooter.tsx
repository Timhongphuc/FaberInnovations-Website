/*
 * SiteFooter — the quiet bottom bar used on every page.
 * Style copied from the reference: small monospace text, low contrast,
 * © + legal links left, social links right.
 *
 * Legal links ("Imprint", "Terms") are placeholder anchors for now —
 * TODO: create real /imprint and /terms pages + routes when ready.
 * Social links are text instead of icons on purpose: no icon library
 * needed, fully accessible, and it matches the monospace aesthetic.
 * Swap to icon links later if you want the pixel look.
 */
export function SiteFooter() {
  return (
    <footer className="mx-6 mb-6 rounded-xl border border-white/10 px-6 py-4">
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <p className="font-mono text-sm text-neutral-500">
          © 2026 Faber Innovations{" "}
          <span className="mx-1 text-neutral-700">/</span>
          <a
            href="#"
            className="mx-1 transition hover:text-neutral-300"
          >
            Imprint
          </a>
          <span className="mx-1 text-neutral-700">/</span>
          <a
            href="#"
            className="mx-1 transition hover:text-neutral-300"
          >
            Terms
          </a>
        </p>

        <nav
          aria-label="Social media"
          className="flex gap-4 font-mono text-sm text-neutral-500"
        >
          {/* TODO: real profile URLs */}
          <a href="#" className="transition hover:text-neutral-300">
            Instagram
          </a>
          <a href="#" className="transition hover:text-neutral-300">
            X
          </a>
          <a href="#" className="transition hover:text-neutral-300">
            LinkedIn
          </a>
          <a href="#" className="transition hover:text-neutral-300">
            YouTube
          </a>
          <a href="#" className="transition hover:text-neutral-300">
            Discord
          </a>
        </nav>
      </div>
    </footer>
  );
}
