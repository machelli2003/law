import Breadcrumbs from "./Breadcrumbs.jsx";

export default function PageHeader({ eyebrow, title, subtitle, crumbs }) {
  return (
    <section className="bg-navy text-white">
      <div className="container-xl pt-16 pb-14 md:pt-20 md:pb-16">
        {crumbs && <Breadcrumbs items={crumbs} light className="mb-6" />}
        {eyebrow && <p className="text-sm text-gold mb-3">{eyebrow}</p>}
        <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-white/70 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div className="hairline-full" />
    </section>
  );
}
