import { Link } from "react-router-dom";
import GradientASCII from '~/components/GradientASCII';
import { BarcodeLogo } from '~/components/BarcodeLogo';
import { Reveal } from '~/components/Reveal';
import { SiteFooter } from '~/components/SiteFooter';
//import blackwhiteGarden from "../assets/bwg.jpg";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from '~/components/ui/draggable-card';
//import { TextHoverEffect } from "~/components/ui/text-hover-effect";

export default function LandingPage() {
  const items = [
      {
        title: "",
        image:
          "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeifgalmxit5aner7yhmt43cvvntw5hw5omkyk4smvpqef2kv7sw7oa",
        className: "absolute top-32 left-[55%] rotate-[10deg]",
      },
      {
        title: "",
        image:
          "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeiex27nans5vvfawisiw6eyeczqk2qh6nbueob2gbwcbrq5bvlmbiq",
        className: "absolute top-20 right-[35%] rotate-[2deg]",
      },
      {
        title: "",
        image:
          "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeignfiavhdp3e57zzigb3lk6oam4exifggsshqr4jjlextjlqes3zm",
        className: "absolute top-24 left-[45%] rotate-[-7deg]",
      },
      {
        title: "",
        image:
          "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafybeieemgilglimcwatfq7jifavny4pfjt7noftnvhrlffxzuyt6e6t4i",
        className: "absolute top-8 left-[30%] rotate-[4deg]",
      },
    ];
  
  return (
    <div className="relative min-h-screen bg-black">

      {/* HERO — exactly ONE screen (h-screen, not min-h-screen!).
          The ASCII background below is "absolute inset-0" anchored to THIS
          section, so the horizon art always fills exactly the first
          viewport and never stretches down the page. Everything after it
          (definition, cards, footer) sits in normal flow BELOW the hero,
          on the outer div's bg-black — like the subpages. */}
      <div className="relative h-screen w-full pt-[120px]"> {/* pt instead of margin on .mainhead! */}
        {/*
          FIX: The ASCII background used to sit in normal flow and take up
          the full screen height, which pushed .mainhead below the visible
          screen.

          Lesson: putting "absolute inset-0" directly on <GradientASCII>
          did NOT work, because the component's own GradientASCII.css sets
          "position: relative" in UNLAYERED CSS — and unlayered styles
          always win over Tailwind's layered @layer utilities. Inline or
          plain CSS always beats layered Tailwind classes.

          So instead we wrap the component in OUR OWN absolutely
          positioned div. A plain div has no conflicting styles, so
          Tailwind's classes apply cleanly, and GradientASCII then fills
          that wrapper (its height: 100% is relative to it).
        */}
        <div className="absolute inset-0">
          <GradientASCII
            colors={["#1e3fd8","#f6f8ff","#a5d8ff","#38bdf8"]}
            shape="horizon"
            characters=" =+xX0S8#@"
            cellSize={18}
            density={0.8}
            glyphOpacity={0.85}
            glow={0.2}
            depthOfField={0}
            flicker={0.2}
            softness={0.5}
            scale={1}
            flow={0.5}
            speed={1}
            gradientOpacity={0.9}
            grain={0.08}
            variation={0}
            mouseInteraction
            scrambleRadius={0.1}
            clickEffect="wave"
            intro
            lightMode={false}
          />
        {/* Wrapper from above ends here — the background layer is done. */}
        </div>

        <header className="absolute top-0 z-10 flex w-full items-center justify-between px-6 py-4">
          {/* Barcode logo — one shared component (src/components/BarcodeLogo.tsx).
              Clicking it returns to the homepage. */}
          <BarcodeLogo />
          {/*<Link
            to="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Zum Login
          </Link>*/}
          </header>

        <div className="mainhead">
          <h1 className="header">We ship because we can do it.</h1>
          <p className="header-text">Building things for our future. Down in the basement.</p>
        </div>

        <div>
          {/*Projects, Manifesto, (and) Team */}
          <p>
            {/* <a className="pLanguages" href="https://www.java.com/">Projects</a> |
            <a className="pLanguages" href="https://www.java.com/">Manifesto</a> |
            <a className="pLanguages" href="https://www.java.com/">Team</a> */}

            {/* <p><Link to='/projects'>Projects</Link> | <Link to='/manifesto'>Manifesto</Link> | <Link to='/team'>Team</Link></p> */}

            
          </p>
        </div>

        {/* SUBTLE NAVBAR — your attempt 2 was the right pattern all along:
            - <nav>  = semantic element, screen readers/SEO expect it
            - <Link> = react-router: swaps views WITHOUT a page reload
            - relative + z-10 = same reason .mainhead has them: without
              it, the absolutely positioned ASCII background would paint
              ON TOP of the links (they'd be invisible!)
            Subtle look: small text, white at 50% opacity, no borders,
            brightens to full white only on hover. */}
        <nav className="relative z-10 mt-67 flex justify-center gap-8 text-base text-white/50">
          <Link to="/projects" className="transition hover:text-white">
            Projects
          </Link>
          <Link to="/manifesto" className="transition hover:text-white">
            Manifesto
          </Link>
          <Link to="/team" className="transition hover:text-white">
            Team
          </Link>
        </nav>
      </div>{/* HERO ends — definition, cards and footer scroll past it. */}

        {/* DEFINITION SECTION — dictionary-style entry for "faber",
            revealed only when the user scrolls to it (<Reveal> below).
            - The small barcode echo at the top shows at a glance what
              the header logo actually spells. aria-hidden="true" marks
              it decorative: screen readers already get "Faber" from the
              logo, so this copy shouldn't be announced twice.
            - max-w-xl + mx-auto: constrains the line length so it reads
              comfortably, centered. */}
        <Reveal className="relative z-10">
          <div className="mx-auto mt-24 max-w-xl px-6 text-center">
            <p
              className="barcode-logo text-4xl leading-none text-white/80"
              aria-hidden="true"
            >
              Faber
            </p>
            <p className="mt-4 text-sm text-white/80">
              <span className="font-semibold text-white">fa·ber</span>
              <span className="ml-2 text-white/50">/ˈfaːbər/</span>
              <span className="ml-2 italic text-white/50">noun, Latin</span>
            </p>
            <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-white/60">
              <li>
                craftsman, smith — one who builds things with their own hands.
              </li>
              <li>
                Faber Innovations sense: the one who ships what others only sketch.
              </li>
            </ol>
          </div>
        </Reveal>
        
        {/* Cards reveal on scroll too — see <Reveal> comments above.
            z-50 (not z-10): while DRAGGING, a card should float above
            every other UI element. Common z-index ladder:
              0-10  content      20  dropdowns      30  sticky headers
              40  overlays       50  modals/dragging — always on top. */}
        <Reveal className="relative z-50">
        <div>
          <DraggableCardContainer className="relative z-50 mt-[374px] flex min-h-screen w-full items-center justify-center overflow-clip">
            {/* NOTE: mt-[100px] is on the CONTAINER on purpose!
                The children here (cards + sentence) are all "absolute",
                and absolutely positioned children are immune to the
                container's PADDING (they position from its edge) and to
                flex alignment. Moving the container itself with a margin
                is what reliably shifts everything down together.
                Adjust mt-[100px] until the cards clear the ASCII art. */}
            <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
                    If you don't build it today, someone might build it tomorrow.
            </p>
            {items.map((item) => (
              <DraggableCardBody key={item.title} className={item.className}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                />
                <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </h3>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
         </div>
        </Reveal>

        {/* The footer placeholder from before — finally filled in.
            It sits in normal flow BELOW the hero now, exactly like the
            subpages, so its spacing just works with no extra padding. */}
        <SiteFooter />

    </div>
  );
}
