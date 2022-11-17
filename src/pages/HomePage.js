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
        <div className="grid grid-cols-4 gap-x-5 w-full max-w-[1300px] mx-auto mobile-policy">
          {PolicyData.map((item) => (
            <div
              key={item.id}
              className="policy-item flex items-center rounded-sm justify-center shadow-lg"
            >
              <div className="policy-icon">{item.icon}</div>
              <div className="policy-info ml-3 ">
                <div className="info-name text-lg font-normal mobile-policy_name">
                  {item.name}
                </div>
                <div className="info-desc text-sm mobile-policy_desc">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-category">
        <div className="max-w-[1300px] mx-auto">
          <h1 className="text-center text-[#A04646] text-[50px] mobile-dmsp">
            Danh mục sản phẩm
          </h1>
          <div className="flex justify-center mt-[30px]  ">
            <div className="text-center ">
              <div className="rounded-full flex items-center justify-center w-[100px] h-[100px] bg-[#D9D9D9] mobile-dmsp_a">
                <FaGlasses className="w-[100px] h-[50px] mobile-dmsp_c "></FaGlasses>
              </div>
              <h3 className="text-[20px] mobile-dmsp_d">Kính mắt</h3>
            </div>

            <div className="text-center mx-[150px] mobile-dmsp_b">
              <div className="rounded-full flex items-center justify-center w-[100px] h-[100px] bg-[#D9D9D9] mobile-dmsp_a">
                <FaHatCowboy className="w-[100px] h-[50px] mobile-dmsp_c"></FaHatCowboy>
              </div>
              <h3 className="text-[20px] mobile-dmsp_d">Nón</h3>
            </div>
            <div className="text-center ">
              <div className="rounded-full flex items-center justify-center w-[100px] h-[100px] bg-[#D9D9D9] mobile-dmsp_a">
                <FaRing className="w-[100px] h-[50px] mobile-dmsp_c"></FaRing>
              </div>
              <h3 className="text-[20px] mobile-dmsp_d">Bông tai</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
