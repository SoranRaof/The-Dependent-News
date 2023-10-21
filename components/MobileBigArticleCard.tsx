import { FaChevronCircleRight } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";
import MainArticleCard from "./MainArticleCard";
import DependentCircle from "../public/The-Independent-Circle.png";
import Image from "next/image";

export interface Article {
  article_id: number;
  article_img_url: string;
  author: string;
  body: string;
  comment_count: number;
  created_at: string;
  title: string;
  topic: string;
  votes: number;
}

interface Props {
  article: Article;
}

const MobileBigArticleCard = ({ article }: Props) => {
  const isCondensed = useMediaQuery("(max-width: 770px)");

  if (article && isCondensed) {
    return (
      <div className="w-full h-full pt-3 px-3 justify-center">
        <div className="flex flex-row items-center h-16">
          <div className="pr-2">
            <Image
              src={DependentCircle}
              alt="The Independent Circle"
              width={35}
              height={35}
            />
          </div>
          <p className="text-2xl pt-1">
            {article.topic.slice(0, 1).toLocaleUpperCase() +
              article.topic.slice(1)}
          </p>
        </div>
        <div className="w-full h-fit relative">
          <div>
            <img
              className="object-cover w-full h-auto"
              src={article.article_img_url}
              alt={article.title}
            />
          </div>
          <p className="text-[12px] absolute z-1 text-white border-b border-[#ec1a2e] bg-[#ec1a2e] px-2 py-1 top-0 left-0">
            CODING
          </p>
        </div>
        <div className="bg-[#222222]">
          <div className="w-full h-full p-2">
            <p className="text-white">{article.title}</p>
          </div>
          <div className="text-sm bg-[#222222] py-2 ">
            <ul className="ml-1 border-l border-solid border-white pl-2">
              <li className="flex items-center mb-1">
                <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                <p className="text-white">{article.body.slice(0, 10)}</p>
              </li>
              <li className="flex items-center mb-1">
                <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                <p className="text-white">{article.body.slice(0, 10)}</p>
              </li>
              <li className="flex items-center mb-1">
                <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                <p className="text-white">{article.body.slice(0, 10)}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (article && !isCondensed) {
    return <MainArticleCard article={article} />;
  } else {
    return <div>loading...</div>;
  }
};

export default MobileBigArticleCard;
