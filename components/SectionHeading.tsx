type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
};

export default function SectionHeading({ id, eyebrow, title, subtitle, light }: Props) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      {eyebrow && (
        <p
          className={`mb-3 inline-block rounded-full px-4 py-1 text-sm font-semibold ${
            light ? "bg-accent text-navy" : "bg-light text-primary"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-3xl font-extrabold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? "text-white/90" : "text-navy/80"}`}>{subtitle}</p>
      )}
    </div>
  );
}
