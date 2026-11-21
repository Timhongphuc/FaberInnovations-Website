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
      "I'm a passionate developer and hobbyist with a strong focus on developing well-designed, user friendly AI solutions. Furthermore I'm obsessed with crafting innovative systems and software products which enrich other people's lives through intelligent inference and data. I strongly believe that AI and ML powered systems will enhance the way we communicate, live and work — but only if we provide them with grounded data using retrieval-augmented generation.",
    // TODO: swap in your own card images (front/back) when ready.
    frontImage:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeieqnfew2ujvfgcssjp2xozkh5wa7lxnpxkwu64jfyx3q4xyxuvhf4",
    backImage:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafkreiahzjidzoqgm2o2wc5wishdobvs4gh7kbe5pru7ult23lw32ag2ai",
    cardColor: "#f6f8ff",
  },
  {
    name: "Filip Roessner",
    description: "I enjoy figuring out how complex systems work from the ground up, whether that means writing software, setting up Linux servers, or building hardware prototypes. I tend to take a practical, math-driven approach to solving problems and like turning ideas into things that actually run.",
    frontImage:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeif3rp4yj6rhhlf6yst3jwxzrimej6uschwraikkmnsnjmqml7oa5m",
    backImage:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafkreihqgvhhza2k5o4yuumyvkhxvuzqmelj2hweejwfuelsxnzhvzagxm",
    cardColor: "#f6f8ff",
  },
  {
    name: "Karl Grehn",
    description: "TODO: one short paragraph about who this is and what they do.",
    frontImage:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeifcfion2246ksjju2xnoqrwaz2vx26h5cto5dbb4cnqhx4tjuxdcm",
    backImage:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafkreigxuozqkl4zyzmdkgnhzgo7b66plakbng246cr7belsyne47sg5ka",
    cardColor: "#f6f8ff",
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
