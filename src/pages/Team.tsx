import { BarcodeLogo } from "~/components/BarcodeLogo";
import { SiteFooter } from "~/components/SiteFooter";
import Lanyard from "~/components/ui/Lanyard";

/*
 * TEAM PAGE — your concept:
 * header → short general intro → one section per member.
 * Each section: the interactive 3D name badge (<Lanyard>) on the LEFT,
 * name + short description on the right.
 */
const members = [
  {
    name: "Tim Seufert",
    description:
      "TODO: one short paragraph about who this is and what they do.",
    // TODO: swap in your own card images (front/back) when ready.
    frontImage:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeifgalmxit5aner7yhmt43cvvntw5hw5omkyk4smvpqef2kv7sw7oa",
    backImage:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeiex27nans5vvfawisiw6eyeczqk2qh6nbueob2gbwcbrq5bvlmbiq",
    cardColor: "#f6f8ff",
  },
  {
    name: "Filip Roessner",
    description: "TODO: one short paragraph about who this is and what they do.",
    frontImage:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeifgalmxit5aner7yhmt43cvvntw5hw5omkyk4smvpqef2kv7sw7oa",
    backImage:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeignfiavhdp3e57zzigb3lk6oam4exifggsshqr4jjlextjlqes3zm",
    cardColor: "#1e3fd8",
  },
  {
    name: "Karl Grehn",
    description: "TODO: one short paragraph about who this is and what they do.",
    frontImage:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeifgalmxit5aner7yhmt43cvvntw5hw5omkyk4smvpqef2kv7sw7oa",
    backImage:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeieemgilglimcwatfq7jifavny4pfjt7noftnvhrlffxzuyt6e6t4i",
    cardColor: "#38bdf8",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-black">
      <header className="absolute top-0 z-10 flex w-full items-center justify-between px-6 py-4">
        <BarcodeLogo className="text-white" />
      </header>

      {/* Short general introduction — TODO: your words. */}
      <section className="mx-auto max-w-3xl px-6 pb-4 pt-32">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          The team
        </h1>
        <p className="mt-4 text-lg text-neutral-400">
          TODO: two or three sentences introducing the team — who you are,
          what you do together, and why the badges below exist.
        </p>
      </section>

      {/* One section per member. flex-col on phones (badge stacks above
          the text), row from md up — badge LEFT, text RIGHT, as designed. */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center gap-8 py-14 md:flex-row md:items-center"
          >
            {/* Badge container: the <Lanyard> fills it (height 100% of it).
                Fixed height because WebGL needs a defined area to render. */}
            <div className="h-[560px] w-full max-w-sm shrink-0 md:w-1/2">
              <Lanyard
                frontImage={member.frontImage}
                backImage={member.backImage}
                cardColor={member.cardColor}
                size={0.6}
                anchor="center"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-white">
                {member.name}
              </h2>
              <p className="mt-3 text-neutral-400">{member.description}</p>
            </div>
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
