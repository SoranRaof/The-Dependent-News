import { FiChevronDown } from "react-icons/fi";
import { BiSolidUserCircle } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="border-b border-solid border-gray-300 md:px-10 lg:px-20 w-full h-full flex justify-center items-center bg-[#f7f7f7]">
      <div className="h-full w-full">
        <div className="w-full h-full grid grid-cols-2">
          <div className="h-full w-fit col-span-1">
            <div className="h-full w-full flex items-center font-bold border-x border-gray-300">
              <p className="text-black pl-1 w-full col-span-7 text-[10px]">
                UK EDITION
              </p>
              <div className="w-full flex justify-end">
                <FiChevronDown className="text-black text-sm" />
              </div>
            </div>
          </div>
          <div className="h-full w-full">
            <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 items-center justify-end font-bold">
              <div className="h-full w-full">
                <div className="h-full w-full col-span-1 grid grid-cols-4"></div>
              </div>
              <div className="h-full w-full col-span-1 grid grid-cols-1 sm:grid-cols-4">
                <div className="h-full w-full col-span-1"></div>
                <div className="h-full w-full col-span-3">
                  <div className="h-full w-full grid grid-cols-1 sm:grid-cols-3">
                    <div className="h-full w-full col-span-1 justify-start items-center flex overflow-hidden bg-[#337e81] border-l border-r border-solid border-gray-300">
                      <p className="text-white text-[10px] text-center w-full col-span-7">
                        SUBSCRIBE
                      </p>
                    </div>
                    <div className="h-full w-full col-span-1 sm:col-span-2 border-r border-solid border-gray-300 justify-end items-center flex flex-row overflow-hidden">
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
      </div>
    </div>
  );
};

export default Banner;
