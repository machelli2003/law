import PageHeader from "../components/PageHeader.jsx";
import ArticleCard from "../components/ArticleCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { articles } from "../data/articles.js";

export default function Insights() {
  return (
    <>
      <PageHeader
        eyebrow="RESOURCES"
        title="Legal Insights"
        subtitle="Perspectives on law, business, and issues that matter."
        crumbs={[{ to: "/", label: "Home" }, { label: "Insights" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
