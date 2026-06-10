import {
  Bike,
  Leaf,
  ShieldCheck,
  Sparkles,
  Truck,
  Utensils,
} from "lucide-react";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./brand-icons";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const meals = [
  {
    name: "Turkey Supreme",
    description: "Ofada rice, ayamase sauce, turkey, egg, and signature stew.",
    price: "₦9,000",
    badge: "Best Seller",
    image: "/images/ofada-hero.png",
  },
  {
    name: "Chicken Bliss",
    description: "Soft Ofada rice with chicken, egg, and rich local sauce.",
    price: "₦7,000",
    image: "/images/ofada-hero.png",
  },
  {
    name: "Classic Ofada Delight",
    description: "Rich local flavor served fresh with peppered protein.",
    price: "₦4,000",
    image: "/images/ofada-hero.png",
  },
  {
    name: "Royal Snail Treat",
    description: "Ofada rice, plantain, snail, and signature Ofada sauce.",
    price: "₦5,000",
    image: "/images/ofada-hero.png",
  },
  {
    name: "Ofada Regular",
    description: "Simple, satisfying, and authentic Ofada with sauce.",
    price: "₦4,700",
    image: "/images/ofada-hero.png",
  },
  {
    name: "Ofada Rice Only",
    description: "Plain Ofada rice for pairing with your favorite stew.",
    price: "₦2,500",
    image: "/images/ofada-hero.png",
  },
];

export const heroBadges = [
  { label: "100% Recommended on Glovo", icon: ShieldCheck },
  { label: "Fast Delivery", icon: Truck },
  { label: "Fresh Ingredients", icon: Leaf },
];

export const features = [
  {
    title: "Freshly Prepared Meals",
    description: "Every order is cooked fresh with care, heat, and homestyle flavor.",
    icon: Sparkles,
  },
  {
    title: "Authentic Local Taste",
    description: "Traditional recipes with rich, original Lagos Ofada flavor.",
    icon: Utensils,
  },
  {
    title: "Fast Delivery in Lagos",
    description: "Quick, reliable delivery from our kitchen to your doorstep.",
    icon: Bike,
  },
];

export const testimonials = [
  {
    name: "Tosin A.",
    source: "via Glovo",
    content: "The best Ofada rice I have had in Lagos. The ayamase is rich and tasty.",
    rating: 5,
  },
  {
    name: "Ibidun M.",
    source: "via Glovo",
    content: "Always fresh and well packaged. My go-to spot for Ofada.",
    rating: 5,
  },
  {
    name: "Iyenpe O.",
    source: "via Glovo",
    content: "Huge portions, great taste, and fast delivery. Highly recommended.",
    rating: 5,
  },
];

export const menuPriceGroups = [
  {
    title: "Classic Ofada Packages",
    note: "Ofada rice, plantain, Ofada sauce, and package protein.",
    items: [
      {
        name: "Classic Ofada Delight",
        description: "Comes with beef/offals, ponmo, fish, and egg.",
        price: "₦4,000",
      },
      {
        name: "Royal Snail Treat",
        description: "Ofada rice, plantain, snail, and Ofada sauce.",
        price: "₦5,000",
      },
      {
        name: "Chicken Bliss",
        description: "Comes with beef/offals, ponmo, fish, and egg.",
        price: "₦7,000",
      },
      {
        name: "Turkey Supreme",
        description: "Comes with beef/offals, fish, ponmo, and egg.",
        price: "₦9,000",
      },
    ],
  },
  {
    title: "Ofada/Ayamase Bowl Packages",
    note: "Bowl-size packages for sharing and bulk orders.",
    items: [
      {
        name: "Mini Ayamase/Ofada Bowl",
        description: "1.5L. Comes with beef/offals, fish, ponmo, and eggs.",
        price: "₦17,500",
      },
      {
        name: "The Royal Mini Bowl",
        description: "1.5L. Comes with snail, beef/offals, ponmo, fish, and eggs.",
        price: "₦22,500",
      },
      {
        name: "Ayamase Comfort Bowl",
        description: "2L. Comes with beef/offals, fish, ponmo, and fish.",
        price: "₦25,000",
      },
      {
        name: "Special Ayamase Bowl",
        description: "2L. Comes with snails, beef/offals, ponmo, fish, and eggs.",
        price: "₦30,000",
      },
      {
        name: "Jumbo Ayamase Feast Bowl",
        description: "3L. Comes with beef/offals, ponmo, fish, and eggs.",
        price: "₦37,500",
      },
      {
        name: "Oba's Special Ayamase Bowl",
        description: "3L. Comes with snails, beef/offals, ponmo, fish, and eggs.",
        price: "₦50,000",
      },
      {
        name: "Gold Ayamase Bowl",
        description: "4L. Comes with beef/offals, ponmo, fish, and eggs.",
        price: "₦50,000",
      },
      {
        name: "Gold Snail Bowl",
        description: "4L. Comes with snails, beef/offals, ponmo, fish, and eggs.",
        price: "₦65,000",
      },
      {
        name: "Platinum Ayamase Bowl",
        description: "5L. Comes with beef/offals, ponmo, fish, and eggs.",
        price: "₦60,000",
      },
      {
        name: "Platinum Snail Bowl",
        description: "5L. Comes with snails, beef/offals, ponmo, fish, and eggs.",
        price: "₦80,000",
      },
    ],
  },
  {
    title: "Moi Moi",
    note: "Minimum order: 10 pieces.",
    items: [
      { name: "Moi Moi With Egg", description: "Per 1 piece.", price: "₦1,000" },
      { name: "Moi Moi With Fish", description: "Per 1 piece.", price: "₦1,200" },
      { name: "Moi Moi With Egg and Fish", description: "Per 1 piece.", price: "₦1,500" },
    ],
  },
  {
    title: "Extra(s)",
    note: "Add-ons for your Ofada order.",
    items: [
      { name: "Extra Scoop of Ofada Rice", description: "Single scoop.", price: "₦700" },
      { name: "Extra Wrap of Ofada Rice", description: "Wrapped portion.", price: "₦1,000" },
      { name: "Plantain", description: "Extra side portion.", price: "₦500" },
      { name: "Chicken", description: "Extra protein.", price: "₦3,000" },
      { name: "Turkey", description: "Extra protein.", price: "₦5,000" },
      { name: "Snails", description: "Small size.", price: "₦800" },
    ],
  },
];

