type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, light = false }: SectionHeadingProps) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 text-center">
      {eyebrow ? (
        <p className={`font-heading text-xl ${light ? "text-[#FDCA0D]" : "text-[#0B0B0B]"}`}>
          {eyebrow}
        </p>
      ) : null}
      <div className="flex items-center justify-center gap-4">
        <span className="h-1 w-12 rounded-full bg-[#FDCA0D]" aria-hidden="true" />
        <h2
          className={`font-heading text-4xl leading-none sm:text-5xl ${
            light ? "text-white" : "text-[#0B0B0B]"
          }`}
        >
          {title}
        </h2>
        <span className="h-1 w-12 rounded-full bg-[#FDCA0D]" aria-hidden="true" />
      </div>
    </div>
  );
}
