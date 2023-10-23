import MobileSingleCard from "./MobileSingleCard";

interface MobileArticleClusterProps {
  articles: any[];
}

const MobileArticleCluster = ({ articles }: MobileArticleClusterProps) => {
  return (
    <div className="md:grid-cols-4 w-full grid grid-cols-2 h-auto gap-3 px-3">
      <MobileSingleCard article={articles[1]} />
      <MobileSingleCard article={articles[2]} />
      <MobileSingleCard article={articles[3]} />
      <MobileSingleCard article={articles[4]} />
    </div>
  );
};

export default MobileArticleCluster;
