import Image from "next/image";
import TheIndependentCircle from "../public/The-Independent-Circle.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-5">
        <div className="pt-5 border-t border-solid border-gray-300 h-9 w-full flex justify-center items-center">
          <div className="w-full h-full grid grid-cols-2 mx-6 pl-10">
            <div className="flex-col col-span-1 h-full w-full flex justify-center">
              <Image
                src={TheIndependentCircle}
                alt="The Independent Circle Logo"
                width="80"
                height="80"
              />
              <div className="pt-5">
                <p className="text-sm pb-2 font-extrabold">GET IN TOUCH</p>
                <p className="text-xs">Contact us</p>
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
            <div className="col-span-1 h-full w-full flex justify-left">
              <div className="flex flex-col justify-left">
                <p className="font-bold">TOPICS</p>
                <a className="py-1.5 text-xs">ALL</a>
                <a className="py-1.5 text-xs">Coding</a>
                <a className="py-1.5 text-xs">Football</a>
                <a className="py-1.5 text-xs">Cooking</a>
                <a className="py-1.5 text-xs">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
