import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import CTASection from "../components/CTASection.jsx";
import { practiceAreas, getPracticeAreaBySlug } from "../data/practiceAreas.js";

export default function PracticeAreaDetail() {
  const { slug } = useParams();
  const area = getPracticeAreaBySlug(slug);

  if (!area) return <Navigate to="/practice-areas" replace />;

  const related = practiceAreas
    .filter((p) => p.slug !== area.slug)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="PRACTICE AREA"
        title={area.name}
        crumbs={[
          { to: "/", label: "Home" },
          { to: "/practice-areas", label: "Practice Areas" },
          { label: area.name },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14">
          <div>
            <h2 className="font-serif text-2xl text-navy mb-4">Overview</h2>
            <p className="text-charcoal/75 leading-relaxed">{area.overview}</p>

            <h2 className="font-serif text-2xl text-navy mt-12 mb-5">
              Services We Provide
            </h2>
            <ul className="space-y-3">
              {area.services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span className="text-charcoal/80">{service}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl text-navy mt-12 mb-4">
              Who We Assist
            </h2>
            <p className="text-charcoal/75 leading-relaxed">{area.whoWeAssist}</p>

            <h2 className="font-serif text-2xl text-navy mt-12 mb-4">
              Our Approach
            </h2>
            <p className="text-charcoal/75 leading-relaxed">{area.approach}</p>
          </div>

          <aside className="lg:pl-4">
            <div className="border border-charcoal/10 p-7 bg-ivory">
              <h3 className="font-serif text-xl text-navy mb-2">
                Discuss Your Matter
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                Speak with our team about how we can assist with your
                specific circumstances.
              </p>
              <Link
                to="/contact"
                className="block text-center w-full px-5 py-3 bg-navy text-white text-sm tracking-wide hover:bg-navy/90 transition-colors duration-200"
              >
                Request a Consultation
              </Link>
            </div>

            <div className="mt-10">
              <h3 className="text-sm text-gold mb-4">Related Practice Areas</h3>
              <ul className="space-y-3">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/practice-areas/${p.slug}`}
                      className="text-sm text-navy border-b border-transparent hover:border-gold hover:text-gold transition-colors duration-200"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
