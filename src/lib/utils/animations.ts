/**
 * Creates an IntersectionObserver that adds a visible class
 * to elements when they enter the viewport.
 */
export function observeIntersection(
  elements: Element | Element[],
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const defaults: IntersectionObserverInit = {
    threshold: 0.12,
    rootMargin: '0px 0px -48px 0px',
    ...options,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, defaults);

  const els = Array.isArray(elements) ? elements : [elements];
  els.forEach((el) => observer.observe(el));

  return observer;
}

/**
 * Svelte action: fade-in + translateY on viewport entry.
 * Usage: <div use:fadeIn>
 */
export function fadeIn(
  node: Element,
  { delay = 0, duration = 700 }: { delay?: number; duration?: number } = {}
) {
  (node as HTMLElement).style.setProperty('--anim-delay', `${delay}ms`);
  (node as HTMLElement).style.setProperty('--anim-duration', `${duration}ms`);
  node.classList.add('anim-fade-in');

  const observer = observeIntersection(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}

/** Svelte action: fade-in + translateX(-20px) on viewport entry. */
export function fadeLeft(
  node: Element,
  { delay = 0 }: { delay?: number } = {}
) {
  (node as HTMLElement).style.setProperty('--anim-delay', `${delay}ms`);
  node.classList.add('anim-fade-left');
  const observer = observeIntersection(node);
  return { destroy() { observer.disconnect(); } };
}

/** Svelte action: fade-in + translateX(20px) on viewport entry. */
export function fadeRight(
  node: Element,
  { delay = 0 }: { delay?: number } = {}
) {
  (node as HTMLElement).style.setProperty('--anim-delay', `${delay}ms`);
  node.classList.add('anim-fade-right');
  const observer = observeIntersection(node);
  return { destroy() { observer.disconnect(); } };
}
