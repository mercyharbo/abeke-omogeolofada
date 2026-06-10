import { socialVideos } from "./data";
import { SectionHeading } from "./section-heading";

export function SocialVideosSection() {
  return (
    <section className="bg-[#FFF8DF] px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading eyebrow="From Our Kitchen" title="Watch The Flavor" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {socialVideos.map((video) => (
            <article
              key={video.src}
              className="overflow-hidden rounded-lg bg-[#0B0B0B] shadow-[0_20px_40px_rgba(11,11,11,0.2)] ring-1 ring-black/10"
            >
              <div className="relative aspect-[9/16] bg-[#171717]">
                <video
                  className="h-full w-full object-cover"
                  src={video.src}
                  aria-label={video.title}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0B0B] to-transparent p-4">
                  <h3 className="font-heading text-2xl leading-none text-white">
                    {video.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
