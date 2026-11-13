import { BarcodeLogo } from "~/components/BarcodeLogo";
import { SiteFooter } from "~/components/SiteFooter";

/*
 * PROJECTS PAGE — same visual language as Team:
 * black background, white barcode header, quiet intro, project cards.
 * TODO: your real projects (title, one line, image, link).
 */
const projects = [
  {
    title: "TODO: project one",
    description: "TODO: one line about what this is and why it matters.",
    image:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeifgalmxit5aner7yhmt43cvvntw5hw5omkyk4smvpqef2kv7sw7oa",
    link: "#",
  },
  {
    title: "TODO: project two",
    description: "TODO: one line about what this is and why it matters.",
    image:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeiex27nans5vvfawisiw6eyeczqk2qh6nbueob2gbwcbrq5bvlmbiq",
    link: "#",
  },
  {
    title: "TODO: project three",
    description: "TODO: one line about what this is and why it matters.",
    image:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeignfiavhdp3e57zzigb3lk6oam4exifggsshqr4jjlextjlqes3zm",
    link: "#",
  },
  {
    title: "TODO: project four",
    description: "TODO: one line about what this is and why it matters.",
    image:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeieemgilglimcwatfq7jifavny4pfjt7noftnvhrlffxzuyt6e6t4i",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black">
      <header className="absolute top-0 z-10 flex w-full items-center justify-between px-6 py-4">
        <BarcodeLogo className="text-white" />
      </header>

      {/* Short intro — TODO: your words. */}
      <section className="mx-auto max-w-3xl px-6 pb-4 pt-32">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Projects</h1>
        <p className="mt-4 text-lg text-neutral-400">
          TODO: two or three sentences introducing what you have built.
        </p>
      </section>

      {/* PROJECT GRID — 1 column on phones, 2 from md up.
          Cards are subtle: thin dark border, no shadows — fits the
          black theme. Hover: slight lift + brighter border. */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group block overflow-hidden rounded-xl border border-white/10 transition hover:-translate-y-1 hover:border-white/30"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-400">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
