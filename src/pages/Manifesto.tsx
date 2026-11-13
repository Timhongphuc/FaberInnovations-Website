import { BarcodeLogo } from "~/components/BarcodeLogo";
import { SiteFooter } from "~/components/SiteFooter";

/*
 * MANIFESTO PAGE — same visual language as Team:
 * black background, white barcode header, quiet intro, then content.
 * TODO: your principles, your words. Short and punchy works best.
 */
const principles = [
  {
    title: "TODO: principle one title",
    text: "TODO: one or two sentences explaining this belief.",
  },
  {
    title: "TODO: principle two title",
    text: "TODO: one or two sentences explaining this belief.",
  },
  {
    title: "TODO: principle three title",
    text: "TODO: one or two sentences explaining this belief.",
  },
  {
    title: "TODO: principle four title",
    text: "TODO: one or two sentences explaining this belief.",
  },
  {
    title: "TODO: principle five title",
    text: "TODO: one or two sentences explaining this belief.",
  },
];

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-black">
      <header className="absolute top-0 z-10 flex w-full items-center justify-between px-6 py-4">
        <BarcodeLogo className="text-white" />
      </header>

      {/* Short intro — TODO: your words. */}
      <section className="mx-auto max-w-3xl px-6 pb-4 pt-32">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Manifesto
        </h1>
        <p className="mt-4 text-lg text-neutral-400">
          TODO: two or three sentences introducing what this page is —
          the rules you hold yourselves to.
        </p>
      </section>

      {/* The principles. flex row: ghost number left, text right —
          same left-to-right rhythm as the Team badges. */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <ol className="space-y-12">
          {principles.map((principle, index) => (
            <li key={principle.title} className="flex gap-6">
              <span className="text-4xl font-black leading-none text-white/15">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-xl font-bold text-white">
                  {principle.title}
                </h2>
                <p className="mt-2 text-neutral-400">{principle.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <SiteFooter />
    </div>
  );
}
