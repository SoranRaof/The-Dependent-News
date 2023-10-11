import Image from "next/image";
import DonaldTrump from "../public/DonaldTrump.jpeg";
const SingleArticleCard = () => {
  return (
    <div className="h-72 grid grid-rows-5 border border-gray-300">
      <div
        className="row-span-3"
        style={{ position: "relative", height: "auto" }}
      >
        <Image
          src={DonaldTrump}
          alt="Donald Trump"
          fill
          sizes="10vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="row-span-3 grid grid-row-2 px-4 py-4 overflow-hidden">
        <div className="row-span-1">
          <p className="text-[#ec1a2e] text-xs">TITLE</p>
        </div>
        <div className="flex text-sm whitespace-normal">
          <p className="break-words">
            Joanna Simpson: Family fear for lives as they call for
            ‘narcissistic’ hammer killer to be kept behind bars
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleArticleCard;