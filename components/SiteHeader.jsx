"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Services', hash: 'programs' },
  { label: 'Coaching', hash: 'coaching' },
  { label: 'About', href: '/about' },
  { label: 'Results', hash: 'results' },
  { label: 'Reviews', hash: 'testimonials' },
  { label: 'FAQ', hash: 'faq' },
  { label: 'Contact', hash: 'book' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const openButton = useRef(null);
  const closeButton = useRef(null);
  const menuPanel = useRef(null);

  useEffect(() => {
    const updateScroll = () => {
      const threshold = 1.875 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      setScrolled(window.scrollY > threshold);
    };
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.classList.add('menu-open');
    closeButton.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        openButton.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = [...menuPanel.current.querySelectorAll('button, a[href]')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const closeMenu = (restoreFocus = false) => {
    setMenuOpen(false);
    if (restoreFocus) openButton.current?.focus();
  };
  const hrefFor = (link) => link.href || `${isHome ? '' : '/'}#${link.hash}`;

  return (
    <>
      <header id="nav" className={`nav-blur fixed top-0 inset-x-0 z-50 bg-white border-b border-black/10${scrolled ? ' scrolled' : ''}`}>
        <div className="max-w-[90rem] mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Rita Fitness Coach home" onClick={() => closeMenu()}>
            <span className="font-display text-2xl tracking-wide text-black">Rita<span className="text-rose">.</span></span>
            <span className="hidden sm:inline text-[0.625rem] uppercase tracking-[0.3em] text-black/70">Fitness Coach</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-ink/80" aria-label="Main navigation">
            {links.map(link => (
              <Link key={link.label} href={hrefFor(link)} className={`hover:text-mocha${link.href === pathname ? ' text-mocha' : ''}`} aria-current={link.href === pathname ? 'page' : undefined}>
                {link.label}
              </Link>
            ))}
          </nav>
          <a href="https://form.jotform.com/253616429002047" target="_blank" rel="noopener" className="arrow-action hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-md bg-black text-white text-sm hover:bg-rose hover:text-black transition">
            Book a call <span className="arrow-icon" aria-hidden="true"><i className="arrow-current fa-solid fa-arrow-up" /><i className="arrow-next fa-solid fa-arrow-up" /></span>
          </a>
          <button ref={openButton} type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-controls="mobileMenu" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)} className={`menu-toggle lg:hidden w-10 h-10 flex items-center justify-center text-black hover:text-mocha transition${menuOpen ? ' open' : ''}`}>
            <span className="menu-icon" aria-hidden="true">
              <span className="menu-line" />
              <span className="menu-line menu-line-medium" />
              <span className="menu-line menu-line-short" />
            </span>
          </button>
        </div>
      </header>
      <div className={`mobile-menu-backdrop${menuOpen ? ' open' : ''}`} aria-hidden="true" onClick={() => closeMenu(true)} />
      <div ref={menuPanel} id="mobileMenu" className={`mobile-menu-panel text-black${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile menu" aria-hidden={!menuOpen} inert={!menuOpen}>
        <div className="flex items-center justify-between px-6 h-20 border-b border-black/10">
          <span className="font-display text-2xl tracking-wide">Rita<span className="text-rose">.</span></span>
          <button ref={closeButton} type="button" className="w-10 h-10 flex items-center justify-center text-xl" aria-label="Close menu" onClick={() => closeMenu(true)}>
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="px-6 py-6 flex flex-col text-base">
          {links.map(link => (
            <Link key={link.label} href={hrefFor(link)} className={`py-3 border-b border-black/10 hover:text-mocha${link.href === pathname ? ' text-mocha' : ''}`} aria-current={link.href === pathname ? 'page' : undefined} onClick={() => closeMenu()}>
              {link.label}
            </Link>
          ))}
          <a href="https://form.jotform.com/253616429002047" target="_blank" rel="noopener" className="arrow-action mt-6 rounded-md bg-black text-white px-4 py-3 text-center font-semibold hover:bg-rose hover:text-black transition" onClick={() => closeMenu()}>
            Book a call <span className="arrow-icon" aria-hidden="true"><i className="arrow-current fa-solid fa-arrow-up" /><i className="arrow-next fa-solid fa-arrow-up" /></span>
          </a>
        </nav>
      </div>
    </>
  );
}
