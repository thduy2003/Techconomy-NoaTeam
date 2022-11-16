import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import productData from "../data/products";
import ProductView from "./ProductView";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const product = productData.getProductBySlug(productSlug);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <div>
      <section>
        <ProductView product={product}></ProductView>
      </section>
    </div>
  );
};

export default ProductDetail;
