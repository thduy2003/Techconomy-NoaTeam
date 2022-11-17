import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ListLink = [
  {
    id: 1,
    to: "/",
    title: "Trang Chủ",
  },
  {
    id: 2,
    to: "/catalog",
    title: "Sản phẩm",
  },
  {
    id: 3,
    to: "/blog",
    title: "Blog",
  },
  {
    id: 4,
    to: "/contact",
    title: "Liên lạc",
  },
];

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-center p-5 bg-white text-[#A04646] shadow-md gap-x-5">
        {ListLink.map((item) => (
          <NavLink
            to={item.to}
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
            key={item.id}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
