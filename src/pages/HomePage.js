import React from "react";
import Nav from "../components/Nav";
import Silder from "../components/Silder";
import { PolicyData } from "../data/PolicyData";

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
    </div>
  );
};

export default HomePage;
