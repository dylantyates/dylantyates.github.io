/**
 * GSAP page animations: hero stagger, scroll-triggered staggered reveals.
 * Respects prefers-reduced-motion. Run once on load.
 */
/* oxlint-disable id-length -- GSAP uses short keys (e.g. y, x) */
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const REDUCED_MOTION = globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches;

const animateHeroElements = (elements: Element[]): void => {
  // oxlint-disable-next-line id-length
  gsap.set(elements, { opacity: 0, y: 24 });
  gsap.to(elements, {
    duration: 0.7,
    ease: 'power3.out',
    opacity: 1,
    overwrite: 'auto',
    stagger: 0.12,
    y: 0,
  });
};

const runHeroAnimations = (): void => {
  const header = document.querySelector<HTMLElement>('[data-animate="hero"]');
  if (!header || REDUCED_MOTION) {
    return;
  }

  const title = header.querySelector<HTMLHeadingElement>('h1');
  const tagline = header.querySelector<HTMLParagraphElement>('p');
  const ZERO = 0;
  const elements = [title, tagline].filter(
    (node): node is HTMLHeadingElement | HTMLParagraphElement => Boolean(node)
  );
  if (elements.length === ZERO) {
    return;
  }

  animateHeroElements(elements);
};

/** Stagger delay between each revealed item (seconds). */
const REVEAL_STAGGER = 0.08;
/** Fade-in duration per item. */
const REVEAL_DURATION = 0.5;
/** Vertical offset for fade-in (px). */
const REVEAL_Y = 20;
/** Vertical offset when revealing whole section (px). */
const REVEAL_Y_SECTION = 30;

const runScrollReveals = (): void => {
  const ZERO = 0;
  const sections = document.querySelectorAll<HTMLElement>('[data-animate="reveal"]');
  if (sections.length === ZERO || REDUCED_MOTION) {
    return;
  }

  sections.forEach((block: HTMLElement) => {
    const useStagger = block.hasAttribute('data-reveal-stagger');
    const heading = block.querySelector<HTMLElement>(':scope > h1, :scope > h2');
    const items = block.querySelectorAll<HTMLElement>(':scope > dl > div, :scope > ul > li, :scope > p');

    if (useStagger && (heading || items.length > ZERO)) {
      animateStaggerReveal(block, heading, items);
    } else {
      animateSectionReveal(block);
    }
  });
};

const animateStaggerReveal = (
  block: HTMLElement,
  heading: HTMLElement | null,
  items: NodeListOf<HTMLElement>
): void => {
  const revealElements: HTMLElement[] = [];
  if (heading) {
    revealElements.push(heading, ...items);
  } else {
    revealElements.push(...items);
  }
  gsap.set(revealElements, { opacity: 0, y: REVEAL_Y });
  gsap.to(revealElements, {
    duration: REVEAL_DURATION,
    ease: 'power2.out',
    opacity: 1,
    overwrite: 'auto',
    scrollTrigger: {
      start: 'top 88%',
      toggleActions: 'play none none none',
      trigger: block,
    },
    stagger: REVEAL_STAGGER,
    y: 0,
  });
};

const animateSectionReveal = (block: HTMLElement): void => {
  gsap.fromTo(
    block,
    { opacity: 0, y: REVEAL_Y_SECTION },
    {
      duration: 0.7,
      ease: 'power3.out',
      opacity: 1,
      overwrite: 'auto',
      scrollTrigger: {
        start: 'top 88%',
        toggleActions: 'play none none none',
        trigger: block,
      },
      y: 0,
    }
  );
};

const runLinkHovers = (): void => {
  if (REDUCED_MOTION) {
    return;
  }
  const links = document.querySelectorAll<HTMLElement>('[data-animate="link"]');
  links.forEach((anchor: HTMLElement) => {
    anchor.addEventListener('mouseenter', () => {
      gsap.to(anchor, { duration: 0.2, ease: 'power2.out', scale: 1.02 });
    });
    anchor.addEventListener('mouseleave', () => {
      gsap.to(anchor, { duration: 0.2, ease: 'power2.out', scale: 1 });
    });
  });
};

const runAnimations = (): void => {
  runHeroAnimations();
  runScrollReveals();
  runLinkHovers();
}

/**
 * Run page animations when the DOM is ready. Call this once from the layout.
 */
const runWhenReady = (): void => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAnimations);
  } else {
    runAnimations();
  }
};

export default runWhenReady;