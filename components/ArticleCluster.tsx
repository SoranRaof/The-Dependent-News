import SingleArticleCard from "./SingleArticleCard";

const ArticleCluster = () => {
  return (
    <div className="mx-72 mb-6 h-full flex flex-col relative isolate">
      <div className="grid grid-cols-4 h-full w-full gap-4">
        <SingleArticleCard />
        <SingleArticleCard />
        <SingleArticleCard />
        <SingleArticleCard />
      </div>
    </div>
  );
};

export default ArticleCluster;
