export const practiceAreas = [
  {
    slug: "corporate-commercial",
    name: "Corporate & Commercial Law",
    short: "Legal counsel for businesses, companies, partnerships, and commercial transactions.",
    overview:
      "We advise businesses of every size on the legal matters that shape how they are formed, financed, and operated. From incorporation to complex commercial agreements, our role is to help clients move forward with clarity and confidence.",
    services: [
      "Business formation and structuring",
      "Commercial contracts and agreements",
      "Mergers, acquisitions, and joint ventures",
      "Corporate governance and compliance",
      "Shareholder and partnership matters",
    ],
    whoWeAssist:
      "Startups, established companies, partnerships, and institutions operating throughout the United States.",
    approach:
      "We take the time to understand a client's business before recommending a course of action, favouring practical solutions that protect commercial interests without unnecessary complexity.",
  },
  {
    slug: "litigation",
    name: "Litigation & Dispute Resolution",
    short: "Strategic representation and dispute resolution across civil and commercial matters.",
    overview:
      "When disputes arise, clients need counsel who can assess the matter clearly and pursue the most effective path forward — whether that means negotiation, mediation, arbitration, or the courtroom.",
    services: [
      "Civil and commercial litigation",
      "Contract and business disputes",
      "Arbitration and mediation",
      "Pre-litigation strategy and negotiation",
      "Enforcement of judgments",
    ],
    whoWeAssist:
      "Individuals, businesses, and institutions facing or anticipating a legal dispute.",
    approach:
      "We assess the wider implications of each dispute and build a strategy suited to the client's goals, weighing the cost and time of litigation against other means of resolution.",
  },
  {
    slug: "real-estate-property",
    name: "Real Estate & Property Law",
    short: "Legal support for property transactions, land matters, leases, and related disputes.",
    overview:
      "Property matters in the United States require careful attention to state and local regulations. We guide clients through transactions, documentation, and disputes with close attention to due diligence and long-term protection of their interests.",
    services: [
      "Land and property transactions",
      "Title verification and due diligence",
      "Lease agreements and negotiations",
      "Property dispute resolution",
      "Estate development advisory",
    ],
    whoWeAssist:
      "Individuals, developers, landlords, tenants, and institutions with property interests.",
    approach:
      "We prioritise thorough due diligence before any transaction proceeds, helping clients avoid the disputes that often arise from incomplete documentation.",
  },
  {
    slug: "family-law",
    name: "Family Law",
    short: "Professional and confidential assistance with family-related legal matters.",
    overview:
      "Family legal matters are personal and often sensitive. We provide steady, confidential guidance so clients can address these matters with dignity and clarity.",
    services: [
      "Marriage and divorce proceedings",
      "Child custody and maintenance",
      "Matrimonial property matters",
      "Adoption guidance",
      "Family mediation",
    ],
    whoWeAssist:
      "Individuals and families navigating personal legal matters.",
    approach:
      "We handle every family matter with discretion and care, working toward outcomes that protect our clients and, where children are involved, their wellbeing.",
  },
  {
    slug: "employment-labour",
    name: "Employment & Labour Law",
    short: "Legal advice concerning employment relationships, workplace disputes, and labour matters.",
    overview:
      "Employment relationships involve obligations on both sides. We advise employers and employees alike on compliant, fair, and well-documented working relationships.",
    services: [
      "Employment contracts and policies",
      "Workplace dispute resolution",
      "Termination and severance matters",
      "Labour compliance advisory",
      "Union and industrial relations",
    ],
    whoWeAssist:
      "Employers, businesses, and employees seeking guidance on workplace matters.",
    approach:
      "We advise proactively wherever possible, helping employers build sound policies that reduce the likelihood of dispute.",
  },
  {
    slug: "criminal-law",
    name: "Criminal Law",
    short: "Professional representation and legal guidance in criminal proceedings.",
    overview:
      "Facing a criminal matter is a serious and often unfamiliar experience. We provide steady representation and clear guidance through every stage of the process.",
    services: [
      "Criminal defence representation",
      "Bail applications",
      "Pre-trial advisory",
      "Court representation",
      "Appeals",
    ],
    whoWeAssist:
      "Individuals involved in criminal proceedings, whether as the accused or as a complainant.",
    approach:
      "We prepare thoroughly for every matter, ensuring clients understand the process and their options at each stage.",
  },
  {
    slug: "banking-finance",
    name: "Banking & Finance",
    short: "Legal support for financial transactions, commercial agreements, and related regulatory matters.",
    overview:
      "Financial transactions require precision and regulatory awareness. We support clients through the legal aspects of lending, security arrangements, and financial compliance.",
    services: [
      "Loan and security documentation",
      "Regulatory compliance advisory",
      "Financial agreements",
      "Debt recovery",
      "Restructuring support",
    ],
    whoWeAssist:
      "Financial institutions, businesses, and individuals engaged in financial transactions.",
    approach:
      "We work closely with financial and regulatory considerations in mind, ensuring documentation reflects the true intentions of the parties involved.",
  },
  {
    slug: "intellectual-property",
    name: "Intellectual Property",
    short: "Protection and legal management of brands, creative works, trademarks, and intellectual property rights.",
    overview:
      "A business's ideas, brand, and creative work carry real value. We help clients identify, protect, and manage their intellectual property.",
    services: [
      "Trademark registration and protection",
      "Copyright advisory",
      "IP licensing agreements",
      "Brand protection strategy",
      "IP dispute resolution",
    ],
    whoWeAssist:
      "Businesses, creatives, and institutions with valuable brands or original work.",
    approach:
      "We help clients think ahead about how their intellectual property should be protected, not only after a dispute arises.",
  },
  {
    slug: "immigration-law",
    name: "Immigration Law",
    short: "Guidance on immigration-related legal matters and documentation.",
    overview:
      "Immigration matters involve careful attention to documentation and process. We guide individuals and organisations through the requirements involved.",
    services: [
      "Residence and work permit guidance",
      "Immigration documentation review",
      "Corporate immigration support",
      "Compliance advisory",
    ],
    whoWeAssist:
      "Individuals, families, and businesses with immigration-related needs.",
    approach:
      "We help clients understand requirements clearly from the outset, reducing delays and complications.",
  },
  {
    slug: "estate-planning-probate",
    name: "Estate Planning & Probate",
    short: "Assistance with wills, estates, succession, and probate matters.",
    overview:
      "Planning for the future, and administering an estate after a loss, both call for careful and compassionate legal guidance.",
    services: [
      "Will preparation",
      "Estate and succession planning",
      "Probate and estate administration",
      "Trust arrangements",
      "Estate dispute resolution",
    ],
    whoWeAssist:
      "Individuals and families planning for the future or managing an estate.",
    approach:
      "We approach these matters with sensitivity, helping clients plan clearly or navigate administration with as little burden as possible.",
  },
];

export const getPracticeAreaBySlug = (slug) =>
  practiceAreas.find((p) => p.slug === slug);
