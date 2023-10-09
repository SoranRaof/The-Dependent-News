import { IoIosArrowDown } from "react-icons/io";

const MobileArticleComments = () => {
  return (
    <div className="mx-3 mb-3">
      <div className="grid grid-cols-2 mb-3">
        <div className="col-span-1 text-[20px]">
          <p>Comments</p>
        </div>
        <div className="col-span-1 flex justify-end mr-2">
          <button className="text-[14px] bg-[#ec1a2e] text-white px-3 py-1 rounded-sm">
            Log in
          </button>
        </div>
      </div>
      <div className="h-full w-full border-b pb-6 border-solid border-gray-400">
        <textarea className="w-full h-full border border-solid border-gray-200 rounded" />
        <button className="flex justify-center items-center text-[10px] bg-[#0074e8] w-full h-7 text-white rounded-sm">
          POST
        </button>
      </div>
      <div className="grid grid-cols-3 h-14 border-b border-solid border-gray-300">
        <div className="col-span1 flex justify-center items-center text-[10px] border-b-2 border-solid border-[#0074e8]">
          <div className="px-1">
            <p>COMMENTS</p>
          </div>
          <div className="border-solid w-auto px-1 rounded bg-gray-200">
            <p>30</p>
          </div>
        </div>
        <div className="col-span-2 px-4 flex justify-end">
          <button className="flex items-center">
            <div className="px-1 text-[15px]">OLDEST</div>
            <div className="text-[12px]">
              <IoIosArrowDown />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileArticleComments;
