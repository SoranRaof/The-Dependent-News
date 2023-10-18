"use client";
import { useState, useEffect } from "react";
import { fetchAllArticles } from "@/utils/news/news-api";

import MobileSubArticles from "@/components/MobileSubArticles";
import MobileBigArticleCard from "@/components/MobileBigArticleCard";
import MobileArticleCluster from "@/components/MobileArticleCluster";

import ArticleCluster from "@/components/ArticleCluster";
import MediumArticleCard from "@/components/MediumArticleCard";
import MainArticleCard from "@/components/MainArticleCard";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articlesArr = await fetchAllArticles();
      setArticles(articlesArr);
    };
    getArticles();
  }, []);

  console.log(articles);

  return (
    <main>
      <MainArticleCard article={articles[0]} />
      <ArticleCluster article={articles.slice(3)} />
      <MediumArticleCard article={articles.slice(13)[0]} />
      <ArticleCluster article={articles.slice(10)} />
    </main>
  );
}
