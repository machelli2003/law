export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {label && (
        <p
          className={`text-sm font-medium mb-3 ${
            light ? "text-gold-light" : "text-gold"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.15] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/70" : "text-charcoal/75"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
