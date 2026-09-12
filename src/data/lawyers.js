// Demo / sample attorney profiles.
// Replace with the firm's real attorney information before launch.
export const lawyers = [
  {
    slug: "james-hartwell",
    name: "James Hartwell",
    position: "Managing Partner",
    practiceAreas: ["Corporate & Commercial Law", "Banking & Finance"],
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    bio: "James leads the firm's corporate and commercial practice, advising businesses and financial institutions on transactions and governance matters. He is known for a measured, practical approach to complex commercial questions.",
    education: ["J.D., Harvard Law School", "B.A., Georgetown University"],
    memberships: ["American Bar Association", "State Bar Association"],
    expertise: ["Corporate structuring", "Commercial contracts", "Financial regulation"],
    languages: ["English", "Spanish"],
  },
  {
    slug: "sarah-mitchell",
    name: "Sarah Mitchell",
    position: "Partner — Corporate & Commercial",
    practiceAreas: ["Corporate & Commercial Law", "Intellectual Property"],
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    bio: "Sarah works closely with businesses on formation, contracts, and brand protection. She brings particular attention to helping growing companies build sound legal foundations early.",
    education: ["J.D., Yale Law School", "B.S., University of Michigan"],
    memberships: ["American Bar Association", "State Bar Association"],
    expertise: ["Business formation", "Trademark protection", "Commercial agreements"],
    languages: ["English", "French"],
  },
  {
    slug: "daniel-carter",
    name: "Daniel Carter",
    position: "Associate — Litigation",
    practiceAreas: ["Litigation & Dispute Resolution", "Employment & Labor Law"],
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    bio: "Daniel represents clients in civil and commercial disputes, with a focus on preparation and clear strategic thinking from the outset of a matter.",
    education: ["J.D., Columbia Law School", "B.A., University of Virginia"],
    memberships: ["American Bar Association", "State Bar Association"],
    expertise: ["Civil litigation", "Commercial disputes", "Workplace disputes"],
    languages: ["English", "Spanish"],
  },
  {
    slug: "nina-hayes",
    name: "Nina Hayes",
    position: "Associate — Property & Real Estate",
    practiceAreas: ["Real Estate & Property Law", "Estate Planning & Probate"],
    image:
      "https://images.unsplash.com/photo-1580894732930-0babd100d356?q=80&w=800&auto=format&fit=crop",
    bio: "Nina advises individuals and developers on property transactions and estate matters, with particular attention to due diligence and documentation.",
    education: ["J.D., NYU School of Law", "B.A., Duke University"],
    memberships: ["American Bar Association", "State Bar Association"],
    expertise: ["Property transactions", "Title due diligence", "Estate planning"],
    languages: ["English", "Spanish"],
  },
];

export const getLawyerBySlug = (slug) => lawyers.find((l) => l.slug === slug);
