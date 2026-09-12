const items = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {items.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          className="text-xs text-white/60 hover:text-gold transition-colors duration-200 border-b border-transparent hover:border-gold"
        >
          {label}
        </a>
      ))}
    </div>
  );
}
