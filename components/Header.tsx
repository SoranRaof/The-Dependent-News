import CurrentWeather from "./CurrentWeather";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  return (
    // <div
    //   id="header-wrapper"
    //   className="relative m-auto #fff opacity-100 visible text-base lg:block outline outline-black"
    // >
    //   <div className="opacity-100 #f7f7f7 border-b border-solid border-#d3d3d3 text-base lg:block outline outline-blue">
    //     <div className="opacity-100 flex w-[1000px] h-[34px] justify-end m-auto border-r border-solid border-#d3d3d3 ml-0">
    //       <div className="block">
    //         <h4 className="w-[170px] h-[34px] px-[12px] border-l  border-r border-solid border-#d3d3d3 font-bold">
    //           <CurrentWeather />
    //         </h4>
    //       </div>
    //       <a
    //         href="#"
    //         className="flex h-[34px] items-center px-[12px] border-l border-solid border-#d3d3d3 bg-#337e81 text-sm text-white hover:bg-#337e81 hover:text-white uppercase"
    //       >
    //         SUBSCRIBE
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className="outline outline-black px-6 h-8 w-full flex justify-center items-center">
      <div className=" outline-blue-700 w-9/12 h-full">
        <div className="w-full h-full grid grid-cols-2">
          <div className="col-span-1 h-full w-full">
            <div className="h-full w-1/4 outline outline-yellow-500 grid grid-cols-8 items-center justify-start font-bold">
              <p className="text-black w-full outline col-span-7 outline-green-700 text-[10px]">
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
                <div className="outline-purple-700 outline h-full w-full col-span-1 grid grid-cols-4"></div>
              </div>
              <div className="h-full w-full col-span-1 grid grid-cols-4">
                <div className="h-full w-full col-span-1"></div>
                <div className="h-full w-full col-span-3">
                  <div className="h-full w-full grid grid-cols-3">
                    <div className="h-full w-full outline-green-500 outline col-span-1 justify-start items-center flex">
                      <p className="text-black w-full col-span-7 text-[10px]">
                        <CurrentWeather />
                      </p>
                    </div>
                    <div className="h-full w-full col-span-2 outline-red-500 outline justify-end items-center flex flex-row">
                      {/* <userICON></userICON> */}
                      <p className="text-black w-full col-span-7 text-[10px]">
                        LOGIN
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

export default Header;
