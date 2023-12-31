"use client";
import { useState, useEffect } from "react";
import { fetchAllArticles } from "@/utils/news/news-api";
import { useMediaQuery } from "@mui/material";

import MobileSubArticles from "@/components/MobileSubArticles";
import MobileBigArticleCard from "@/components/MobileBigArticleCard";
import MobileArticleCluster from "@/components/MobileArticleCluster";

import ArticleCluster from "@/components/ArticleCluster";
import MediumArticleCard from "@/components/MediumArticleCard";
import MainArticleCard from "@/components/MainArticleCard";
import SingleArticleCard from "@/components/SingleArticleCard";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articlesArr = await fetchAllArticles();
      console.log(articlesArr);
      setArticles(articlesArr);
    };
    getArticles();
  }, []);

  console.log(articles);

  const isCondensed = useMediaQuery("(max-width: 770px)");

  return (
    <main>
      <div className="flex flex-col h-full w-full gap-y-4">
        <MobileBigArticleCard article={articles[0]} />
        {isCondensed ? (
          <MobileSubArticles article={articles[0]} />
        ) : (
          <MediumArticleCard article={articles[0]} />
        )}

        <MobileArticleCluster articles={articles} />
        {/* <div className="w-full h-32 col-span-1 outline outline-red-500 px-2"></div>
        <div className="w-full h-32 col-span-1 outline outline-red-500 px-2"></div>
        <div className="w-full h-32 col-span-1 outline outline-red-500 px-2"></div>
        <div className="w-full h-32 col-span-1 outline outline-red-500 px-2"></div> */}
      </div>
    </main>
  );
}
