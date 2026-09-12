import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2";

const variants = {
  primary: "bg-gold text-navy hover:bg-gold-light",
  outline: "border border-gold text-gold hover:bg-gold hover:text-navy",
  outlineLight: "border border-white/40 text-white hover:border-white hover:bg-white/10",
  ghost: "text-navy hover:text-gold",
};

export default function Button({ to, href, variant = "primary", className = "", children, ...props }) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
