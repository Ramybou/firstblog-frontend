import { Article } from "../types";

type Props = {
  articles: Article[];
};

function ArticleList({ articles }: Props) {
  if (articles.length === 0) {
    return <p className="text-gray-500">Aucun article pour le moment.</p>;
  }

  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <div key={article.id} className="border p-4 rounded">
          <h2 className="text-xl font-semibold">{article.title}</h2>
          <p className="text-sm text-gray-500">{article.date}</p>
          <p className="mt-2">{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
