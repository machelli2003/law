import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import CTASection from "../components/CTASection.jsx";
import { lawyers } from "../data/lawyers.js";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
  staggerItem,
  viewport,
} from "../utils/motion.js";

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
      <section className="py-14 md:py-28">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <SectionHeading label="OUR STORY" title="A firm built around our clients." />
            <p className="mt-5 text-charcoal/75 leading-relaxed text-sm sm:text-base">
              Jah Bless was founded on a straightforward belief: that clients
              deserve legal counsel that is both technically sound and
              genuinely attentive to their circumstances. From individual
              matters to complex commercial transactions, our approach
              remains the same — listen carefully, think strategically, and
              act with integrity.
            </p>
            <p className="mt-4 text-charcoal/75 leading-relaxed text-sm sm:text-base">
              Today, the firm serves individuals, businesses, and institutions
              across a range of practice areas, guided by the same principles
              that shaped our founding.
            </p>
          </motion.div>
          <motion.div
            className="overflow-hidden"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
              alt="Jah Bless office environment"
              className="w-full h-[260px] sm:h-[360px] md:h-[420px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-ivory py-20 md:py-24">
        <motion.div
          className="container-xl grid grid-cols-1 md:grid-cols-2 gap-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div variants={staggerItem}>
            <p className="text-sm text-gold mb-3">OUR MISSION</p>
            <h3 className="font-serif text-2xl text-navy leading-snug">
              To provide accessible, strategic, ethical, and professional
              legal counsel.
            </h3>
          </motion.div>
          <motion.div variants={staggerItem}>
            <p className="text-sm text-gold mb-3">OUR VISION</p>
            <h3 className="font-serif text-2xl text-navy leading-snug">
              To become a respected legal partner known for integrity,
              excellence, and client-focused service.
            </h3>
          </motion.div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <SectionHeading label="OUR VALUES" title="What guides our practice." />
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {values.map((value) => (
              <motion.div
                key={value}
                className="border-t border-gold/40 pt-4"
                variants={staggerItem}
              >
                <p className="font-serif text-lg text-navy">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <motion.img
            src={managingPartner.image}
            alt={`Portrait of ${managingPartner.name}`}
            className="w-full aspect-[4/5] object-cover max-w-sm"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          />
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <p className="text-sm text-gold mb-3">LEADERSHIP</p>
            <h2 className="font-serif text-3xl text-navy leading-tight">
              {managingPartner.name}
            </h2>
            <p className="text-gold mt-1">{managingPartner.position}</p>
            <p className="mt-5 text-charcoal/75 leading-relaxed max-w-xl text-sm sm:text-base">
              {managingPartner.bio}
            </p>
            <a
              href={`/lawyers/${managingPartner.slug}`}
              className="inline-block mt-6 text-sm text-navy border-b border-navy/30 hover:text-gold hover:border-gold transition-colors duration-200"
            >
              View Full Profile
            </a>
          </motion.div>
        </div>
      </section>

      {/* PROFESSIONAL APPROACH */}
      <section className="py-20 md:py-28">
        <motion.div
          className="container-xl max-w-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <SectionHeading label="OUR APPROACH" title="How we work with clients." />
          <p className="mt-6 text-charcoal/75 leading-relaxed text-sm sm:text-base">
            Every engagement begins with listening. Before recommending a
            course of action, we take the time to understand a client's
            objectives, constraints, and concerns. From there, we set out a
            clear strategy and keep clients informed at every stage — so that
            decisions are made with full understanding, not uncertainty.
          </p>
          <p className="mt-4 text-charcoal/75 leading-relaxed text-sm sm:text-base">
            Confidentiality and professionalism are non-negotiable, whatever
            the size or nature of the matter.
          </p>
        </motion.div>
      </section>

      <CTASection />
    </>
  );
}
