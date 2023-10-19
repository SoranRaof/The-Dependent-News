import CurrentWeather from "./CurrentWeather";
import Image from "next/image";
import TheDependentLogo from "../public/The-Independent-Logo.png";

const Header = () => {
  return (
    <div className="border-b border-solid border-gray-300 px-6 w-full h-full flex justify-center items-center bg-[#f7f7f7]">
      <div className="w-1/2 h-full">
        <div className="h-20 grid grid-cols-2 justify-start items-center">
          <div className="col-span-1 h-full w-full flex items-center justify-start ">
            <div className="image">
              <Image
                src={TheDependentLogo}
                alt="The Dependent Logo"
                width="300"
                height="50"
              />
            </div>
          </div>
          <div className="col-span-1 flex justify-end">
            <div className="">
              WEATHER WIDGET
              {/* <CurrentWeather /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
