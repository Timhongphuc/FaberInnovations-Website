import { BarcodeLogo } from "~/components/BarcodeLogo";
import { SiteFooter } from "~/components/SiteFooter";

/*
 * MANIFESTO PAGE — same visual language as Team:
 * black background, white barcode header, quiet intro, then content.
 * TODO: your principles, your words. Short and punchy works best.
 */
const principles = [
  {
    title: "Your life's work should never be focused on material success.",
    text: "Being an overall good human being and approaching everyone with loving kindness is, in our opinion, tables stakes for reaching remarkable milestones.",
  },
  {
    title: "Have fun.",
    text: "Whenever we create something, we create because we feel deep devotion towards doing it. Others just can't compete with someone who is having fun.",
  },
  {
    title: "Enrich peoples life's.",
    text: "Optimizing and improving the life's of other's is one of the most important reasons for creating products. We always ask: 'What can be done in order to improve the day of one single soul through software or hardware?'.",
  },
  {
    title: "Radical honesty.",
    text: "Being 100% transparent when it comes to decisions and our very own opinion is critical for working together. We do not mince matters. When something seems odd, we say it.",
  },
  {
    title: "Be crazy.",
    text: "We are creatives, builders and developers. We can make a meaningful contribution to the world, but only if we're crazy enough to belive it. A concept that might sound simple at first, becomes dangerously powerful as soon as you decide to obsess over it.",
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
          At Faber, we fircely believe in building products which not only enrich peoples lifes but also help them with becoming a better version of themselfes.
          This belief empowers us to continously learn, build and fail. 
          The core principles as they are displayed are assisting us with maintaining this path.
          They are the way we build things.
        </p>
        {/* <p className="mt-4 text-lg text-neutral-400">The core principles as they are displayed are assisting us with maintaining this path.</p>
        <p className="mt-4 text-lg text-neutral-400">They are the way we build things.</p> */}
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
