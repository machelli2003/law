import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PracticeAreas from "./pages/PracticeAreas.jsx";
import PracticeAreaDetail from "./pages/PracticeAreaDetail.jsx";
import Lawyers from "./pages/Lawyers.jsx";
import LawyerProfile from "./pages/LawyerProfile.jsx";
import Insights from "./pages/Insights.jsx";
import ArticleDetail from "./pages/ArticleDetail.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/practice-areas/:slug" element={<PracticeAreaDetail />} />
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path="/lawyers/:slug" element={<LawyerProfile />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<ArticleDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
