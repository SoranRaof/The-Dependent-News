const SingleArticleCard = ({ article }) => {
  if (!article) {
    return <div>loading...</div>;
  }

  return (
    <div className="h-96 grid grid-rows-5 border border-gray-300">
      <div className="row-span-3">
        <img
          className="object-contain w-full h-auto"
          src={article.article_img_url}
          alt={article.title}
        />
      </div>
      <div className="row-span-2 grid grid-row-4 px-2 py-2 overflow-hidden">
        <div className="row-span-1 inline-block">
          <p className="text-[#ec1a2e] text-md">{article.title}</p>
        </div>
        <div className="flex text-sm pt-1">
          <p className="break-words">{article.body.slice(0, 100) + "..."}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleArticleCard;
