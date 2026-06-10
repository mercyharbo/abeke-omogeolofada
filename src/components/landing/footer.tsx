import Link from "next/link";
import {
  displayPhoneNumber,
  phoneNumber,
  quickLinks,
  socialLinks,
} from "./data";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0B0B0B] px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="flex flex-col gap-3">
          <Link href="#home" className="font-brand text-5xl leading-none text-[#FDCA0D]">
            Abeke
          </Link>
          <p className="font-heading text-lg text-white">Omogeolofada</p>
          <p className="text-sm leading-6 text-white/62">
            Premium Lagos Ofada rice, cooked fresh and delivered with care.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-2xl">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-[#FDCA0D]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-2xl">Contact Us</h3>
          <address className="flex flex-col gap-2 text-sm not-italic text-white/70">
            <Link href={`tel:${phoneNumber}`} className="hover:text-[#FDCA0D]">
              {displayPhoneNumber}
            </Link>
            <span>Lagos, Nigeria</span>
            <Link href="mailto:abekeomogeolofada@gmail.com" className="hover:text-[#FDCA0D]">
              abekeomogeolofada@gmail.com
            </Link>
          </address>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-2xl">Follow Us</h3>
          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-[#FDCA0D] hover:text-[#FDCA0D]"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl pt-10">
        <p className="text-sm text-white/54">© 2026 Abeke Omogeolofada. All rights reserved.</p>
      </div>
    </footer>
  );
}
