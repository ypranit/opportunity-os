"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
        >
          Opportunity<span className="gradient-text">OS</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-black/5 dark:hover:bg-white/10"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="gradient-bg rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-indigo-500/40"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="glass absolute inset-x-4 top-full mt-2 rounded-2xl p-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 border-t border-black/5 pt-4 dark:border-white/10">
            <Link
              href="/login"
              className="rounded-full px-4 py-2.5 text-center text-sm font-medium text-foreground transition-colors hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="gradient-bg rounded-full px-4 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
