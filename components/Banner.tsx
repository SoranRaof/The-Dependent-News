import { FiChevronDown } from "react-icons/fi";
import { BiSolidUserCircle } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="border-b border-solid border-gray-300 md:px-10 lg:px-20 w-full h-10 flex justify-center items-center bg-[#f7f7f7]">
      <div className="h-full w-full">
        <div className="w-full h-full grid grid-cols-2">
          <div className="h-full w-fit col-span-1">
            <div className="h-full w-full px-1 flex items-center font-bold border-x border-gray-300">
              <p className="text-black w-full col-span-7 text-[13px]">
                UK EDITION
              </p>
            </div>
          </div>
          <div className="h-full w-full grid grid-cols-4 items-center justify-end font-bold">
            <div className="col-span-2"></div>
            <div className="h-full w-full col-span-1 bg-[#337e81] flex justify-center items-center">
              <p className="text-white font-bold text-sm">SUBSCRIBE</p>
            </div>
            <div className="h-full w-full col-span-1 gap-1 border-r border-x border-gray-300 flex justify-center items-center">
              <div className="flex justify-center items-center">
                <BiSolidUserCircle className="text-black text-3xl" />
              </div>
              <div className="flex justify-center items-center">
                <p className="text-black w-full col-span-2 text-sm font-bold">
                  LOGIN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
