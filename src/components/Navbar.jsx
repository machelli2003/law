import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/lawyers", label: "Our Lawyers" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
          scrolled ? "bg-navy shadow-[0_1px_0_rgba(198,161,91,0.25)]" : "bg-navy/95"
        }`}
      >
        <div className="container-xl flex items-center justify-between h-20">
          <Link to="/" className="flex items-baseline gap-2 group">
            <span className="font-serif text-2xl tracking-wide text-white">
              JAH BLESS
            </span>
            <span className="hidden sm:inline text-[11px] tracking-[0.15em] text-gold uppercase">
              Law Firm
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-[14.5px] tracking-wide transition-colors duration-200 ${
                    isActive ? "text-gold" : "text-white/85 hover:text-gold-light"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 border border-gold text-gold text-sm tracking-wide hover:bg-gold hover:text-navy transition-colors duration-200"
            >
              Request a Consultation
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2 -mr-2"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={links}
      />
    </>
  );
}
