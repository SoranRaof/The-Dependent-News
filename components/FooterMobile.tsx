import React from "react";
import Image from "next/image";
import TheDependentCircle from "../public/the-dependent-circle.jpeg";

const FooterMobile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <footer className="mt-auto">
        <div className="border-t border-solid pt-5 border-gray-300 h-9 w-full flex justify-center items-center">
          <div className="w-full h-full grid grid-cols-2 mx-6">
            <div className="col-span-1 h-full w-full flex justify-center outline outline-yellow-500"></div>
            <div className="col-span-1 h-full w-full flex justify-center outline outline-yellow-500"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterMobile;
