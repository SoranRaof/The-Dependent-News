import Image from "next/image";
import TheDependentLogo from "../public/The-Independent-Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMobile from "./NavMobile";
import FooterMobile from "./FooterMobile";

const HeaderMobile = () => {
  return (
    <div className="border-b border-solid border-gray-300 h-12 w-full justify-center bg-[#f7f7f7]">
      <div className="w-full h-full grid grid-cols-2">
        <div className="col-span-1 h-full w-full pt-1 pl-1">
          <Image
            src={TheDependentLogo}
            alt="The Dependent Logo"
            width="180"
            height="50"
          />
        </div>
        <div className="col-span-1 grid grid-cols-3">
          <div className="h-full w-full col-span-2 "></div>
          <div className="h-full w-full border-l border-solid border-gray-300 col-span-1">
            <div className="w-full flex justify-center pt-2 text-xs">
              <GiHamburgerMenu className="text-black text-[20px]" />
            </div>
            <div className="w-full flex justify-center pt-1 text-[9px]">
              <p className="text-black">Menu</p>
            </div>
          </div>
        </div>
      </div>
      <NavMobile />
    </div>
  );
};

export default HeaderMobile;
