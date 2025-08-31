"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { useState } from "react";
import Image from "next/image";
import type { Route } from "next";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { href: Route; label: string }[] = [
    { href: "/", label: "صفحه اصلی" },
    { href: "/terms", label: "قوانین و حریم خصوصی" },
    { href: "/faq", label: "سوالات متداول" },
    { href: "/about", label: "درباره ما" },
  ];

  return (
    <header className=" ">
      <Container>
        <div className="flex items-center  justify-between  md:justify-normal ">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 pl-10">
            <Image src="/logo.svg" alt="مانایا | حسابداری شخصی" width={52} height={32} />
            <span className="font-black text-xl text-primary ">مانایا</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 text-sm text-text-secondary">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions: Theme + Mobile Menu */}
          <div className="flex items-center gap-2 md:mr-auto">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              type="button"
              className="md:hidden p-2 text-text-secondary"
              aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden flex flex-col gap-4 py-4 text-sm text-text-secondary border-t border-divider">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}
