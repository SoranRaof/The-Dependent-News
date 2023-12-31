import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";

interface Article {
  article_img_url: string;
  body: string;
  title: string;
  topic: string;
}

interface MediumArticleCardProps {
  article: Article;
}

const MediumArticleCard = ({ article }: MediumArticleCardProps) => {
  if (!article) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex h-full w-full">
      <div className="grid grid-cols-3 gap-1 h-full">
        <div className="col-span-2 grid grid-rows-2 relative h-full">
          <div className="col-span-1">
            <div className="w-full h-full relative">
              <img
                className="object-cover w-full h-full"
                src={article.article_img_url}
                alt={article.title}
              />
            </div>
            <p className="text-[12px] absolute z-0 text-white border-b border-[#ec1a2e] bg-[#ec1a2e] px-2 py-1 top-0 left-0">
              {article.topic.toUpperCase()}
            </p>
          </div>
          <div className="col-span-1 bg-[#222222] w-full h-full z-10">
            <div className="grid grid-rows-2 gap-2 px-5 py-5 text-white">
              <div className="text-3xl">
                <p>{article.title}</p>
              </div>
              <div className="text-sm">
                <ul className="ml-1 border-l border-solid border-white pl-3">
                  <li className="flex items-center mb-2">
                    <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                    Independent TV: Bel Trew reports from Gaza border
                  </li>
                  <li className="flex items-center mb-2">
                    <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                    Israeli grandmother’s murder ‘posted on her own Facebook’
                  </li>
                  <li className="flex items-center mb-2">
                    <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                    Mother of woman missing after attacks says daughter is alive
                  </li>
                  <li className="flex items-center mb-2">
                    <FaChevronCircleRight className="text-[#ec1a2e] mr-2" />
                    Before and after aerial photos show destruction of Gaza
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 h-full">
          <div className="grid grid-rows-4 gap-1 h-full">
            <div className="row-span-2 grid grid-rows-2 h-full w-full relative">
              <div className="row-span-1">
                <div className="w-full h-full relative">
                  <img
                    className="object-cover w-full h-full"
                    src={article.article_img_url}
                    alt={article.title}
                  />
                </div>
                <p className="text-[12px] absolute z-1 text-white border-b border-[#ec1a2e] bg-[#ec1a2e] px-2 py-1 top-0 left-0">
                  {article.topic.toUpperCase()}
                </p>
              </div>
              <div className="col-span-1 bg-[#222222] w-full h-full z-10">
                <div className="grid grid-rows-2 gap-2 px-4 py-2 text-white">
                  <div className="text-md">
                    <p>
                      Gaza to be ‘razed to the ground’ as Israeli soldiers mass
                      at border and Palestinians run out of fuel
                    </p>
                  </div>
                  <div className="text-sm">
                    <ul className="ml-1 border-l border-solid border-white pl-2">
                      <li className="flex justify-start">
                        <FaChevronCircleRight className="text-[#ec1a2e] mr-2 text-[16px]" />
                        <p>Independent TV: Bel Trew reports from Gaza border</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-1 grid grid-row-2 px-4 py-4 overflow-hidden border border-gray-400">
              <div className="row-span-1">
                <p className="text-[#ec1a2e] text-sm">{article.title}</p>
              </div>
              <div className="flex text-xs">
                <p className="break-words">
                  {article.body.slice(0, 100) + "..."}
                </p>
              </div>
            </div>
            <div className="row-span-1 grid grid-row-2 px-4 py-4 overflow-hidden border border-gray-400">
              <div className="row-span-1">
                <p className="text-[#ec1a2e] text-sm">{article.title}</p>
              </div>
              <div className="flex text-xs">
                <p className="break-words">
                  {article.body.slice(0, 100) + "..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediumArticleCard;
