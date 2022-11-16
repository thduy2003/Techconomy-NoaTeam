// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeAR } from "../redux/ar-modal/arModalSlice";

// const ProductViewAr = () => {
//   const openAR = useSelector((state) => state.arModal.valueAR);
//   useEffect(() => {
//     console.log(openAR);
//   }, [openAR]);
//   const dispatch = useDispatch();
//   return (
//     <div
//       className={`fixed w-full h-full top-0 left-0 z-101 overflow-hidden bg-[rgba(0,0,0,0.4)]  ${
//         openAR === "open" ? "opacity-1 visible" : "opacity-0 invisible"
//       }`}
//     >
//       <div className="m-auto p-3 bg-white w-[50%] relative">
//         <div>Hehee</div>
//         <div className="absolute top-0 right-0">
//           <button
//             className="border border-slate-200 bg-blue-600 p-2"
//             onClick={() => dispatch(removeAR())}
//           >
//             Đóng
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductViewAr;
