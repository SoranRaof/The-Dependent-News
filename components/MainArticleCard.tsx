import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";
import DependentCircle from "../public/The-Independent-Circle.png";

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

interface MainArticleCardProps {
  article: Article;
}

const MainArticleCard = ({ article }: MainArticleCardProps) => {
  if (!article) {
    return <div>loading...</div>;
  }

  return (
    <div className="mx-auto max-w-5xl p-4 xl:p-12 h-auto">
      <div className="">
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
        <p className="text-2xl pt-1">
          {article.topic.slice(0, 1).toLocaleUpperCase() +
            article.topic.slice(1)}
        </p>
      </div>
      <div className="grid grid-cols-2 h-full w-full">
        <div className="col-span-1 bg-[#222222] w-full h-full relative">
          <div className="inline-block bg-red-500">
            <p className="text-[12px] text-white border-b border-[#ec1a2e] bg-[#ec1a2e] px-2 py-1 top-0 left-0">
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
            className="object-cover w-full h-auto"
            src={article.article_img_url}
            alt={article.title}
          />
        </div>
      </div>
    </div>
  );
};

export default MainArticleCard;
