import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import CTASection from "../components/CTASection.jsx";
import { lawyers } from "../data/lawyers.js";

const values = [
  "Integrity",
  "Excellence",
  "Confidentiality",
  "Professionalism",
  "Client Commitment",
  "Accountability",
];

export default function About() {
  const managingPartner = lawyers[0];

  return (
    <>
      <PageHeader
        eyebrow="ABOUT THE FIRM"
        title="About Jah Bless"
        subtitle="A professional legal practice built on integrity, strategic thinking, and a commitment to the people we represent."
        crumbs={[{ to: "/", label: "Home" }, { label: "About" }]}
      />

      {/* OUR STORY */}
      <section className="py-20 md:py-28">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading label="OUR STORY" title="A firm built around our clients." />
            <p className="mt-6 text-charcoal/75 leading-relaxed">
              Jah Bless was founded on a straightforward belief: that clients
              deserve legal counsel that is both technically sound and
              genuinely attentive to their circumstances. From individual
              matters to complex commercial transactions, our approach
              remains the same — listen carefully, think strategically, and
              act with integrity.
            </p>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              Today, the firm serves individuals, businesses, and institutions
              across a range of practice areas, guided by the same principles
              that shaped our founding.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
            alt="Jah Bless office environment"
            className="w-full h-[420px] object-cover"
          />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="container-xl grid grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <p className="text-sm text-gold mb-3">OUR MISSION</p>
            <h3 className="font-serif text-2xl text-navy leading-snug">
              To provide accessible, strategic, ethical, and professional
              legal counsel.
            </h3>
          </div>
          <div>
            <p className="text-sm text-gold mb-3">OUR VISION</p>
            <h3 className="font-serif text-2xl text-navy leading-snug">
              To become a respected legal partner known for integrity,
              excellence, and client-focused service.
            </h3>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <SectionHeading label="OUR VALUES" title="What guides our practice." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 mt-12">
            {values.map((value) => (
              <div key={value} className="border-t border-gold/40 pt-4">
                <p className="font-serif text-lg text-navy">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <img
            src={managingPartner.image}
            alt={`Portrait of ${managingPartner.name}`}
            className="w-full aspect-[4/5] object-cover max-w-sm"
          />
          <div>
            <p className="text-sm text-gold mb-3">LEADERSHIP</p>
            <h2 className="font-serif text-3xl text-navy leading-tight">
              {managingPartner.name}
            </h2>
            <p className="text-gold mt-1">{managingPartner.position}</p>
            <p className="mt-5 text-charcoal/75 leading-relaxed max-w-xl">
              {managingPartner.bio}
            </p>
            <a
              href={`/lawyers/${managingPartner.slug}`}
              className="inline-block mt-6 text-sm text-navy border-b border-navy/30 hover:text-gold hover:border-gold transition-colors duration-200"
            >
              View Full Profile
            </a>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL APPROACH */}
      <section className="py-20 md:py-28">
        <div className="container-xl max-w-3xl">
          <SectionHeading label="OUR APPROACH" title="How we work with clients." />
          <p className="mt-6 text-charcoal/75 leading-relaxed">
            Every engagement begins with listening. Before recommending a
            course of action, we take the time to understand a client's
            objectives, constraints, and concerns. From there, we set out a
            clear strategy and keep clients informed at every stage — so that
            decisions are made with full understanding, not uncertainty.
          </p>
          <p className="mt-4 text-charcoal/75 leading-relaxed">
            Confidentiality and professionalism are non-negotiable, whatever
            the size or nature of the matter.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
