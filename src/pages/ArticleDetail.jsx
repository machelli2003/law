import { useParams, Navigate, Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import ArticleCard from "../components/ArticleCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { articles, getArticleBySlug } from "../data/articles.js";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) return <Navigate to="/insights" replace />;

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <div className="container-xl pt-8">
        <Breadcrumbs
          items={[
            { to: "/", label: "Home" },
            { to: "/insights", label: "Insights" },
            { label: article.title },
          ]}
        />
      </div>

      <article className="py-10 md:py-14">
        <div className="container-xl max-w-3xl">
          <p className="text-sm text-gold mb-3">{article.category}</p>
          <h1 className="font-serif text-3xl md:text-4xl text-navy leading-tight">
            {article.title}
          </h1>
          <p className="text-sm text-charcoal/50 mt-4">
            {formatDate(article.date)}
          </p>
        </div>

        <div className="container-xl max-w-4xl mt-10">
          <img
            src={article.image}
            alt=""
            className="w-full h-[320px] md:h-[440px] object-cover"
          />
        </div>

        <div className="container-xl max-w-3xl mt-12 space-y-6">
          {article.body.map((para, i) => (
            <p key={i} className="text-charcoal/80 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="container-xl max-w-3xl mt-12">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-navy text-white text-sm tracking-wide hover:bg-navy/90 transition-colors duration-200"
          >
            Speak With Our Team
          </Link>
        </div>
      </article>

      {more.length > 0 && (
        <section className="bg-ivory py-16 md:py-20">
          <div className="container-xl">
            <h2 className="font-serif text-2xl text-navy mb-8">
              More Insights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl">
              {more.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
