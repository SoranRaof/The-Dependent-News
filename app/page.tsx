import MobileSubArticles from "@/components/MobileSubArticles";
import MobileBigArticleCard from "@/components/MobileBigArticleCard";
import MobileArticleCluster from "@/components/MobileArticleCluster";

import BigArticleCard from "@/components/BigArticleCard";
import ArticleCluster from "@/components/ArticleCluster";
import MediumArticleCard from "@/components/MediumArticleCard";

export default function Home() {
  return (
    <main>
      <BigArticleCard />
      <ArticleCluster />
      <MediumArticleCard />
    </main>
  );
}
