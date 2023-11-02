import React from "react";
import { LuMenu } from "react-icons/lu";

const BottomHeader = () => {
  return (
    <div className="h-10 bg-a_light text-sm text-white px-4 flex items-center">
      <p className="flex items-center capitalize gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        <LuMenu className="text-xl" />
        all
      </p>
      <p className="hidden md:inline-flex items-center capitalize h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        todays deals
      </p>
      <p className="hidden md:inline-flex items-center capitalize h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        customer service
      </p>
      <p className="hidden md:inline-flex items-center capitalize h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        ragistry
      </p>
      <p className="hidden md:inline-flex items-center capitalize h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        gift cards
      </p>
      <p className="hidden md:inline-flex items-center capitalize h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        sell
      </p>
      <p className="hidden md:inline-flex items-center capitalize h-8 px-2 border border-transparent hover:border-red-600 text-a_yellow hover:text-red-400 cursor-pointer duration-300">
        sign out
      </p>
    </div>
  );
};

export default BottomHeader;
