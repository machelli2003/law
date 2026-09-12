import { useParams, Navigate } from "react-router-dom";
import { Globe2, GraduationCap, Landmark, Sparkles } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import Button from "../components/Button.jsx";
import { getLawyerBySlug } from "../data/lawyers.js";

export default function LawyerProfile() {
  const { slug } = useParams();
  const lawyer = getLawyerBySlug(slug);

  if (!lawyer) return <Navigate to="/lawyers" replace />;

  return (
    <>
      <div className="container-xl pt-8">
        <Breadcrumbs
          items={[
            { to: "/", label: "Home" },
            { to: "/lawyers", label: "Our Lawyers" },
            { label: lawyer.name },
          ]}
        />
      </div>

      <section className="py-10 md:py-16">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-16">
          <div>
            <img
              src={lawyer.image}
              alt={`Portrait of ${lawyer.name}`}
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="mt-8 border border-charcoal/10 bg-ivory p-6">
              <p className="text-xs text-gold mb-3">Sample Profile</p>
              <p className="text-xs text-charcoal/60 leading-relaxed">
                This profile uses demo information and will be replaced with
                real attorney details before launch.
              </p>
              <Button to="/contact" variant="primary" className="w-full mt-5">
                Request a Consultation
              </Button>
            </div>
          </div>

          <div>
            <h1 className="font-serif text-4xl text-navy leading-tight">
              {lawyer.name}
            </h1>
            <p className="text-gold mt-2">{lawyer.position}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {lawyer.practiceAreas.map((p) => (
                <span
                  key={p}
                  className="text-xs px-3 py-1.5 border border-navy/15 text-navy"
                >
                  {p}
                </span>
              ))}
            </div>

            <p className="mt-8 text-charcoal/75 leading-relaxed max-w-2xl">
              {lawyer.bio}
            </p>

            <div className="hairline-full my-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 text-navy mb-3">
                  <GraduationCap size={18} strokeWidth={1.5} className="text-gold" />
                  <h3 className="font-serif text-lg">Education</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-charcoal/75">
                  {lawyer.education.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-navy mb-3">
                  <Landmark size={18} strokeWidth={1.5} className="text-gold" />
                  <h3 className="font-serif text-lg">Professional Memberships</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-charcoal/75">
                  {lawyer.memberships.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-navy mb-3">
                  <Sparkles size={18} strokeWidth={1.5} className="text-gold" />
                  <h3 className="font-serif text-lg">Areas of Expertise</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-charcoal/75">
                  {lawyer.expertise.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-navy mb-3">
                  <Globe2 size={18} strokeWidth={1.5} className="text-gold" />
                  <h3 className="font-serif text-lg">Languages</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-charcoal/75">
                  {lawyer.languages.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
