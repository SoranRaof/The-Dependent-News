import { BsDot, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";
import Image from "next/image";
import DonaldTrump from "../public/DonaldTrump.jpeg";

const MobileArticle = () => {
  return (
    <div className="border-b border-solid border-gray-400 mb-3">
      <div className="mx-3">
        <div className="h-50 w-full text-[25px] mb-3">
          <h1>
            Quarter of UK’s seaborne trade could be blocked as strike action
            brews across ports
          </h1>
        </div>
        <div className="mb-3">
          <p className="text-[#646464]">
            Palestine’s heavily fortified Gaza strip faces total blockade of
            food and fuel. Palestine’s heavily fortified Gaza strip faces total
            blockade of food and fuel.
          </p>
        </div>
        <div className="flex items-center h-5 mb-5">
          <a className="text-[#ec1a2e] pr-2">AUTHOR</a>
          <div className="text-[20px] text-[#646464] pr-2">
            <BsDot />
          </div>
          <div className="text-[#646464] pr-2">01/10/2023</div>
          <div className="text-[20px] text-[#646464] pr-2">
            <BsDot />
          </div>
          <div className="text-[25px] text-[#ec1a2e] pr-1">
            <MdOutlineModeComment />
          </div>
          <div>
            <p className="text-[#ec1a2e]">Comments</p>
          </div>
        </div>
        <div className="flex items-center h-5 mb-5">
          <div className="pr-3 text-[#3b5998] text-[30px]">
            <BsFacebook />
          </div>
          <div className="pr-3 text-[#4a90e2] text-[36px]">
            <AiFillTwitterCircle />
          </div>
          <div className="pr-3 text-[#25d366] text-[30px]">
            <BsWhatsapp />
          </div>
        </div>
      </div>
      <div className="h-50">
        <Image src={DonaldTrump} alt="Donald Trump" width="400" height="400" />
      </div>
      <div className="px-[8px] py-[6px] bg-[#f7f7f7] mb-3">
        <p className="text-[#646464] text-[13px]">Subheading text</p>
      </div>
      <div className="mx-3 mb-3">
        <div>
          <div>
            <p>
              The Metropolitan Police have reported 795 incidents of
              ULEZ-related crimes in the last six months with hundreds of
              cameras across London being damaged or stolen. Updated figures
              from the Met include 200 cameras being stolen and 595 damaged. The
              news comes after London Mayor Sadiq Khan expanded the Ultra Low
              Emission Zone (ULEZ) in August, to cover all London boroughs in a
              bid to help clear pollution in the capital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileArticle;
