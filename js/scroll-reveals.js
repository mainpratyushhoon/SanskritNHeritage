/* ════════════════════════════════════════════════════════════
   SCROLL-REVEALS.JS — Scroll animations, reveal on scroll
   ══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // Configuration
  const config = {
    rootMargin: '0px 0px -100px 0px', // Trigger when element is 100px from bottom of viewport
    threshold: 0.1
  };

  // Create Intersection Observer
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class to trigger animation
        entry.target.classList.add('visible');
        // Optional: unobserve once visible
        // observer.unobserve(entry.target);
      }
    });
  }, config);

  // Observe all elements with reveal class
  document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
      observer.observe(element);
    });
  });

  // Fallback for browsers that don't support IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
      element.classList.add('visible');
    });
  }
})();
