import PageHeader from "../components/PageHeader.jsx";

export default function Disclaimer() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Legal Disclaimer"
        crumbs={[{ to: "/", label: "Home" }, { label: "Legal Disclaimer" }]}
      />
      <section className="py-16 md:py-24">
        <div className="container-xl max-w-2xl space-y-6 text-charcoal/75 leading-relaxed">
          <p>
            The content on this website is provided for general informational
            purposes only and does not constitute legal advice. Laws change
            over time and vary by jurisdiction, and the application of legal
            principles to specific circumstances requires individual
            consultation with a qualified attorney.
          </p>
          <p>
            Submitting an enquiry through this website, including through the
            consultation request form, does not automatically establish an
            attorney-client relationship between the sender and Jah Bless. An
            attorney-client relationship is formed only once the firm has
            expressly agreed to represent a client.
          </p>
          <p>
            Please do not send confidential or privileged information through
            this website until an attorney-client relationship has been
            formally established.
          </p>
          <p>
            Users of this website should seek professional legal advice
            concerning their specific circumstances rather than relying on
            general information published here.
          </p>
          <p className="text-sm text-charcoal/45">
            This is placeholder demo content and should be reviewed by
            qualified counsel before the site is published.
          </p>
        </div>
      </section>
    </>
  );
}
