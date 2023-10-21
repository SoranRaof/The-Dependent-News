export interface Article {
  author: string;
  title: string[];
}

interface MobileSubArticlesProps {
  article: Article;
}

const MobileSubArticles = ({ article }: MobileSubArticlesProps) => {
  if (article) {
    return (
      <div className="mt-3 px-3 ">
        <div className="grid grid-col-2 border border-gray-300">
          <div className="col-span-3/4 w-full h-full pt-2 px-2 py-2">
            <p className="text-[#ec1a2e] text-sm font-bold">{article.author}</p>
            <p className="text-md font-bold">{article.title}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default MobileSubArticles;
