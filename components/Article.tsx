import { BsDot, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";
import DonaldTrump from "../public/DonaldTrump.jpeg";
import Image from "next/image";

const Article = () => {
  return (
    <div className=" mb-5">
      <div className="flex-cols-1">
        <div className="col-span-1 h-20 w-full"></div>
      </div>
      <div className="bg-[#222222] text-white pb-10 mb-5">
        <div className="mx-72">
          <div className="w-full h-full py-4">
            <div className="flex items-center text-sm">
              <a>News</a>
              <p className="mx-2">{">"}</p>
              <a>Topics</a>
            </div>
          </div>
          <div className="flex items-center text-5xl mb-8">
            <p>
              Secret Covid Whatsapps reveal who cabinet secretary really thought
              was in charge – Carrie Johnson
            </p>
          </div>
          <div className="flex items-center text-xl mb-5">
            Nadine Dorries said the messages show a group of ‘nasty misogynist
            bullies’ trying to ‘get to Boris through his wife’
          </div>
          <div className="grid grid-cols-2 mb-3">
            <div className="col-span-1">
              <div className="flex items-center">
                <a className="text-[#ec1a2e] pr-2">AUTHOR</a>
                <div className="text-sm pr-2">
                  <BsDot />
                </div>
                <div className="pr-2">01/10/2023</div>
                <div className="text-sm pr-2">
                  <BsDot />
                </div>
                <div className="text-[20px] text-[#ec1a2e] pr-1">
                  <MdOutlineModeComment />
                </div>
                <div>
                  <p className="text-[#ec1a2e]">Comments</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex justify-end items-center">
              <div className="pr-3 text-[#3b5998] text-[31px]">
                <BsFacebook />
              </div>
              <div className="pr-3 text-[#4a90e2] text-[37px]">
                <AiFillTwitterCircle />
              </div>
              <div className="pr-3 text-[#25d366] text-[30px]">
                <BsWhatsapp />
              </div>
            </div>
          </div>
          <div style={{ position: "relative", height: "auto" }}>
            <Image
              src={DonaldTrump}
              alt="Donald Trump"
              sizes="100vw"
              style={{ objectFit: "cover", height: "400px" }}
            />
          </div>
        </div>
      </div>
      <div className="mx-72 text-lg mb-5 pb-5 border-b border-solid border-gray-300">
        <p>
          The Metropolitan Police have reported 795 incidents of ULEZ-related
          crimes in the last six months with hundreds of cameras across London
          being damaged or stolen. Updated figures from the Met include 200
          cameras being stolen and 595 damaged. The news comes after London
          Mayor Sadiq Khan expanded the Ultra Low Emission Zone (ULEZ) in
          August, to cover all London boroughs in a bid to help clear pollution
          in the capital. The Metropolitan Police have reported 795 incidents of
          ULEZ-related crimes in the last six months with hundreds of cameras
          across London being damaged or stolen. Updated figures from the Met
          include 200 cameras being stolen and 595 damaged. The news comes after
          London Mayor Sadiq Khan expanded the Ultra Low Emission Zone (ULEZ) in
          August, to cover all London boroughs in a bid to help clear pollution
          in the capital. The Metropolitan Police have reported 795 incidents of
          ULEZ-related crimes in the last six months with hundreds of cameras
          across London being damaged or stolen. Updated figures from the Met
          include 200 cameras being stolen and 595 damaged. The news comes after
          London Mayor Sadiq Khan expanded the Ultra Low Emission Zone (ULEZ) in
          August, to cover all London boroughs in a bid to help clear pollution
          in the capital. The Metropolitan Police have reported 795 incidents of
          ULEZ-related crimes in the last six months with hundreds of cameras
          across London being damaged or stolen. Updated figures from the Met
          include 200 cameras being stolen and 595 damaged. The news comes after
          London Mayor Sadiq Khan expanded the Ultra Low Emission Zone (ULEZ) in
          August, to cover all London boroughs in a bid to help clear pollution
          in the capital.
        </p>
        <br></br>
        <p>
          The Metropolitan Police have reported 795 incidents of ULEZ-related
          crimes in the last six months with hundreds of cameras across London
          being damaged or stolen. Updated figures from the Met include 200
          cameras being stolen and 595 damaged. The news comes after London
          Mayor Sadiq Khan expanded the Ultra Low Emission Zone (ULEZ) in
          August, to cover all London boroughs in a bid to help clear pollution
          in the capital. The Metropolitan Police have reported 795 incidents of
          ULEZ-related crimes in the last six months with hundreds of cameras
          across London being damaged or stolen. Updated figures from the Met
          include 200 cameras being stolen and 595 damaged. The news comes after
          London Mayor Sadiq Khan expanded the Ultra Low Emission Zone (ULEZ) in
          August, to cover all London boroughs in a bid to help clear pollution
          in the capital. The Metropolitan Police have reported 795 incidents of
          ULEZ-related crimes in the last six months with hundreds of cameras
          across London being damaged or stolen. Updated figures from the Met
          include 200 cameras being stolen and 595 damaged. The news comes after
          London Mayor Sadiq Khan expanded the Ultra Low Emission Zone (ULEZ) in
          August, to cover all London boroughs in a bid to help clear pollution
          in the capital. The Metropolitan Police have reported 795 incidents of
          ULEZ-related crimes in the last six months with hundreds of cameras
          across London being damaged or stolen. Updated figures from the Met
          include 200 cameras being stolen and 595 damaged. The news comes after
          London Mayor Sadiq Khan expanded the Ultra Low Emission Zone (ULEZ) in
          August, to cover all London boroughs in a bid to help clear pollution
          in the capital.
        </p>
      </div>
    </div>
  );
};

export default Article;
