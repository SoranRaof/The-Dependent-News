"use client";
import { useMediaQuery } from "@mui/material";

const MobileNav = () => {
  const isCondensed = useMediaQuery("(max-width: 770px)");

  if (isCondensed) {
    return (
      <div className="border-b border-solid pt-[7px] border-gray-300 h-9 w-full justify-center items-center">
        <div className="w-full h-full grid grid-cols-4">
          <div className="h-full w-full col-span-1 flex justify-center border-b-4 border-transparent hover:border-[#ec1a2e] cursor-pointer">
            <a>
              <p className="text-black font-bold text-[15px]">NEWS</p>
            </a>
          </div>
          <div className="h-full w-full col-span-1 flex justify-center border-b-4 border-transparent hover:border-[#ec1a2e] cursor-pointer">
            <a>
              <p className="text-black font-bold text-[15px]">CODING</p>
            </a>
          </div>
          <div className="h-full w-full col-span-1 flex justify-center border-b-4 border-transparent hover:border-[#ec1a2e] cursor-pointer">
            <a>
              <p className="text-black font-bold text-[15px]">FOOTBALL</p>
            </a>
          </div>
          <div className="h-full w-full col-span-1 flex justify-center border-b-4 border-transparent hover:border-[#ec1a2e] cursor-pointer">
            <a>
              <p className="text-black font-bold text-[15px]">COOKING</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default MobileNav;
