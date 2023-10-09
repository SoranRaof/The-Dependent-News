import Image from "next/image";
import { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import TheIndependentCircle from "../public/The-Independent-Circle.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const MobileMenuNav = () => {
  const [closeMenu, setCloseMenu] = useState(false);

  const handleMenuClose = () => {
    setCloseMenu(true);
  };

  return (
    <div className="fixed top-0 right-0 h-full w-3/4 bg-white outline outline-gray-600 z-10">
      <div className="grid grid-rows-6 w-full h-1/3">
        <div className="col-span-1 grid grid-cols-6 w-full h-12 border-b border-solid border-gray-300">
          <div className="h-full w-full col-span-5 flex items-center">
            <p className="pl-2 font-extrabold">UK EDITION</p>
          </div>
          <div className="h-full w-full col-span-1 border-l border-solid border-gray-300 flex justify-center">
            <button className="" onClick={handleMenuClose}>
              <IoMdClose className="text-black text-[21px]" />
              <p className="text-[10px]">Close</p>
            </button>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-3 w-full h-12 border-b border-solid border-gray-300 items-center">
          <div className="col-span-2 flex pl-3">
            <BiSolidUserCircle className="text-black text-[30px]" />
            <p className="text-black text-[12px] font-extrabold flex items-center pl-2">
              LOG IN / REGISTER
            </p>
          </div>
          <div className="col-span-1 h-full w-full flex justify-center items-center">
            <div className="w-16 h-6 bg-[#337e81] rounded-md flex justify-center">
              <p className="text-white text-[11px] flex items-center">Login</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 border-b border-solid border-gray-300">
          <div className="pt-1 pl-3 w-full h-full border-l-[6px] border-transparent hover:border-[#ec1a2e] cursor-pointer">
            <a className="">ALL TOPICS</a>
          </div>
        </div>
        <div className="col-span-1 border-b border-solid border-gray-300">
          <div className="pt-1 pl-3 w-full h-full border-l-[6px] border-transparent hover:border-[#ec1a2e] cursor-pointer">
            <a className="">CODING</a>
          </div>
        </div>
        <div className="col-span-1 border-b border-solid border-gray-300">
          <div className="pt-1 pl-3 w-full h-full border-l-[6px] border-transparent hover:border-[#ec1a2e] cursor-pointer">
            <a className="">FOOTBALL</a>
          </div>
        </div>
        <div className="col-span-1 border-b border-solid border-gray-300">
          <div className="pt-1 pl-3 w-full h-full border-l-[6px] border-transparent hover:border-[#ec1a2e] cursor-pointer">
            <a className="">COOKING</a>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full px-4 py-4 border-t border-solid border-gray-300 bg-[#f7f7f7]">
        <div className="">
          <div className="grid grid-cols-3">
            <div className="flex items-center justify-center">
              <Image
                src={TheIndependentCircle}
                alt="The Independent Circle Logo"
                width="80"
                height="80"
              />
            </div>
            <div>
              <div className="pt-5">
                <p className="text-sm pb-2 font-extrabold">GET IN TOUCH</p>
                <p className="text-sm">Contact us</p>
              </div>
              <div className="flex justify-left pt-4">
                <div className="pr-3">
                  <a href="www.linkedin.com/in/soran-raof-3a142726b">
                    <FaLinkedin className="text-[30px] text-blue-500" />
                  </a>
                </div>
                <div className="">
                  <a href="www.github.com/soranraof">
                    <FaGithubSquare className="text-[30px] text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuNav;
