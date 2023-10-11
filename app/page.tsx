import MobileSubArticles from "@/components/MobileSubArticles";
import MobileBigArticleCard from "@/components/MobileBigArticleCard";
import MobileArticleCluster from "@/components/MobileArticleCluster";

import BigArticleCard from "@/components/BigArticleCard";
import ArticleCluster from "@/components/ArticleCluster";

export default function Home() {
  return (
    <main>
      {/* <MobileBigArticleCard />
      <MobileBigArticleCard />
      <MobileSubArticles />
      <MobileSubArticles />
      <MobileArticleCluster /> */}
      <BigArticleCard />

      <ArticleCluster />
    </main>
  );
}
