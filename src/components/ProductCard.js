import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { set } from "../redux/product-modal/productModalSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="product-card mt-3 flex flex-col text-center">
      <Link to={`/catalog/${props.slug}`}>
        <div className="product-card__image ">
          <img
            className="w-[200px] h-[200px] mx-auto object-cover mobile-product_picture"
            src={props.img01}
            alt=""
          />
          {/* <img src={props.img02} alt="" /> */}
        </div>
        <h3 className="product-card__name mobile-product_text">{props.name}</h3>
        <div className="product-card__price mobile-product_text text-orange-600">
          Giá bán: {props.price}
        </div>
      </Link>
      <div className="product-card__btn mt-auto">
        <button
          className="inline-block mobile-product_button p-3 bg-green-400 boder border-slate-400 mb-3 rounded-lg mobile-product_text mt-auto "
          onClick={() => dispatch(set(props.slug))}
        >
          Chọn mua
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
