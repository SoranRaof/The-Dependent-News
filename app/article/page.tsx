import Article from "@/components/Article";
import ArticleComments from "@/components/ArticleComments";

import MobileArticle from "@/components/MobileArticle";
import MobileArticleComments from "@/components/MobileArticleComments";
import MobileArticleNav from "@/components/MobileArticleNav";

export default function ArticlePage() {
  return (
    <main>
      <Article />
      <ArticleComments />
      {/* <MobileArticleNav />
      <MobileArticle />
      <MobileArticleComments /> */}
    </main>
  );
}
