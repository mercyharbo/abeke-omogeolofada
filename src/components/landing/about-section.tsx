import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#0B0B0B] px-5 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg border border-[#FDCA0D]/30 bg-[#171717]">
          <div className="relative aspect-[1.2]">
            <Image
              src="/images/ofada-hero.png"
              alt="Fresh Abeke Ofada rice meal served hot"
              fill
              sizes="(min-width: 1024px) 48vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-sm font-bold text-[#FDCA0D]">About Us</p>
          <h2 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Bringing The Real Taste of Ofada To Lagos
          </h2>
          <p className="max-w-xl text-base leading-8 text-white/78">
            At Abeke Omogeolofada, we are passionate about delivering the rich,
            authentic taste of Ofada rice and signature Ayamase meals. Every meal is
            freshly prepared with quality ingredients, traditional recipes, and the warmth
            of home.
          </p>
          <Link
            href="#contact"
            className="inline-flex min-h-12 w-fit items-center gap-3 rounded-md bg-[#FDCA0D] px-6 py-3 text-sm font-bold text-[#0B0B0B] transition hover:bg-white"
          >
            Learn More About Us
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
