import React from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const HeaderMain = () => {
  return (
    <div>
      <div className=" w-full max-w-[1300px] flex items-center mx-auto justify-between mt-5 mobile-header">
        <div className="w-[300px] h-[75px]">
          <img
            className="w-full h-full object-cover"
            src="https://logos.flamingtext.com/City-Logos/Noa-Logo.png"
            alt=""
          />
        </div>
        <div className="flex flex-1 items-center">
          <input
            className="w-full p-3 border border-slate-500 outline-none rounded-2xl"
            type="text"
            placeholder="Search for products"
          />
          <a
            className=" p-4 bg-[#A04646] border-2 border-slate-300 rounded-2xl"
            href="/#"
          >
            <FaSearch />
          </a>
        </div>
        <div>
          <ul className="flex items-center justify-between gap-x-5 ml-3">
            <li className="flex items-center gap-x-2">
              <FaUser className="w-[20px] h-[20px]" />
              <div className="">
                <p className="text-sm font-light leading-3">Signin</p>
                <p className="text-lg font-normal">Account</p>
              </div>
            </li>
            <li>
              <FaHeart className="w-[20px] h-[20px]" />
            </li>
            <li className="flex items-center gap-x-2">
              <Link to="/cart">
                <FaShoppingCart className="w-[20px] h-[20px] cursor-pointer hover:text-green-600" />
              </Link>
              <div className="leading-3">
                <p className="text-sm font-light leading-3">Total</p>
                <p className="text-lg font-normal">0đ</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
