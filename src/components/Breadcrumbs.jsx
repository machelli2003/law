import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items, light = false, className = "" }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={`flex flex-wrap items-center gap-1.5 text-xs ${light ? "text-white/50" : "text-charcoal/50"}`}>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={12} />}
            {item.to ? (
              <Link
                to={item.to}
                className={light ? "hover:text-gold-light" : "hover:text-gold"}
              >
                {item.label}
              </Link>
            ) : (
              <span className={light ? "text-white/80" : "text-charcoal/80"}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
