import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";
import DonaldTrump from "../public/DonaldTrump.jpeg";
import DependentCircle from "../public/The-Independent-Circle.png";

const MediumArticleCard = () => {
  return (
    <div className="mx-72 mb-28">
      <div className="flex flex-row items-center h-16">
        <div className="pr-2">
          <Image
            src={DependentCircle}
            alt="The Independent Circle"
            width={35}
            height={35}
          />
        </div>
        <p className="text-2xl pt-1">News</p>
      </div>
      <div className="grid grid-cols-3 gap-4 h-1/2 w-full">
        <div className="col-span-2 grid grid-rows-2 h-4/5 w-full relative">
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
            <p className="text-[12px] absolute z-1 text-white border-b border-[#ec1a2e] bg-[#ec1a2e] px-2 py-1 top-0 left-0">
              CODING
            </p>
          </div>
          <div className="col-span-1 bg-[#222222] w-full h-full z-10">
            <div className="grid grid-rows-2 gap-2 px-5 py-5 text-white">
              <div className="text-3xl">
                <p>
                  Gaza to be ‘razed to the ground’ as Israeli soldiers mass at
                  border and Palestinians run out of fuel
                </p>
              </div>
              <div className="text-sm">
                <ul className="ml-1 border-l border-solid border-white pl-3">
                  <li className="flex items-center mb-2">
                    <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                    Independent TV: Bel Trew reports from Gaza border
                  </li>
                  <li className="flex items-center mb-2">
                    <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                    Israeli grandmother’s murder ‘posted on her own Facebook’
                  </li>
                  <li className="flex items-center mb-2">
                    <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                    Mother of woman missing after attacks says daughter is alive
                  </li>
                  <li className="flex items-center mb-2">
                    <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                    Before and after aerial photos show destruction of Gaza
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-rows-4 gap-2 h-4/5">
            <div className="row-span-2 grid grid-rows-2 h-full w-full relative">
              <div
                className="row-span-1"
                style={{ position: "relative", height: "auto" }}
              >
                <Image
                  src={DonaldTrump}
                  alt="Donald Trump"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <p className="text-[12px] absolute z-1 text-white border-b border-[#ec1a2e] bg-[#ec1a2e] px-2 py-1 top-0 left-0">
                  CODING
                </p>
              </div>
              <div className="col-span-1 bg-[#222222] w-full h-full z-10">
                <div className="grid grid-rows-2 gap-2 px-4 py-2 text-white">
                  <div className="text-md">
                    <p>
                      Gaza to be ‘razed to the ground’ as Israeli soldiers mass
                      at border and Palestinians run out of fuel
                    </p>
                  </div>
                  <div className="text-sm">
                    <ul className="ml-1 border-l border-solid border-white pl-2">
                      <li className="flex justify-start">
                        <FaChevronCircleRight className="text-[#ec1a2e] mr-2 text-[20px]" />
                        <p>Independent TV: Bel Trew reports from Gaza border</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-1 grid grid-row-2 px-4 py-4 overflow-hidden border border-gray-400">
              <div className="row-span-1">
                <p className="text-[#ec1a2e] text-xs">TITLE</p>
              </div>
              <div className="flex text-sm">
                <p className="break-words">
                  Joanna Simpson: Family fear for lives as they call for
                  ‘narcissistic’ hammer killer to be kept behind bars
                </p>
              </div>
            </div>
            <div className="row-span-1 grid grid-row-2 px-4 py-4 overflow-hidden border border-gray-400">
              <div className="row-span-1">
                <p className="text-[#ec1a2e] text-xs">TITLE</p>
              </div>
              <div className="flex text-sm">
                <p className="break-words">
                  Joanna Simpson: Family fear for lives as they call for
                  ‘narcissistic’ hammer killer to be kept behind bars
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediumArticleCard;
