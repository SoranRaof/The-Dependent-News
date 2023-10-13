import { IoIosArrowDown } from "react-icons/io";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";

const ArticleComments = () => {
  return (
    <div className="mx-96 mb-3">
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
      <div className="grid grid-cols-3 w-full h-auto px-6 py-3 border-b border-solid border-gray-300 pb-4">
        <div className="col-span-1 h-10 flex justify-center">Picture</div>
        <div className="col-span-2">
          <p>John Smith</p>
          <p className="text-[#646464] text-[10px] pb-2">30 min ago</p>
          <p className="text-[#646464] pb-2">
            Object-relational mapping (ORM) is a way to align programming code
            with database structures. ORM uses metadata descriptors to create a
            layer between the programming language and a relational database.
          </p>
          <div className="grid grid-cols-4">
            <div className="col-span-2">
              <button className="text-[15px] text-[#646464] text-decoration-line: underline">
                Reply
              </button>
            </div>
            <div className="col-span-1 bg-gray-100 flex justify-center items-center w-auto">
              <p className="px-1 text-[15px] text-[#646464]">4</p>
              <button className="px-1 text-[18px] text-[#646464]">
                <RiThumbUpFill />
              </button>
            </div>
            <div className="col-span-1 bg-gray-100 flex justify-center items-center w-auto">
              <p className="px-1 text-[15px] text-[#646464]">0</p>
              <button className="px-1 text-[18px] text-[#646464]">
                <RiThumbDownFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleComments;
