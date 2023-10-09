import MobileSubArticles from "@/components/MobileSubArticles";
import MobileBigArticleCard from "@/components/MobileBigArticleCard";
import MobileArticleCluster from "@/components/MobileArticleCluster";

export default function Home() {
  return (
    <main>
      <MobileBigArticleCard />
      <MobileBigArticleCard />
      <MobileSubArticles />
      <MobileSubArticles />
      <MobileArticleCluster />
    </main>
  );
}
