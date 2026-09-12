import PageHeader from "../components/PageHeader.jsx";
import LawyerCard from "../components/LawyerCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { lawyers } from "../data/lawyers.js";

export default function Lawyers() {
  return (
    <>
      <PageHeader
        eyebrow="OUR TEAM"
        title="Meet Our Legal Team"
        subtitle="Experienced professionals committed to protecting your interests."
        crumbs={[{ to: "/", label: "Home" }, { label: "Our Lawyers" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <p className="text-xs text-charcoal/45 mb-10 max-w-md">
            The profiles below are sample content for demonstration purposes
            and will be replaced with the firm's actual attorney information.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {lawyers.map((lawyer) => (
              <LawyerCard key={lawyer.slug} lawyer={lawyer} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
