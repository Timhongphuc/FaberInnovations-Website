import { BarcodeLogo } from "~/components/BarcodeLogo";

export default function Manifesto() {
  return (
    <header className="absolute top-0 z-10 flex w-full items-center justify-between px-6 py-4">
      {/* Dark bars here (text-neutral-900): this page has a white
          background — white bars would be invisible. The prop makes the
          same component work on every page's background. */}
      <BarcodeLogo className="text-neutral-50" />
    </header>
  );
}
