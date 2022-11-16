import React, { useEffect, useRef, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateItem } from "../redux/shopping-cart/cartItemsSlice";
const CartItem = (props) => {
  const itemRef = useRef(null);
  const dispatch = useDispatch();
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);
  const updateQuantity = (opt) => {
    if (opt === "+") {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
    }
    if (opt === "-") {
      dispatch(
        updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 })
      );
    }
  };
  const removeCartItem = () => {
    dispatch(removeItem(item));
  };
  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);
  return (
    <div className="max-w-[1000px] mx-auto " ref={itemRef}>
      <table>
        <thead>
          <tr>
            <th className="w-[500px]">Sản phẩm</th>
            <th className="w-[100px]">Đơn giá</th>
            <th className="w-[300px]">Số Lượng</th>
            <th className="w-[100px]">Hủy bỏ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center">
                <img
                  className="h-[150px] w-[100px] object-cover"
                  src={item.product.image01}
                  alt=""
                />
                <div>
                  <Link to={`/catalog/${item.slug}`}>
                    {`${item.product.title} - ${item.color} - ${item.size}`}
                  </Link>
                </div>
              </div>
            </td>
            <td className="text-center">{item.price}</td>
            <td className="text-center">
              <div className="flex items-center justify-center mt-2">
                <div
                  className="flex items-center justify-center w-[30px] h-[30px] border-2 border-[#8d8d8d] cursor-pointer "
                  onClick={() => updateQuantity("-")}
                >
                  <FaMinus />
                </div>
                <div className="flex items-center justify-center w-[90px] h-[30px] border-2 border-t-[#8d8d8d]  border-b-[#8d8d8d]">
                  {quantity}
                </div>
                <div
                  className="flex items-center justify-center w-[30px] h-[30px] border-2 border-[#8d8d8d] cursor-pointer "
                  onClick={() => updateQuantity("+")}
                >
                  <FaPlus />
                </div>
              </div>
            </td>
            <td className="text-center">
              <FaTrash
                className="mx-auto cursor-pointer"
                onClick={() => removeCartItem()}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center ">
        <h1 className="flex justify-end flex-grow">Mã khuyến mại</h1>
        <select
          className="ml-4 text-blue-700 outline-none"
          name="voucher"
          id=""
        >
          Chọn Voucher
          <option value="free">Miễn Phí Vận Chuyển</option>
          <option value="20%">Giảm 20%</option>
          <option value="10%">Giảm 10%</option>
        </select>
      </div>
    </div>
  );
};

export default CartItem;
