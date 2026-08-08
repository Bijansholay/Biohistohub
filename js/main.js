document.addEventListener('DOMContentLoaded', () => {
  // Setup Animation Observer for Fade-Ins
  setupScrollAnimations();
});

/**
 * Premium Micro-Animations
 * Adds a '.visible' class to elements when they scroll into viewport
 */
function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-up, .animate-fade, .animate-left, .animate-right');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target); // Trigger once
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => {
      observer.observe(el);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    animatedElements.forEach(el => {
      el.classList.add('animated');
    });
  }
}
