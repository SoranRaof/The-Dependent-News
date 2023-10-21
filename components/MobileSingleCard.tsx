interface Props {
  article: {
    author: string;
    title: string;
    article_img_url: string;
  };
}

const MobileSingleCard: React.FC<Props> = ({ article }) => {
  if (article) {
    return (
      <div className="h-64 w-full grid grid-rows-5 border border-gray-300">
        <div className="row-span-2">
          {article.article_img_url && (
            <img
              src={article.article_img_url}
              alt="/"
              className="h-full w-full object-cover"
            />
          )}
          {!article.article_img_url && <p>Loading...</p>}
        </div>
        {article.author && article.title && (
          <div className="flex flex-col gap-y-1 row-span-3 p-3">
            <p className="text-sm font-bold text-red-500">{article.author}</p>
            <p className="text-md font-bold text-black overflow-hidden">
              {article.title}
            </p>
          </div>
        )}
        {!article.author ||
          (!article.title && (
            <div className="row-span-3 p-3">
              <p>Loading...</p>
            </div>
          ))}
      </div>
    );
  } else return <p>Loading...</p>;
};

export default MobileSingleCard;
