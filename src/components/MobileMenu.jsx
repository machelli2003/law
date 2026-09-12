import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { X } from "lucide-react";

export default function MobileMenu({ open, onClose, links }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-navy-deep/60"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-navy shadow-2xl transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-white/10">
          <span className="font-serif text-xl text-white">JAH BLESS</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-white p-2 -mr-2"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-8 gap-1" aria-label="Mobile">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `py-3.5 text-lg font-serif border-b border-white/10 ${
                  isActive ? "text-gold" : "text-white/90"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto px-6 pb-10">
          <Link
            to="/contact"
            onClick={onClose}
            className="block text-center w-full px-5 py-3.5 bg-gold text-navy text-sm tracking-wide font-medium"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
