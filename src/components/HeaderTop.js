import React from "react";
import { FaShopify, FaChevronDown } from "react-icons/fa";
const HeaderTop = () => {
  return (
    <div>
      <div className=" bg-slate-400 gap-x-5 ">
        <div className="w-full max-w-[1300px] flex items-center justify-between mx-auto">
          <p className="flex items-center gap-x-2">
            <FaShopify />
            Up to 70% off the entire store!
          </p>
          <div className="flex gap-x-5 items-center">
            <p className="flex items-center gap-x-1">
              <FaChevronDown />
              VND
            </p>
            <p className="flex items-center gap-x-1">
              <FaChevronDown /> English
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
