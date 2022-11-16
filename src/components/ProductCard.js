import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { set } from "../redux/product-modal/productModalSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="product-card mt-3 text-center">
      <Link to={`/catalog/${props.slug}`}>
        <div className="product-card__image ">
          <img
            className="w-[200px] h-[200px] mx-auto object-cover"
            src={props.img01}
            alt=""
          />
          {/* <img src={props.img02} alt="" /> */}
        </div>
        <h3 className="product-card__name">{props.name}</h3>
        <div className="product-card__price">Giá bán: {props.price}</div>
      </Link>
      <div className="product-card__btn ">
        <button
          className="inline-block p-3 bg-green-400 boder border-slate-400 mb-3"
          onClick={() => dispatch(set(props.slug))}
        >
          Chọn mua
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
