import CurrentWeather from "./CurrentWeather";
import { FiChevronDown } from "react-icons/fi";
import { BiSolidUserCircle } from "react-icons/bi";
import Image from "next/image";
import TheDependentLogo from "../public/The-Independent-Logo.png";

const Header = () => {
  return (
    <div className="border-b border-solid border-gray-300 px-6 h-8 w-full flex justify-center items-center bg-[#f7f7f7]">
      <div className="w-11/12 h-full">
        <div className="w-full h-full grid grid-cols-2">
          <div className="col-span-1 h-full w-full">
            <div className="h-full w-1/4 grid grid-cols-8 items-center justify-start font-bold border-l border-r border-solid border-gray-300">
              <p className="text-black pl-1 w-full col-span-7 text-[10px]">
                UK EDITION
              </p>
              <div className="w-full flex justify-end">
                <FiChevronDown className="text-black text-sm" />
              </div>
            </div>
          </div>
          <div>
            <div className="h-full w-full grid grid-cols-2 items-center justify-end font-bold">
              <div className="col-span-1 h-full w-full">
                <div className="h-full w-full col-span-1 grid grid-cols-4"></div>
              </div>
              <div className="h-full w-full col-span-1 grid grid-cols-4">
                <div className="h-full w-full col-span-1"></div>
                <div className="h-full w-full col-span-3">
                  <div className="h-full w-full grid grid-cols-3">
                    <div className="h-full w-full col-span-1 justify-start items-center flex overflow-hidden bg-[#337e81] border-l border-r border-solid border-gray-300">
                      <p className="text-white text-[10px] text-center w-full col-span-7 ">
                        {/* <CurrentWeather /> */}
                        SUBSCRIBE
                      </p>
                    </div>
                    <div className="h-full w-full col-span-2 border-r border-solid border-gray-300 justify-end items-center flex flex-row overflow-hidden">
                      <div className="pl-2 w-10 flex justify-start">
                        <BiSolidUserCircle className="text-black text-[30px]" />
                      </div>
                      <p className="text-black w-full col-span-7 text-[10px] font-extrabold justify-start pl-2">
                        LOG IN / REGISTER
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 grid grid-cols-2 outline outline-green-600 justify-start items-center">
          <div className="col-span-1 h-full w-full flex items-center justify-start ">
            <div className="image">
              <Image
                src={TheDependentLogo}
                alt="The Dependent Logo"
                width="200"
                height="50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
