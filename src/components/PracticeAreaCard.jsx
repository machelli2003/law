import { Link } from "react-router-dom";
import {
  Building2,
  Gavel,
  Home as HomeIcon,
  Users,
  Briefcase,
  Scale,
  Landmark,
  Lightbulb,
  Plane,
  ScrollText,
  ArrowRight,
} from "lucide-react";

const icons = {
  "corporate-commercial": Building2,
  litigation: Gavel,
  "real-estate-property": HomeIcon,
  "family-law": Users,
  "employment-labour": Briefcase,
  "criminal-law": Scale,
  "banking-finance": Landmark,
  "intellectual-property": Lightbulb,
  "immigration-law": Plane,
  "estate-planning-probate": ScrollText,
};

export default function PracticeAreaCard({ area }) {
  const Icon = icons[area.slug] || Scale;
  return (
    <Link
      to={`/practice-areas/${area.slug}`}
      className="group block border border-charcoal/10 p-7 hover:border-gold/60 transition-colors duration-300 bg-white"
    >
      <Icon size={28} strokeWidth={1.25} className="text-gold" />
      <h3 className="font-serif text-xl text-navy mt-5 mb-2 leading-snug">
        {area.name}
      </h3>
      <p className="text-sm text-charcoal/70 leading-relaxed">{area.short}</p>
      <span className="inline-flex items-center gap-1.5 text-sm text-navy mt-5 group-hover:text-gold transition-colors duration-200">
        Learn More
        <ArrowRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
