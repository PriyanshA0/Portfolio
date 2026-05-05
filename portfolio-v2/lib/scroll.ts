export function scrollToId(id: string) {
  if (typeof document === 'undefined') {
    return;
  }

  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function scrollToTop() {
  if (typeof window === 'undefined') {
    return;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
