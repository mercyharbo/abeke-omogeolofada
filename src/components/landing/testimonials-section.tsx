import { Quote, Star } from "lucide-react";
import { testimonials } from "./data";
import { SectionHeading } from "./section-heading";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-[#0B0B0B] px-5 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading title="What Our Customers Say" light />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-56 flex-col justify-between gap-6 rounded-lg bg-[#171717] p-7 ring-1 ring-white/8"
            >
              <div className="flex flex-col gap-4">
                <Quote className="h-8 w-8 text-[#FDCA0D]" aria-hidden="true" />
                <p className="leading-7 text-white/82">{testimonial.content}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1" aria-label={`${testimonial.rating} star rating`}>
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-[#FDCA0D] text-[#FDCA0D]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm text-white/62">
                  {testimonial.name}, {testimonial.source}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
