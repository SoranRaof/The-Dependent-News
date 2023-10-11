import MobileSingleCard from "./MobileSingleCard";

const MobileArticleCluster = () => {
  return (
    <div className="grid grid-cols-2 h-full w-full gap-4">
      <MobileSingleCard />
      <MobileSingleCard />
      <MobileSingleCard />
      <MobileSingleCard />
    </div>
  );
};

export default MobileArticleCluster;
