"use client";
import Image from "next/image";
import TheIndependentCircle from "../public/The-Independent-Circle.png";
import Footer from "./Footer";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";

const MobileFooter = () => {
  const isCondensed = useMediaQuery("(max-width: 770px)");

  if (isCondensed) {
    return (
      <div className="flex flex-col">
        <div className="mt-5">
          <div className="pt-4 border-t border-solid border-gray-300 h-9 w-full flex justify-center items-center">
            <div className="w-full h-full grid grid-cols-2 mx-6">
              <div className="flex-col col-span-1 h-full w-full flex justify-center">
                <Image
                  src={TheIndependentCircle}
                  alt="The Independent Circle Logo"
                  width="80"
                  height="80"
                />
                <div className="pt-4">
                  <p className="text-sm pb-2 font-bold">GET IN TOUCH</p>
                  <p className="text-sm">Contact us</p>
                </div>
                <div className="flex justify-left">
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
              <div className="col-span-1 h-full w-full flex justify-end">
                <div className="flex flex-col justify-left">
                  <p className="font-bold">TOPICS</p>
                  <a className="py-1.5 text-sm">News</a>
                  <a className="py-1.5 text-sm">Coding</a>
                  <a className="py-1.5 text-sm">Football</a>
                  <a className="py-1.5 text-sm">Cooking</a>
                  <a className="py-1.5 text-sm">Portfolio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Footer />;
  }
};

export default MobileFooter;
