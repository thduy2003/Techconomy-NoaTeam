import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import productData from "../data/products";
const CartPage = () => {
  const cartItems = useSelector((state) => state.cartItems.value);
  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );
  console.log(productData.getCartItemsInfo(cartItems));

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);
  return (
    <div>
      <div className="max-w-[1000px] mx-auto">
        <div className="my-5 border border-slate-400 bg-yellow-400 p-3">
          Bạn nhớ chọn vào mục <strong>Chọn voucher</strong> ở mã khuyến mãi để
          được giảm giá hoặc miễn phí vận chuyển nha
        </div>
        <div>
          {cartProducts.map((item, index) => (
            <CartItem item={item} index={index}></CartItem>
          ))}
        </div>
        <div className="grid grid-cols-2 mt-3">
          <div className="border border-green-200">
            <p>
              Bạn đang có <strong>{totalProducts}</strong> sản phẩm trong giỏ
              hàng
            </p>
            <p>Thành tiền : {totalPrice}</p>
            <p>
              <strong>Bạn đã áp dụng mã khuyến mãi</strong>
            </p>
          </div>
          <div className="flex justify-end">
            <button className="border mr-5 w-[200px] border-slate-200 bg-blue-400 p-5 text-white ">
              Đặt hàng
            </button>
            <button className=" border w-[200px] border-slate-200 bg-blue-400 p-5 text-white">
              Tiếp tục mua hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
