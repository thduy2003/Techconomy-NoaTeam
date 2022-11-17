import React, { useCallback, useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import ProductCard from "../components/ProductCard";
import category from "../data/category";
import colors from "../data/colors";
import productData from "../data/products";
import size from "../data/size";

const ProductsPage = () => {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };
  const productList = productData.getAllProducts();
  const [products, setProducts] = useState(productList);
  const [filter, setFilter] = useState(initFilter);
  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({
            ...filter,
            color: [...filter.color, item.color],
          });
          break;
        case "SIZE":
          setFilter({
            ...filter,
            size: [...filter.size, item.size],
          });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({
            ...filter,
            color: newColor,
          });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({
            ...filter,
            size: newSize,
          });
          break;
        default:
      }
    }
  };
  const updateProducts = useCallback(() => {
    let temp = productList;
    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }
    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }
    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    setProducts(temp);
  }, [productList, filter]);
  const clearFilter = () => setFilter(initFilter);
  useEffect(() => {
    updateProducts();
  }, [updateProducts]);
  return (
    <div className="flex items-start justify-start  max-w-[1300px] mx-auto mobile-product">
      <div className="productPage-left w-[20%] border-4 border-[#A04646] p-2 mobile-product_dmsp ">
        <div className="w-full text-[25px] mobile-product_text">
          Danh mục sản phẩm
        </div>
        <div className="mt-4">
          <h3 className="text-[#A04646] text-[25px] font-bold mobile-product_text">
            Loại sản phẩm
          </h3>
          {category.map((item, index) => (
            <div className="mb-4">
              <Checkbox
                key={index}
                label={item.display}
                onChange={(input) =>
                  filterSelect("CATEGORY", input.checked, item)
                }
                checked={filter.category.includes(item.categorySlug)}
              ></Checkbox>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h3 className="text-[#A04646] text-[25px] font-bold mobile-product_text">
            Màu sắc
          </h3>
          {colors.map((item, index) => (
            <div className="mb-4">
              <Checkbox
                key={index}
                label={item.display}
                onChange={(input) => filterSelect("COLOR", input.checked, item)}
                checked={filter.color.includes(item.color)}
              ></Checkbox>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h3 className="text-[#A04646] text-[25px] font-bold mobile-product_text">
            Kích thước
          </h3>
          {size.map((item, index) => (
            <div className="mb-4">
              <Checkbox
                key={index}
                label={item.display}
                onChange={(input) => filterSelect("SIZE", input.checked, item)}
                checked={filter.size.includes(item.size)}
              ></Checkbox>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button
            className="p-2 border border-slate-400 bg-yellow-400 text-white"
            onClick={() => clearFilter()}
          >
            Xóa bộ lọc
          </button>
        </div>
      </div>
      <div className="productPage-right grow ">
        <h1>Catalog</h1>
        <input
          className="p-3 w-full border border-slate-300 outline-none"
          type="text"
          placeholder="Search products..."
        />
        <div className="grid grid-cols-3 gap-x-5 ">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              img01={item.image01}
              img02={item.image02}
              name={item.title}
              price={Number(item.price).toLocaleString() + "VNĐ"}
              slug={item.slug}
            ></ProductCard>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://thduy2003.github.io/AR-NOA/"
            className=" inline-block p-3 bg-blue-400 boder border-slate-400 mb-3 rounded-2xl "
            target="_blank"
            rel="noreferrer"
          >
            Thử sản phẩm với Web AR
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
