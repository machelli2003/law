import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticleCard({ article }) {
  return (
    <Link to={`/insights/${article.slug}`} className="group block">
      <div className="overflow-hidden">
        <motion.img
          src={article.image}
          alt=""
          className="w-full aspect-[16/10] object-cover"
          loading="lazy"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="pt-5">
        <p className="text-xs text-gold">{article.category}</p>
        <h3 className="font-serif text-xl text-navy mt-2 leading-snug group-hover:text-navy/80 transition-colors duration-200">
          {article.title}
        </h3>
        <p className="text-xs text-charcoal/50 mt-2">{formatDate(article.date)}</p>
        <p className="text-sm text-charcoal/70 mt-3 leading-relaxed">
          {article.excerpt}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm text-navy mt-4 group-hover:text-gold transition-colors duration-200">
          Read Article
          <motion.span
            className="inline-block"
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={15} />
          </motion.span>
        </span>
      </div>
    </Link>
  );
}
