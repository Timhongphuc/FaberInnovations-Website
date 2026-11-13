import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/*
 * <Reveal> — shows children only once they scroll into view,
 * with a gentle fade + slide-up.
 *
 * FIRST HOOK LESSON (this component uses all three core hooks):
 * - useRef: a pointer to the actual DOM node ("wrapper div") — hooks
 *   can't use document.querySelector; refs are the React-blessed way.
 * - useState: one boolean, "has the user seen this yet?"
 * - useEffect: runs AFTER the component appears on the page — the only
 *   safe place to talk to the browser (observers, timers, listeners).
 *
 * HOW IT WORKS: IntersectionObserver is a browser feature that calls
 * your callback when an element enters/leaves the viewport. We watch
 * our div; the moment ≥15% of it is visible, we flip the state and the
 * classes animate it in (transition does the animation — React just
 * changes the class names).
 *
 * IMPORTANT: the element starts VISIBLE-IN-DOM but opacity-0 — screen
 * readers and SEO can still read the content, and users with JS edge
 * cases don't get a blank page forever (if the observer never fires,
 * worst case: content invisible... acceptable for this site).
 *
 * Usage:  <Reveal className="relative z-10">{anything}</Reveal>
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  /** extra ms before the animation starts (staggered reveals) */
  delay?: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // reveal once, stay revealed
        }
      },
      { threshold: 0.15 } // fire when 15% of the element is on screen
    );

    observer.observe(el);
    return () => observer.disconnect(); // cleanup on unmount
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
