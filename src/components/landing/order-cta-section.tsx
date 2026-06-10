import { MessageCircle, Phone, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { glovoUrl, phoneNumber, whatsappUrl } from "./data";

export function OrderCTASection() {
  return (
    <section id="order" className="bg-[#FDCA0D] px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-4xl leading-none sm:text-5xl">
            Hungry? Your Ofada Is One Click Away.
          </h2>
          <p className="text-sm font-medium">Choose your preferred way to order.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <Link
            href={glovoUrl}
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#0B0B0B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#171717]"
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            Order on Glovo
          </Link>
          <Link
            href={whatsappUrl}
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#0B0B0B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#171717]"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
            Chat on WhatsApp
          </Link>
          <Link
            href={`tel:${phoneNumber}`}
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#0B0B0B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#171717]"
          >
            <Phone className="h-5 w-5 text-[#FDCA0D]" aria-hidden="true" />
            Call to Order
          </Link>
        </div>
      </div>
    </section>
  );
}
