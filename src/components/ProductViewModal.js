import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productData from "../data/products";
import { remove } from "../redux/product-modal/productModalSlice";
import ProductView from "./ProductView";

const ProductViewModal = () => {
  const productSlug = useSelector((state) => state.productModal.value);
  console.log(productSlug);
  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);
  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  return (
    <div
      className={`fixed w-full h-full top-0 left-0 z-101 overflow-hidden bg-[rgba(0,0,0,0.4)]  ${
        product === undefined ? "opacity-0 invisible" : "opacity-1 visible"
      }`}
    >
      <div className="m-auto p-3 bg-white w-[50%] relative">
        <ProductView product={product}></ProductView>
        <div className="absolute top-0 right-0">
          <button
            className="border border-slate-200 bg-blue-600 p-2"
            onClick={() => dispatch(remove())}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
