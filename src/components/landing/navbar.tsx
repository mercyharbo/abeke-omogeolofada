"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0B]/95 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8"
      >
        <Link
          href="#home"
          className="flex flex-col font-brand text-3xl leading-none text-[#FDCA0D]"
          aria-label="Abeke Omogeolofada home"
        >
          Abeke
          <span className="text-xs font-semibold leading-none text-white">Omogeolofada</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white transition hover:text-[#FDCA0D]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <OrderButton />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#0B0B0B] px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-base font-semibold text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <OrderButton className="w-full justify-center" />
          </div>
        </div>
      ) : null}
    </header>
  );
}

function OrderButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#order-flow"
      className={`inline-flex min-h-12 items-center gap-2 rounded-md bg-[#FDCA0D] px-5 py-3 text-sm font-bold text-[#0B0B0B] transition hover:bg-white ${className}`}
    >
      <ShoppingBag className="h-5 w-5" aria-hidden="true" />
      Order Now
    </Link>
  );
}
