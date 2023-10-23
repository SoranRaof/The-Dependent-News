import { useMediaQuery } from "@mui/material";
import MediumArticleCard from "./MediumArticleCard";

export interface Article {
  author: string;
  title: string[];
}

interface MobileSubArticlesProps {
  article: Article;
}

const MobileSubArticles = ({ article }: MobileSubArticlesProps) => {
  const isCondensed = useMediaQuery("(max-width: 770px)");

  if (article && isCondensed) {
    return (
      <div className="grid gap-y-1 grid-rows-3">
        <div className="px-3 ">
          <div className="grid grid-col-2 border border-gray-300">
            <div className="col-span-3/4 w-full h-full px-2 py-2">
              <p className="text-[#ec1a2e] text-sm font-bold">
                {article.author}
              </p>
              <p className="text-md font-bold">{article.title}</p>
            </div>
          </div>
        </div>
        <div className="px-3 ">
          <div className="grid grid-col-2 border border-gray-300">
            <div className="col-span-3/4 w-full h-full px-2 py-2">
              <p className="text-[#ec1a2e] text-sm font-bold">
                {article.author}
              </p>
              <p className="text-md font-bold">{article.title}</p>
            </div>
          </div>
        </div>
        <div className="px-3 ">
          <div className="grid grid-col-2 border border-gray-300">
            <div className="col-span-3/4 w-full h-full px-2 py-2">
              <p className="text-[#ec1a2e] text-sm font-bold">
                {article.author}
              </p>
              <p className="text-md font-bold">{article.title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (article && !isCondensed) {
    return <MediumArticleCard article={article} />;
  } else {
    return <p>Loading...</p>;
  }
};

export default MobileSubArticles;
