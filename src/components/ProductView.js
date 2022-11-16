import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { addItem } from "../redux/shopping-cart/cartItemsSlice";
const ProductView = (props) => {
  let product = props.product;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (product === undefined)
    product = {
      title: "",
      price: "",
      image01: null,
      image02: null,
      categorySlug: "",
      colors: [],
      slug: "",
      size: [],
      description: "",
    };

  const [previewImg, setPreviewImg] = useState(product.image01);

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [color, setColor] = useState(undefined);

  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);
  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };
  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);
  const check = () => {
    if (color === undefined) {
      alert("Vui lòng chọn màu sắc!");
      return false;
    }
    if (size === undefined) {
      alert("Vui lòng chọn kích thước");
      return false;
    }
    return true;
  };
  const addToCart = () => {
    if (check()) {
      let newItem = {
        slug: product.slug,
        color: color,
        size: size,
        price: product.price,
        quantity: quantity,
      };
      if (dispatch(addItem(newItem))) {
        alert("Success");
      } else {
        alert("Fail");
      }
    }
  };
  const goToCart = () => {
    if (check()) {
      let newItem = {
        slug: product.slug,
        color: color,
        size: size,
        price: product.price,
        quantity: quantity,
      };
      if (dispatch(addItem(newItem))) {
        navigate("/cart");
      } else {
        alert("Fail");
      }
    }
  };

  return (
    <div>
      <div className="flex items-start justify-start max-w-[1300px] mt-5 mx-auto">
        <div className="flex items-start justify-start w-[60%] flex-wrap ">
          <div className="w-[20%]">
            <div
              className="cursor-pointer"
              onClick={() => setPreviewImg(product.image01)}
            >
              <img src={product.image01} alt="" />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setPreviewImg(product.image02)}
            >
              <img src={product.image02} alt="" />
            </div>
          </div>
          <div className="relative flex-grow pt-[100%]">
            <img
              className="absolute top-0 left-[50%] h-[100%] -translate-x-1/2 "
              src={previewImg}
              alt=""
            />
          </div>
          <div
            className={`w-full relative overflow-hidden px-3 py-4 h-[400px] ${
              descriptionExpand ? "h-[max-content]" : ""
            }`}
          >
            <div className="mx-2">Chi tiết sản phẩm</div>
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ">
              <button
                className="p-3 bg-blue-400"
                onClick={() => setDescriptionExpand(!descriptionExpand)}
              >
                {descriptionExpand ? "Thu gọn" : "Xem thêm"}
              </button>
            </div>
          </div>
        </div>
        <div className="flex-grow sticky top-[70px] pt-2">
          <div className=" text-[2.5rem]  font-bold ">{product.title}</div>
          <div className="mt-2">Giá bán: {product.price}</div>
          <div className="mt-2 flex items-center">
            <span>Mã giảm giá</span>
            <ul className="flex">
              <li className="ml-3 border border-slate-400 bg-pink-500 p-2 text-white">
                Giảm 10%
              </li>
              <li className="mx-3 border border-slate-400 bg-pink-500 p-2 text-white">
                Miễn phí vận chuyển
              </li>
              <li className="border border-slate-400 bg-pink-500 p-2 text-white">
                Giảm 20%
              </li>
            </ul>
          </div>
          <div className="mt-2 ">
            <div className="mb-1">Màu sắc</div>
            <div className="mb-2 flex items-center justify-start">
              {product.colors.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setColor(item)}
                  className={`flex items-center justify-center border-2 border-[#8d8d8d] w-[50px] h-[50px] cursor-pointer mr-2 rounded-[50%] te  ${
                    color === item ? " border-blue-600" : ""
                  }`}
                >
                  <div
                    className={`color-${item} w-[40px] h-[40px] rounded-[50%] `}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <div className="mb-1">Kích cỡ</div>
            <div className="flex">
              <a
                href="https://apps.apple.com/vn/app/ar-ruler-th%C6%B0%E1%BB%9Bc-%C4%91o-b%C4%83ng-camera/id1326773975?l=vi"
                target="_blank"
                className="border border-slate-400 bg-green-400 p-3 text-white"
                rel="noreferrer"
              >
                Lấy số đo từ AR
              </a>
              <button className="ml-3 border border-slate-400 bg-blue-400 p-3 text-white">
                Bảng quy đổi kích cỡ
              </button>
            </div>
            <div className="mb-2 mt-2 flex items-center justify-start">
              {product.size.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSize(item)}
                  className={`flex items-center justify-center border-2 border-[#8d8d8d] w-[50px] h-[50px] cursor-pointer mr-2 rounded-[50%]  ${
                    size === item ? " border-blue-600" : ""
                  }`}
                >
                  <span className="">{item.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <div>Vận chuyển</div>
            <select className="ml-2 border border-slate-200 bg-slate-600 outline-none p-2 text-white">
              Chọn phương thức vận chuyển
              <option value="express">Vận chuyển nhanh</option>
              <option value="hoatoc">Hỏa tốc</option>
              <option value="free">Miễn phí vận chuyển</option>
            </select>
          </div>
          <div className="mt-2">
            <div>Số lượng</div>
            <div className="flex items-start justify-start mt-2">
              <div
                className="flex items-center justify-center w-[30px] h-[30px] border-2 border-[#8d8d8d] cursor-pointer "
                onClick={() => updateQuantity("minus")}
              >
                <FaMinus />
              </div>
              <div className="flex items-center justify-center w-[90px] h-[30px] border-2 border-t-[#8d8d8d]  border-b-[#8d8d8d]">
                {quantity}
              </div>
              <div
                className="flex items-center justify-center w-[30px] h-[30px] border-2 border-[#8d8d8d] cursor-pointer "
                onClick={() => updateQuantity("plus")}
              >
                <FaPlus />
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div>
              <button
                className="border text-[20px] border-slate-400 bg-green-300 text-black p-3"
                onClick={() => addToCart()}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
            <div>
              <button
                className="ml-3 border text-[20px] border-slate-400 bg-green-500 text-black p-3"
                onClick={() => goToCart()}
              >
                Mua ngay
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="border border-slate-200 p-2">
              7 ngày trả hàng miễn phí{" "}
            </div>
            <div className="mx-auto border border-slate-200 p-2">
              Hỗ trợ bảo hành
            </div>
            <div className="border border-slate-200 p-2">
              Hàng chính hãng 100%
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-[25px] font-semibold">Thông tin người bán</h1>
            <div className="border border-slate-400 py-5">
              <div className="flex items-center">
                <div>
                  <h3 className="">Shop Nguyễn Văn Nam</h3>
                  <button className="border border-pink-400 bg-blue-200 px-1">
                    Chat ngay
                  </button>
                </div>
                <div className="flex">
                  <div className="mx-5">
                    <p>Giao dịch thành công: 5000</p>
                    <p>Giao dịch thất bại : 5</p>
                  </div>
                  <div>
                    <p>Yêu thích: 20000</p>
                    <p>Không thích: 5</p>
                  </div>
                </div>
              </div>

              <h2>Đã tham gia 2 năm trước</h2>
              <h3>Đánh giá : 50000</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
