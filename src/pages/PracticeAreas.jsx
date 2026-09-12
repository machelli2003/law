import PageHeader from "../components/PageHeader.jsx";
import PracticeAreaCard from "../components/PracticeAreaCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { practiceAreas } from "../data/practiceAreas.js";

export default function PracticeAreas() {
  return (
    <>
      <PageHeader
        eyebrow="WHAT WE DO"
        title="Practice Areas"
        subtitle="Comprehensive legal services for individuals, businesses, and institutions across Ghana."
        crumbs={[{ to: "/", label: "Home" }, { label: "Practice Areas" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
