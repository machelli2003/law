export const articles = [
  {
    slug: "understanding-commercial-contracts-in-the-united-states",
    title: "Understanding Commercial Contracts in the United States",
    category: "Corporate & Commercial",
    date: "2026-06-12",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    excerpt:
      "A well-drafted commercial contract does more than record an agreement — it anticipates what could go wrong. Here is what businesses should look for before signing.",
    body: [
      "Commercial contracts are the backbone of nearly every business relationship, yet they are often signed with less scrutiny than they deserve. A contract's real value shows itself not when things go well, but when a disagreement arises and the parties need to know where they stand.",
      "Before entering any commercial agreement, it is worth reviewing how obligations are defined, what happens in the event of a delay or breach, and how disputes will be resolved. Ambiguous language in these areas is one of the most common sources of costly disagreement later on.",
      "Businesses should also pay attention to termination clauses, confidentiality obligations, and any indemnity provisions. These sections are frequently glossed over, but they determine how much exposure a business carries if the relationship does not go as planned.",
      "Working with legal counsel from the drafting stage, rather than only when a dispute emerges, allows a business to negotiate from a position of clarity rather than reacting under pressure.",
    ],
  },
  {
    slug: "what-to-consider-before-entering-a-property-transaction",
    title: "What to Consider Before Entering a Property Transaction",
    category: "Property Law",
    date: "2026-05-28",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    excerpt:
      "Property transactions in the United States carry particular risks around title and documentation. A careful due diligence process can prevent disputes years down the line.",
    body: [
      "Property transactions often involve significant sums of money and long-term commitments, which makes due diligence essential before any agreement is finalised.",
      "A central step is verifying the title of the land or property in question. This includes confirming the seller's legal right to transfer the property and checking for any competing claims, encumbrances, or unresolved family interests in the land.",
      "Buyers should also review any existing leases, easements, or restrictions that may affect how the property can be used. Site inspections and boundary verification are equally important, particularly in areas where land records may be incomplete.",
      "Because property disputes can take years to resolve once they arise, the time spent on due diligence at the outset is almost always worthwhile.",
    ],
  },
  {
    slug: "resolving-business-disputes-before-they-reach-court",
    title: "Resolving Business Disputes Before They Reach Court",
    category: "Dispute Resolution",
    date: "2026-04-15",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop",
    excerpt:
      "Litigation is not always the most efficient way to resolve a business dispute. Negotiation, mediation, and arbitration each offer distinct advantages worth considering first.",
    body: [
      "When a business disagreement arises, litigation is often assumed to be the default path forward. In practice, it is usually the most time-consuming and costly option, and not always the most effective one.",
      "Direct negotiation between the parties, guided by legal counsel, can resolve many disputes quickly and with less disruption to an ongoing business relationship. Where negotiation alone is not enough, mediation offers a structured process with a neutral third party helping the parties reach a resolution.",
      "Arbitration is another option, particularly where the parties' contract already specifies it. It offers a more private and often faster process than court litigation, with an outcome that is generally binding.",
      "Understanding these options before a dispute escalates allows a business to choose the path best suited to its goals, rather than defaulting to the courtroom by habit.",
    ],
  },
];

export const getArticleBySlug = (slug) => articles.find((a) => a.slug === slug);
