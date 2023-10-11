import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";
import DonaldTrump from "../public/DonaldTrump.jpeg";

const BigArticleCard = () => {
  return (
    <div className="mx-[350px] mb-44">
      <div className="grid-cols-1">
        <div className="col-span-1 h-52 w-full"></div>
      </div>
      <div className="grid grid-cols-2 h-52 w-full">
        <div className="col-span-1 bg-[#222222] w-full h-full relative">
          <div>
            <p className="text-[12px] absolute z-1 text-white border-b border-[#ec1a2e] bg-[#ec1a2e] px-2 py-1 top-0 left-0">
              CODING
            </p>
          </div>
          <div className="grid grid-rows-2 gap-2 px-5 py-10 text-white">
            <div className="text-3xl">
              <p>
                Gaza to be ‘razed to the ground’ as Israeli soldiers mass at
                border and Palestinians run out of fuel
              </p>
            </div>
            <div className="text-sm mt-3">
              <ul className="ml-1 border-l border-solid border-white pl-3">
                <li className="flex items-center mb-1">
                  <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                  Independent TV: Bel Trew reports from Gaza border
                </li>
                <li className="flex items-center mb-1">
                  <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                  Israeli grandmother’s murder ‘posted on her own Facebook’
                </li>
                <li className="flex items-center mb-1">
                  <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                  Mother of woman missing after attacks says daughter is alive
                </li>
                <li className="flex items-center mb-1">
                  <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                  Before and after aerial photos show destruction of Gaza
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-span-1"
          style={{ position: "relative", height: "auto" }}
        >
          <Image
            src={DonaldTrump}
            alt="Donald Trump"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BigArticleCard;