export const stewSizes = {
  title: "Stew Sizes",
  sizes: ["1L", "1.5L", "2L", "3L"],
  rows: [
    { name: "Hake Fish", prices: ["₦18,000", "₦27,000", "₦35,000", "₦50,000"] },
    { name: "Turkey", prices: ["₦20,000", "₦30,000", "₦40,000", "₦60,000"] },
    { name: "Chicken", prices: ["₦15,000", "₦22,500", "₦30,000", "₦45,000"] },
    { name: "Beef", prices: ["₦15,000", "₦22,500", "₦30,000", "₦45,000"] },
    { name: "Assorted", prices: ["₦15,000", "₦22,500", "₦30,000", "₦45,000"] },
    { name: "Croaker Fish", prices: ["₦20,000", "₦30,000", "₦40,000", "₦60,000"] },
  ],
};

const videoPath = (filename: string) => `/videos/${encodeURIComponent(filename)}`;

export const socialVideos = [
  {
    title: "Fresh Ofada Moments",
    src: videoPath(
      "#explore #ofadavendorinlagos #eforiro #abekeomogeolofada #lagosfoodvendor.mp4",
    ),
  },
  {
    title: "Ayamase Sauce",
    src: videoPath(
      "Ayamase sauce😋😋For faster response,kindly send us a Message on WhatsApp at 08160619155 to plac.mp4",
    ),
  },
  {
    title: "Efo Riro",
    src: videoPath(
      "Efo Riro😋😋😋For faster response,,kindly send us a WhatsApp message on 08160619155 to place you.mp4",
    ),
  },
  {
    title: "Moi Moi Elewe",
    src: videoPath(
      "Moi Moi EleweMoi moi with fish 1,200Moi moi with egg-1,000(MOQ 10pieces)Kindly send us a WhatsAp.mp4",
    ),
  },
  {
    title: "1L Combo Deal",
    src: videoPath(
      "Our 1L COMBO DEALPrice- 15,000For faster response,kindly send us a WhatsApp message on 081606191.mp4",
    ),
  },
  {
    title: "Signature Ofada Sauce",
    src: videoPath(
      "Our Signature Ofada sauceeee😋😋😋Bowl size- 1.5L#explore #abekeomogeolofada #ofadasauce #ayamas.mp4",
    ),
  },
  {
    title: "Peppered Snails Jumbo",
    src: videoPath(
      "Peppered SnailsSize-JUMBOPRICE- 6,000 per 1(MOQ 10pieces)For faster response,Kindly send us a Me.mp4",
    ),
  },
  {
    title: "Peppered Snails",
    src: videoPath(
      "Peppered Snails😋😋Price-2,500 per 1(MOQ-10pieces)Send a DM or click the link on our Bio to plac.mp4",
    ),
  },
];

export const quickLinks = navLinks;

export const glovoUrl =
  "https://glovoapp.com/en/ng/lagos/stores/abeke-omogeolofada-los";
export const phoneNumber = "+2348160619155";
export const displayPhoneNumber = "+234 816 061 9155";
export const whatsappUrl = "https://wa.me/2348160619155";

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/abeke_omogeolofada/",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@abekeomogeolofada",
    icon: TikTokIcon,
  },
  {
    label: "Facebook",
    href: "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1LW8MwiGgE%2F%3Fmibextid%3DwwXIfr%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AUCuoOupeFJpxg2-QdVKDzgIS3hRZuoqKvlwBwR_rMpNrpcrwGglahiyEggJXBcJDmqHKHES4jLQ4C3w0Pusew86xUtNgreprrFDAk2KwYFZ2Gaj5tM-1JPKeG0OcwANziLUmB0",
    icon: FacebookIcon,
  },
];
