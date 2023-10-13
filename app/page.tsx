import MobileSubArticles from "@/components/MobileSubArticles";
import MobileBigArticleCard from "@/components/MobileBigArticleCard";
import MobileArticleCluster from "@/components/MobileArticleCluster";

import ArticleCluster from "@/components/ArticleCluster";
import MediumArticleCard from "@/components/MediumArticleCard";
import MainArticleCard from "@/components/MainArticleCard";

export default function Home() {
  return (
    <main>
      <MainArticleCard />
      <ArticleCluster />
      <MediumArticleCard />
      <ArticleCluster />
    </main>
  );
}
