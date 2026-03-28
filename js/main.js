/* ============================================
   THE CRAZY GRAPHIC GUY — Main JS
   ============================================ */

(function () {
  'use strict';

  /* --- Theme Toggle --- */
  const THEME_KEY = 'tcgg-theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  setTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle button
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    // Mobile hamburger
    const hamburger = document.querySelector('.nav__hamburger');
    const mobileMenu = document.querySelector('.nav__mobile-menu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
      });

      // Close mobile menu on link click
      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          hamburger.classList.remove('active');
          mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }

    // Mobile dropdowns (accordion style)
    document.querySelectorAll('.nav__mobile-dropdown-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const sub = this.nextElementSibling;
        if (sub) {
          sub.classList.toggle('active');
          this.classList.toggle('active');
        }
      });
    });

    // Tab switching
    document.querySelectorAll('[data-tab-group]').forEach(function (group) {
      const buttons = group.querySelectorAll('[data-tab]');
      const panels = group.querySelectorAll('[data-tab-panel]');

      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          const target = this.getAttribute('data-tab');

          buttons.forEach(function (b) { b.classList.remove('active'); });
          panels.forEach(function (p) { p.classList.remove('active'); });

          this.classList.add('active');
          var panel = group.querySelector('[data-tab-panel="' + target + '"]');
          if (panel) panel.classList.add('active');
        });
      });
    });
  });
})();
