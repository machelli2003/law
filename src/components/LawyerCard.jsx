import { Link } from "react-router-dom";

export default function LawyerCard({ lawyer }) {
  return (
    <Link to={`/lawyers/${lawyer.slug}`} className="group block">
      <div className="overflow-hidden bg-ivory">
        <img
          src={lawyer.image}
          alt={`Portrait of ${lawyer.name}`}
          className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      <div className="pt-4">
        <h3 className="font-serif text-lg text-navy">{lawyer.name}</h3>
        <p className="text-sm text-gold mt-0.5">{lawyer.position}</p>
        <p className="text-xs text-charcoal/60 mt-1">
          {lawyer.practiceAreas[0]}
        </p>
        <span className="inline-block text-xs text-navy mt-3 border-b border-navy/30 group-hover:border-gold group-hover:text-gold transition-colors duration-200">
          View Profile
        </span>
      </div>
    </Link>
  );
}
