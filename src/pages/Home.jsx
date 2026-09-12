import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import PracticeAreaCard from "../components/PracticeAreaCard.jsx";
import LawyerCard from "../components/LawyerCard.jsx";
import ArticleCard from "../components/ArticleCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { practiceAreas } from "../data/practiceAreas.js";
import { lawyers } from "../data/lawyers.js";
import { articles } from "../data/articles.js";

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
      {/* HERO */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/60" />
        </div>
        <div className="relative container-xl pt-28 pb-32 md:pt-40 md:pb-44">
          <p className="text-sm text-gold mb-5 fade-in">JAH BLESS LAW FIRM</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] max-w-2xl fade-in">
            Trusted Counsel.
            <br />
            Strategic Advocacy.
          </h1>
          <p className="mt-7 text-white/75 max-w-lg leading-relaxed fade-in">
            Providing thoughtful legal counsel, strategic representation, and
            practical solutions for individuals, businesses, and institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 fade-in">
            <Button to="/contact" variant="primary">
              Request a Consultation
            </Button>
            <Button to="/practice-areas" variant="outlineLight">
              Explore Our Practice Areas
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce motion-reduce:animate-none">
          <ChevronDown size={22} strokeWidth={1.25} />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              label="ABOUT JAH BLESS"
              title="Legal expertise grounded in integrity, experience, and results."
            />
            <p className="mt-6 text-charcoal/75 leading-relaxed">
              Jah Bless is a professional law firm committed to providing
              clients with clear legal guidance, strong representation, and
              solutions tailored to their unique circumstances.
            </p>
            <Button to="/about" variant="ghost" className="!px-0 mt-6">
              Learn More About Us
              <ArrowRight size={16} />
            </Button>
          </div>
          <div className="order-first lg:order-last">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
              alt="Legal professionals in discussion at the Jah Bless offices"
              className="w-full h-[420px] md:h-[480px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-ivory py-16">
        <div className="container-xl grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {values.map((v) => (
            <div key={v.num} className="border-l border-gold/40 pl-5">
              <p className="font-serif text-2xl text-gold">{v.num}</p>
              <p className="text-sm text-navy mt-2 leading-snug">{v.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <SectionHeading
            label="WHAT WE DO"
            title="Our Practice Areas"
            subtitle="Comprehensive legal services for today's complex challenges."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {practiceAreas.slice(0, 6).map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
          <div className="mt-10">
            <Button to="/practice-areas" variant="outline">
              View All Practice Areas
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURED PRACTICE AREA */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?q=80&w=1200&auto=format&fit=crop"
            alt="Courtroom architecture representing litigation strategy"
            className="w-full h-[420px] md:h-[480px] object-cover"
          />
          <div>
            <p className="text-sm text-gold mb-3">LITIGATION &amp; DISPUTE RESOLUTION</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              When the stakes are high, experience matters.
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              Disputes rarely unfold on a predictable timeline. Our approach
              combines careful preparation with a clear-eyed view of what a
              client stands to gain or lose — so that every step, from early
              negotiation to the courtroom, serves a deliberate strategy.
            </p>
            <Button to="/practice-areas/litigation" variant="outlineLight" className="mt-7">
              Explore Litigation Services
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <SectionHeading
            label="WHY JAH BLESS"
            title="A legal partner built around your interests."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
            {whyChoose.map((item) => (
              <div key={item.title} className="text-center sm:text-left">
                <div className="hairline w-10 mb-4 mx-auto sm:mx-0" />
                <h3 className="font-serif text-xl text-navy">{item.title}</h3>
                <p className="text-sm text-charcoal/70 mt-3 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAWYERS */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-xl">
          <SectionHeading
            label="OUR TEAM"
            title="Meet Our Legal Team"
            subtitle="Experienced professionals committed to protecting your interests."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
            {lawyers.map((lawyer) => (
              <LawyerCard key={lawyer.slug} lawyer={lawyer} />
            ))}
          </div>
          <div className="mt-10">
            <Button to="/lawyers" variant="outline">
              Meet the Full Team
            </Button>
          </div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <CTASection />

      {/* INSIGHTS */}
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <SectionHeading
            label="RESOURCES"
            title="Legal Insights"
            subtitle="Perspectives on law, business, and issues that matter."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading
              label="GET IN TOUCH"
              title="Let's start a conversation."
              subtitle="Tell us how we can assist you — our team responds to every enquiry personally."
            />
          </div>
          <div className="flex lg:justify-end">
            <Button to="/contact" variant="primary">
              Contact the Firm
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
