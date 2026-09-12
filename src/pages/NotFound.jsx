import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <section className="py-32">
      <div className="container-xl text-center">
        <p className="text-sm text-gold mb-3">404</p>
        <h1 className="font-serif text-3xl md:text-4xl text-navy">
          Page Not Found
        </h1>
        <p className="text-charcoal/70 mt-4 max-w-md mx-auto">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Button to="/" variant="primary" className="mt-8">
          Return Home
        </Button>
      </div>
    </section>
  );
}
