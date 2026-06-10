import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const siteUrl = "http://abekeomogeolofada.vercel.app";
const siteName = "Abeke Omogeolofada";
const title = "Abeke Omogeolofada | Authentic Ofada Rice in Lagos";
const description =
  "Order authentic Ofada rice, spicy Ayamase sauce, Efo Riro, Moi Moi, Egusi, fresh proteins, bowl packages, and Nigerian comfort meals from Abeke Omogeolofada in Lagos.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  keywords: [
    "Abeke Omogeolofada",
    "Ofada rice Lagos",
    "Ayamase Lagos",
    "Nigerian food delivery",
    "Ofada food vendor",
    "Lagos food delivery",
    "Ofada rice packages",
    "Efo Riro Lagos",
    "Moi Moi Lagos",
    "Egusi soup Lagos",
    "chicken wings Lagos",
    "peppered snails Lagos",
    "turkey Ofada rice",
    "chicken Ofada rice",
    "Nigerian soups Lagos",
    "Nigerian party bowls",
    "bulk food orders Lagos",
    "Lagos catering bowls",
    "authentic Nigerian meals",
    "Yoruba food Lagos",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName,
    title,
    description,
    images: [
      {
        url: "/images/abeke-og-image.png",
        width: 1729,
        height: 910,
        alt: "Abeke Omogeolofada authentic Ofada rice in Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/abeke-og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
