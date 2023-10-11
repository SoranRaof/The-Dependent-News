import SingleArticleCard from "./SingleArticleCard";

const ArticleCluster = () => {
  return (
    <div className="mx-[336px] h-full">
      <div className="grid grid-cols-4 h-full w-full gap-4 py-2 px-3">
        <SingleArticleCard />
        <SingleArticleCard />
        <SingleArticleCard />
        <SingleArticleCard />
      </div>
    </div>
  );
};

export default ArticleCluster;
