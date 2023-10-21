const Nav = () => {
  return (
    <div className="border-b border-solid border-gray-300 h-10 w-full flex justify-center items-center bg-[#f7f7f7] lg:px-20 md:px-10">
      <div className="w-full h-full grid grid-cols-4 border-x border-solid border-gray-300">
        <div className="h-full w-full col-span-1 flex justify-center border-b-4 border-transparent hover:border-[#ec1a2e] cursor-pointer">
          <a className="flex justify-center items-center">
            <p className="text-black font-bold text-[15px]">NEWS</p>
          </a>
        </div>
        <div className="h-full w-full col-span-1 flex justify-center border-b-4 border-transparent hover:border-[#ec1a2e] cursor-pointer">
          <a className="flex justify-center items-center">
            <p className="text-black font-bold text-[15px]">CODING</p>
          </a>
        </div>
        <div className="h-full w-full col-span-1 flex justify-center border-b-4 border-transparent hover:border-[#ec1a2e] cursor-pointer">
          <a className="flex justify-center items-center">
            <p className="text-black font-bold text-[15px]">FOOTBALL</p>
          </a>
        </div>
        <div className="h-full w-full col-span-1 flex justify-center border-b-4 border-transparent hover:border-[#ec1a2e] cursor-pointer">
          <a className="flex justify-center items-center">
            <p className="text-black font-bold text-[15px]">COOKING</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
