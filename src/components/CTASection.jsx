import Button from "./Button.jsx";

export default function CTASection({
  eyebrow = "NEED LEGAL GUIDANCE?",
  title = "Let's discuss how we can help.",
  text = "Whether you are facing a legal dispute, establishing a business, managing property, or simply need professional legal advice, our team is ready to listen.",
}) {
  return (
    <section className="bg-navy text-white">
      <div className="container-xl py-20 md:py-24 text-center">
        <p className="text-sm text-gold mb-4">{eyebrow}</p>
        <h2 className="font-serif text-3xl md:text-4xl max-w-2xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mt-5 leading-relaxed">
          {text}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
          <Button to="/contact" variant="primary">
            Request a Consultation
          </Button>
          <Button to="/contact" variant="outlineLight">
            Contact Our Office
          </Button>
        </div>
      </div>
    </section>
  );
}
