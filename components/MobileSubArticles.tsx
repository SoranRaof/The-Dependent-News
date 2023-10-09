import Image from "next/image";
import DonaldTrump from "../public/DonaldTrump.jpeg";

const MobileSubArticles = () => {
  return (
    <div className="mt-3 px-3 ">
      <div className="grid grid-col-2 border border-gray-300">
        <div className="col-span-3/4 w-full h-full pt-2 px-2 py-2">
          <p className="text-[#ec1a2e] text-[10px]">TOPIC</p>
          <p className="text-[15px]">
            ARTICLE TITLE ARTICLE TITLEARTICLE TITLEARTICLE TITLEARTICLE
            TITLEARTICLE TITLE
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileSubArticles;
