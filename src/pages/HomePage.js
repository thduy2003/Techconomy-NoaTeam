import React from "react";
import Nav from "../components/Nav";
import Silder from "../components/Silder";
import { PolicyData } from "../data/PolicyData";
import { FaGlasses, FaHatCowboy, FaRing } from "react-icons/fa";
const HomePage = () => {
  return (
    <div>
      <Silder></Silder>
      <section className="section">
        <div className="grid grid-cols-4 gap-x-5 w-full max-w-[1300px] mx-auto">
          {PolicyData.map((item) => (
            <div
              key={item.id}
              className="policy-item flex items-center rounded-sm justify-center shadow-lg"
            >
              <div className="policy-icon">{item.icon}</div>
              <div className="policy-info ml-3">
                <div className="info-name text-lg font-normal">{item.name}</div>
                <div className="info-desc text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-category">
        <div className="max-w-[1300px] mx-auto">
          <h1 className="text-center text-[#A04646] text-[50px]">
            Danh mục sản phẩm
          </h1>
          <div className="flex justify-center mt-[30px]">
            <div className="text-center ">
              <div className="rounded-full flex items-center justify-center w-[100px] h-[100px] bg-[#D9D9D9]">
                <FaGlasses className="w-[100px] h-[50px]"></FaGlasses>
              </div>
              <h3 className="text-[20px]">Kính mắt</h3>
            </div>

            <div className="text-center mx-[150px] ">
              <div className="rounded-full flex items-center justify-center w-[100px] h-[100px] bg-[#D9D9D9]">
                <FaHatCowboy className="w-[100px] h-[50px]"></FaHatCowboy>
              </div>
              <h3 className="text-[20px]">Nón</h3>
            </div>
            <div className="text-center ">
              <div className="rounded-full flex items-center justify-center w-[100px] h-[100px] bg-[#D9D9D9]">
                <FaRing className="w-[100px] h-[50px]"></FaRing>
              </div>
              <h3 className="text-[20px]">Bông tai</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
