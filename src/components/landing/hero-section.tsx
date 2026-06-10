import { CheckCircle2, MessageCircle, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { glovoUrl, heroBadges, whatsappUrl } from "./data";

export function HeroSection() {
  return (
    <section id="home" className="overflow-hidden bg-[#0B0B0B] text-white">
      <div className="mx-auto grid min-h-[calc(100vh-77px)] w-full max-w-7xl items-center gap-12 px-5 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <p className="font-heading text-3xl leading-none text-white/85">Authentic</p>
            <h1 className="max-w-3xl font-heading text-6xl leading-[0.92] text-white sm:text-7xl lg:text-8xl">
              <span className="block text-[#FDCA0D]">Ofada Rice,</span>
              Made Fresh With Love
            </h1>
            <p className="max-w-xl text-base leading-8 text-white/78 sm:text-lg">
              Enjoy rich, spicy Ayamase sauce, soft Ofada rice, and perfectly prepared
              proteins delivered fresh to your doorstep.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={glovoUrl}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#FDCA0D] px-6 py-3 text-base font-bold text-[#0B0B0B] transition hover:bg-white"
            >
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              Order on Glovo
            </Link>
            <Link
              href={whatsappUrl}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-[#FDCA0D] px-6 py-3 text-base font-bold text-white transition hover:bg-[#FDCA0D] hover:text-[#0B0B0B]"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
              Order via WhatsApp
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 border-white/10 sm:border-r sm:last:border-r-0"
                >
                  <Icon className="h-8 w-8 shrink-0 text-[#FDCA0D]" aria-hidden="true" />
                  <span className="text-sm leading-5 text-white/84">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[560px]">
          <div className="absolute inset-x-0 top-8 h-[78%] rounded-full bg-[#FDCA0D]/16 blur-3xl" />
          <div className="relative overflow-hidden rounded-full border border-white/10 bg-[#171717] shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
            <div className="relative aspect-square">
              <Image
                src="/images/ofada-hero.png"
                alt="Plate of Abeke Omogeolofada Ofada rice with ayamase sauce and proteins"
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 92vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 flex h-32 w-32 flex-col items-center justify-center rounded-full border-4 border-[#FDCA0D] bg-[#0B0B0B] p-4 text-center shadow-2xl sm:h-40 sm:w-40">
            <CheckCircle2 className="h-6 w-6 text-[#FDCA0D]" aria-hidden="true" />
            <p className="font-heading text-5xl leading-none sm:text-6xl">100%</p>
            <p className="text-[10px] font-bold leading-tight sm:text-xs">Recommended on Glovo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
