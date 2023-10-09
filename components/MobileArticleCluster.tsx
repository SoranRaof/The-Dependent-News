import MobileSingleCard from "./MobileSingleCard";

const MobileArticleCluster = () => {
  return (
    <div className="grid grid-cols-2 h-full w-full outline outline-red-500 gap-4 py-2 px-3">
      <MobileSingleCard />
      <MobileSingleCard />
      <MobileSingleCard />
      <MobileSingleCard />
    </div>
  );
};

export default MobileArticleCluster;
