/* ════════════════════════════════════════════════════════════
   NAVIGATION.JS — Nav menu toggle, active link highlighting
   ══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // Mobile menu toggle
  const navToggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');

  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener('click', function() {
      this.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navToggleBtn.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = navToggleBtn.contains(event.target) || navMenu.contains(event.target);
      if (!isClickInside && navMenu.classList.contains('open')) {
        navToggleBtn.classList.remove('open');
        navMenu.classList.remove('open');
      }
    });
  }

  // Active link highlighting
  function updateActiveLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul a');

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');

      // Check if current page matches the link href
      if (currentPage.includes(href) && href !== '#') {
        link.classList.add('active');
      }

      // For homepage, activate on '/' or 'index.html'
      if ((currentPage === '/' || currentPage.endsWith('index.html')) &&
          (href === '/' || href === 'index.html' || href === './')) {
        link.classList.add('active');
      }
    });
  }

  // Update active link on page load
  document.addEventListener('DOMContentLoaded', updateActiveLink);

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Close mobile menu on scroll
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    if (navToggleBtn && navMenu && navMenu.classList.contains('open')) {
      navToggleBtn.classList.remove('open');
      navMenu.classList.remove('open');
    }
    lastScrollTop = window.scrollY;
  });
})();
