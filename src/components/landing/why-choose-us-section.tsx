import { features } from "./data";
import { SectionHeading } from "./section-heading";

export function WhyChooseUsSection() {
  return (
    <section className="bg-white px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading title="Why Choose Us?" />
        <div className="grid gap-5 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="flex gap-5 rounded-lg bg-[#FFF8DF] p-5 ring-1 ring-border"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#FDCA0D] text-[#0B0B0B]">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-3xl leading-none">{feature.title}</h3>
                  <p className="text-sm leading-6 text-black/70">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
