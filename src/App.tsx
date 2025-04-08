import { useEffect, useState } from "react";
import ArticleForm from "./components/ArticleForm";
import ArticleList from "./components/ArticleList";
import { Article } from "./types";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("articles");
    if (stored) {
      setArticles(JSON.parse(stored));
    }
  }, []);

  const addArticle = (article: Article) => {
    const updated = [article, ...articles];
    setArticles(updated);
    localStorage.setItem("articles", JSON.stringify(updated));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mon Blog</h1>
      <ArticleForm onAdd={addArticle} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
