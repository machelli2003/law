import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-xl pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <p className="font-serif text-xl text-white mb-3">JAH BLESS</p>
            <p className="text-sm text-white/60 leading-relaxed max-w-[220px]">
              Trusted Counsel. Strategic Advocacy.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <div>
            <p className="text-sm text-gold mb-4">Explore</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-gold-light">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-light">About</Link></li>
              <li><Link to="/practice-areas" className="hover:text-gold-light">Practice Areas</Link></li>
              <li><Link to="/lawyers" className="hover:text-gold-light">Our Lawyers</Link></li>
              <li><Link to="/insights" className="hover:text-gold-light">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-gold-light">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-gold mb-4">Practice Areas</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/practice-areas/corporate-commercial" className="hover:text-gold-light">Corporate Law</Link></li>
              <li><Link to="/practice-areas/litigation" className="hover:text-gold-light">Litigation</Link></li>
              <li><Link to="/practice-areas/real-estate-property" className="hover:text-gold-light">Property Law</Link></li>
              <li><Link to="/practice-areas/family-law" className="hover:text-gold-light">Family Law</Link></li>
              <li><Link to="/practice-areas/employment-labour" className="hover:text-gold-light">Employment Law</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-gold mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>New York, NY, United States</li>
              <li>+1 (XXX) XXX-XXXX</li>
              <li>
                <a href="mailto:info@jahblesslaw.com" className="hover:text-gold-light">
                  info@jahblesslaw.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline-full mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {year} Jah Bless Law Firm. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold-light">Privacy Policy</Link>
            <Link to="/disclaimer" className="hover:text-gold-light">Legal Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
