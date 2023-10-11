import Image from "next/image";
import DonaldTrump from "../public/DonaldTrump.jpeg";

const MobileBigArticleCard = () => {
  return (
    <div className="w-full h-full pt-3 px-3 justify-center">
      <div className="w-fit h-fit relative">
        <div style={{ position: "relative", height: "auto" }}>
          <Image
            src={DonaldTrump}
            alt="Donald Trump"
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="text-[12px] absolute z-1 text-white border-b border-[#ec1a2e] bg-[#ec1a2e] px-2 py-1 top-0 left-0">
          CODING
        </p>
      </div>
      <div>
        <div className="w-full h-full bg-[#222222] px-2">
          <p className="text-white">ARTICLE HEADING</p>
        </div>
        <div className="w-full h-full bg-[#222222] px-2">
          <p className="text-white text-[12px]">ARTICLE SUBHEADING</p>
        </div>
      </div>
    </div>
  );
};

export default MobileBigArticleCard;
