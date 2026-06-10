import { MessageCircle, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { glovoUrl, menuPriceGroups, stewSizes, whatsappUrl } from "./data";

export function FullMenuPricing() {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-[#0B0B0B] p-5 text-white shadow-[0_24px_60px_rgba(11,11,11,0.24)] sm:p-6 lg:p-8">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-2xl font-extrabold leading-tight text-[#FDCA0D]">
          Full Menu & Packages
        </p>
        <p className="mx-auto max-w-2xl text-sm leading-6 text-white/70">
          Browse complete Ofada, Ayamase, stew, Moi Moi, and extra pricing before you
          place your order.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {menuPriceGroups.map((group, index) => (
          <details
            key={group.title}
            open={index === 0}
            className="group rounded-lg border border-white/10 bg-[#171717]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 marker:hidden">
              <span className="flex flex-col gap-1">
                <span className="text-2xl font-extrabold leading-tight text-[#FDCA0D]">
                  {group.title}
                </span>
                <span className="text-sm leading-6 text-white/62">{group.note}</span>
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#FDCA0D]/50 text-[#FDCA0D] transition group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="border-t border-white/10 p-5">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5">
                {group.items.map((item) => (
                  <article
                    key={item.name}
                    className="flex min-h-40 flex-col justify-between gap-5 rounded-lg bg-[#0B0B0B] p-5 ring-1 ring-white/10"
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-bold leading-tight text-white">
                        {item.name}
                      </h3>
                      <p className="text-sm leading-6 text-white/62">{item.description}</p>
                    </div>
                    <p className="text-xl font-extrabold leading-tight text-[#FDCA0D]">
                      {item.price}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </details>
        ))}

        <details className="group rounded-lg border border-white/10 bg-[#171717]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 marker:hidden">
            <span className="flex flex-col gap-1">
              <span className="text-2xl font-extrabold leading-tight text-[#FDCA0D]">
                {stewSizes.title}
              </span>
              <span className="text-sm leading-6 text-white/62">
                Choose your preferred stew protein and bowl size.
              </span>
            </span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#FDCA0D]/50 text-[#FDCA0D] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="border-t border-white/10 p-5">
            <div className="hidden overflow-hidden rounded-lg ring-1 ring-white/10 md:block">
              <table className="w-full border-collapse text-left">
                <thead className="bg-[#0B0B0B]">
                  <tr>
                    <th className="px-4 py-3 text-base font-semibold text-[#FDCA0D]">
                      Stew
                    </th>
                    {stewSizes.sizes.map((size) => (
                      <th
                        key={size}
                        className="px-4 py-3 text-right text-sm font-semibold text-[#FDCA0D]"
                      >
                        {size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {stewSizes.rows.map((row) => (
                    <tr key={row.name} className="border-t border-white/10">
                      <td className="px-4 py-3 text-base font-semibold text-white">
                        {row.name}
                      </td>
                      {row.prices.map((price, priceIndex) => (
                        <td
                          key={`${row.name}-${stewSizes.sizes[priceIndex]}`}
                          className="px-4 py-3 text-right text-sm font-semibold text-white/86"
                        >
                          {price}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 md:hidden">
              {stewSizes.rows.map((row) => (
                <article
                  key={row.name}
                  className="rounded-lg bg-[#0B0B0B] p-5 ring-1 ring-white/10"
                >
                  <h3 className="text-base font-semibold leading-tight text-white">{row.name}</h3>
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {row.prices.map((price, priceIndex) => (
                      <div
                        key={`${row.name}-${stewSizes.sizes[priceIndex]}`}
                        className="rounded-md bg-white/5 p-3"
                      >
                        <p className="text-xs font-bold text-[#FDCA0D]">
                          {stewSizes.sizes[priceIndex]}
                        </p>
                        <p className="text-sm font-semibold leading-tight text-white">
                          {price}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </details>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:mx-auto lg:w-fit">
        <Link
          href={whatsappUrl}
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#25D366] px-5 py-3 text-sm font-bold text-[#0B0B0B] transition hover:bg-white"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Order via WhatsApp
        </Link>
        <Link
          href={glovoUrl}
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#FDCA0D] px-5 py-3 text-sm font-bold text-[#0B0B0B] transition hover:bg-white"
        >
          <ShoppingBag className="h-5 w-5" aria-hidden="true" />
          Order on Glovo
        </Link>
      </div>
    </div>
  );
}
