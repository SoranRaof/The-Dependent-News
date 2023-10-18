import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";
import DependentCircle from "../public/The-Independent-Circle.png";

const MainArticleCard = ({ article }) => {
  if (!article) {
    return <div>loading...</div>; // Or display a loading message or a default card
  }

  return (
    <div className="mx-72 mb-64">
      <div className="flex-cols-1">
        <div className="col-span-1 h-10 w-full"></div>
      </div>
      <div className="flex flex-row items-center h-16">
        <div className="pr-2">
          <Image
            src={DependentCircle}
            alt="The Independent Circle"
            width={35}
            height={35}
          />
        </div>
        <p className="text-2xl pt-1">News</p>
      </div>
      <div className="grid grid-cols-2 h-52 w-full">
        <div className="col-span-1 bg-[#222222] w-full h-full relative">
          <div>
            <p className="text-[12px] absolute z-1 text-white border-b border-[#ec1a2e] bg-[#ec1a2e] px-2 py-1 top-0 left-0">
              {article.topic.toUpperCase()}
            </p>
          </div>
          <div className="grid grid-rows-2 gap-2 px-5 py-10 text-white">
            <div className="text-3xl">
              <p>{article.title}</p>
            </div>
            <div className="text-sm mt-3">
              <ul className="ml-1 border-l border-solid border-white pl-3">
                <li className="flex items-center mb-1">
                  <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                  <p>{}</p>
                </li>
                <li className="flex items-center mb-1">
                  <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                  <p>{}</p>
                </li>
                <li className="flex items-center mb-1">
                  <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                  <p>{}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-contain w-full h-auto"
            src={article.article_img_url}
            alt={article.title}
          />
        </div>
      </div>
    </div>
  );
};

export default MainArticleCard;
