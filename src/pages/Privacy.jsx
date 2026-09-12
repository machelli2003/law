import PageHeader from "../components/PageHeader.jsx";

const sections = [
  {
    title: "Information We Collect",
    text: "When you contact us through this website, we may collect information you provide directly, such as your name, email address, phone number, and the details of your enquiry.",
  },
  {
    title: "How We Use Information",
    text: "Information submitted is used to respond to enquiries, assess potential engagements, and communicate with prospective and existing clients. It is not used for unrelated marketing without consent.",
  },
  {
    title: "Confidentiality",
    text: "We treat all client and prospective client information with strict confidentiality, consistent with our professional obligations.",
  },
  {
    title: "Data Retention",
    text: "Information is retained only for as long as necessary to fulfil the purposes described in this policy or as required by law.",
  },
  {
    title: "Contact",
    text: "Questions about this policy can be directed to the firm using the contact details provided on this website.",
  },
];

export default function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Privacy Policy"
        crumbs={[{ to: "/", label: "Home" }, { label: "Privacy Policy" }]}
      />
      <section className="py-16 md:py-24">
        <div className="container-xl max-w-2xl">
          <p className="text-charcoal/75 leading-relaxed mb-10">
            This Privacy Policy explains, in general terms, how Jah Bless
            handles information submitted through this website. This is
            placeholder demo content and should be replaced with the firm's
            complete, reviewed privacy policy before launch.
          </p>
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-serif text-xl text-navy mb-2">{s.title}</h2>
                <p className="text-charcoal/75 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
