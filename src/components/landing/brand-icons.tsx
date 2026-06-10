import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect width="16" height="16" x="4" y="4" rx="4" />
      <circle cx="12" cy="12" r="3.25" />
      <path d="M16.75 7.25h.01" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M15.4 3c.35 2.38 1.68 3.8 4.02 3.95v3.16a7.16 7.16 0 0 1-4.02-1.23v5.92c0 3-2.03 5.2-4.95 5.2A4.84 4.84 0 0 1 5.5 15.1c0-3.08 2.35-5.17 5.67-4.92v3.25c-1.55-.24-2.42.48-2.42 1.67 0 1.05.78 1.75 1.75 1.75 1.1 0 1.8-.7 1.8-2.05V3h3.1Z" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.2 8.2V6.55c0-.8.54-.98.92-.98h2.34V2.04L14.23 2c-3.6 0-4.42 2.7-4.42 4.43V8.2H7v3.96h2.81V22h4.39v-9.84h2.98l.47-3.96H14.2Z" />
    </svg>
  );
}
