import React, { useState } from "react";
import { Article } from "../types";

type Props = {
  onAdd: (article: Article) => void;
};

function ArticleForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newArticle: Article = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };
    onAdd(newArticle);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        className="border p-2 w-full mb-2"
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Contenu"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        type="submit"
      >
        Publier
      </button>
    </form>
  );
}

export default ArticleForm;
