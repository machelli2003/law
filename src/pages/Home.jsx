import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import PracticeAreaCard from "../components/PracticeAreaCard.jsx";
import LawyerCard from "../components/LawyerCard.jsx";
import ArticleCard from "../components/ArticleCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { practiceAreas } from "../data/practiceAreas.js";
import { lawyers } from "../data/lawyers.js";
import { articles } from "../data/articles.js";
import {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  staggerContainer,
  staggerItem,
  viewport,
} from "../utils/motion.js";

const values = [
  { num: "01", label: "Client-Centred Approach" },
  { num: "02", label: "Strategic Legal Counsel" },
  { num: "03", label: "Professional Excellence" },
  { num: "04", label: "Confidential & Reliable" },
];

const whyChoose = [
  {
    title: "Integrity",
    text: "We approach every matter with professionalism, honesty, and respect for client confidentiality.",
  },
  {
    title: "Strategic Thinking",
    text: "We assess the wider implications of every legal matter and develop practical strategies.",
  },
  {
    title: "Client Focus",
    text: "We take time to understand our clients and communicate clearly throughout the legal process.",
  },
  {
    title: "Excellence",
    text: "We pursue high professional standards across every aspect of our practice.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — full viewport height */}
      <section className="relative bg-navy text-white overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Background image */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/55" />
        </motion.div>

        {/* Content */}
        <div className="relative container-xl py-32 md:py-0">
          <motion.p
            className="text-sm text-gold mb-4 tracking-widest uppercase"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            JAH BLESS LAW FIRM
          </motion.p>

          <motion.h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            Trusted Counsel.
            <br />
            <span className="text-gold">Strategic</span> Advocacy.
          </motion.h1>

          <motion.p
            className="mt-6 text-white/75 max-w-lg leading-relaxed text-sm sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            Providing thoughtful legal counsel, strategic representation, and
            practical solutions for individuals, businesses, and institutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 mt-9"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button to="/contact" variant="primary">
              Request a Consultation
            </Button>
            <Button to="/practice-areas" variant="outlineLight">
              Explore Our Practice Areas
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <ChevronDown size={22} strokeWidth={1.25} />
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-14 md:py-28">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <SectionHeading
              label="ABOUT JAH BLESS"
              title="Legal expertise grounded in integrity, experience, and results."
            />
            <p className="mt-5 text-charcoal/75 leading-relaxed text-sm sm:text-base">
              Jah Bless is a professional law firm committed to providing
              clients with clear legal guidance, strong representation, and
              solutions tailored to their unique circumstances.
            </p>
            <Button to="/about" variant="ghost" className="!px-0 mt-5">
              Learn More About Us
              <ArrowRight size={16} />
            </Button>
          </motion.div>

          <motion.div
            className="order-first lg:order-last overflow-hidden"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
              alt="Legal professionals in discussion at the Jah Bless offices"
              className="w-full h-[260px] sm:h-[360px] md:h-[480px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-ivory py-16">
        <motion.div
          className="container-xl grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {values.map((v) => (
            <motion.div
              key={v.num}
              className="border-l border-gold/40 pl-5"
              variants={staggerItem}
            >
              <p className="font-serif text-2xl text-gold">{v.num}</p>
              <p className="text-sm text-navy mt-2 leading-snug">{v.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <SectionHeading
              label="WHAT WE DO"
              title="Our Practice Areas"
              subtitle="Comprehensive legal services for today's complex challenges."
            />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {practiceAreas.slice(0, 6).map((area) => (
              <motion.div key={area.slug} variants={staggerItem}>
                <PracticeAreaCard area={area} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <Button to="/practice-areas" variant="outline">
              View All Practice Areas
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRACTICE AREA */}
      <section className="bg-navy text-white py-14 md:py-28">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <motion.div
            className="overflow-hidden"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <img
              src="https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?q=80&w=1200&auto=format&fit=crop"
              alt="Courtroom architecture representing litigation strategy"
              className="w-full h-[240px] sm:h-[360px] md:h-[480px] object-cover"
            />
          </motion.div>
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <p className="text-sm text-gold mb-3">LITIGATION &amp; DISPUTE RESOLUTION</p>
            <h2 className="font-serif text-2xl md:text-4xl leading-tight">
              When the stakes are high, experience matters.
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed text-sm sm:text-base">
              Disputes rarely unfold on a predictable timeline. Our approach
              combines careful preparation with a clear-eyed view of what a
              client stands to gain or lose — so that every step, from early
              negotiation to the courtroom, serves a deliberate strategy.
            </p>
            <Button to="/practice-areas/litigation" variant="outlineLight" className="mt-7">
              Explore Litigation Services
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <SectionHeading
              label="WHY JAH BLESS"
              title="A legal partner built around your interests."
              align="center"
            />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {whyChoose.map((item) => (
              <motion.div
                key={item.title}
                className="text-center sm:text-left"
                variants={staggerItem}
              >
                <div className="hairline w-10 mb-4 mx-auto sm:mx-0" />
                <h3 className="font-serif text-xl text-navy">{item.title}</h3>
                <p className="text-sm text-charcoal/70 mt-3 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LAWYERS */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <SectionHeading
              label="OUR TEAM"
              title="Meet Our Legal Team"
              subtitle="Experienced professionals committed to protecting your interests."
            />
          </motion.div>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {lawyers.map((lawyer) => (
              <motion.div key={lawyer.slug} variants={staggerItem}>
                <LawyerCard lawyer={lawyer} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <Button to="/lawyers" variant="outline">
              Meet the Full Team
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <CTASection />

      {/* INSIGHTS */}
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <SectionHeading
              label="RESOURCES"
              title="Legal Insights"
              subtitle="Perspectives on law, business, and issues that matter."
            />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {articles.map((article) => (
              <motion.div key={article.slug} variants={staggerItem}>
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={viewport}>
            <SectionHeading
              label="GET IN TOUCH"
              title="Let's start a conversation."
              subtitle="Tell us how we can assist you — our team responds to every enquiry personally."
            />
          </motion.div>
          <motion.div
            className="flex lg:justify-end"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <Button to="/contact" variant="primary">
              Contact the Firm
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
