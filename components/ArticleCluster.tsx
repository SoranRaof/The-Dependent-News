import SingleArticleCard from "./SingleArticleCard";

interface ArticleClusterProps {
  article: {
    [key: string]: any;
  };
}

const ArticleCluster = ({ article }: ArticleClusterProps) => {
  if (!article) {
    return <div>loading...</div>; // Or display a loading message or a default card
  }

  return (
    <div className="mx-72 mb-6 h-full flex flex-col relative isolate">
      <div className="grid grid-cols-4 h-full w-full gap-4">
        <SingleArticleCard article={article[1]} />
        <SingleArticleCard article={article[2]} />
        <SingleArticleCard article={article[3]} />
        <SingleArticleCard article={article[4]} />
      </div>
    </div>
  );
};

export default ArticleCluster;
