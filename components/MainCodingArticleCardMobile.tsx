import Image from "next/image";
import DonaldTrump from "../public/DonaldTrump.jpeg";

const MainCodingArticleCardMobile = () => {
  return (
    <div className="w-full h-full py-3 px-3 justify-center">
      <div className="col-span-1 w-fit h-fit flex justify-center relative">
        <Image
          src={DonaldTrump}
          alt="Donald Trump"
          width="auto"
          height="auto"
        />
        <p className="text-[12px] absolute text-white border-b border-[#ec1a2e] bg-[#ec1a2e] px-2 py-1 top-0 left-0">
          CODING
        </p>
      </div>
      <div>
        <div className="col-span-1 w-full h-full bg-[#222222] px-2">
          <p className="text-white">ARTICLE HEADING</p>
        </div>
        <div className="col-span-1 w-full h-full bg-[#222222] px-2">
          <p className="text-white text-[12px]">ARTICLE SUBHEADING</p>
        </div>
      </div>
    </div>
  );
};

export default MainCodingArticleCardMobile;
