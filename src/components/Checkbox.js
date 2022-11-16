import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa";
const Checkbox = (props) => {
  const inputRef = useRef(null);
  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };
  return (
    <label className="flex items-center justify-start cursor-pointer checkbox">
      <input
        ref={inputRef}
        onChange={onChange}
        checked={props.checked}
        type="checkbox"
        className="w-0 h-0 abosolute opacity-0 cursor-pointer"
      />
      <span className="w-[18px] h-[18px] mr-[10px] border border-slate-400  checkmark">
        <FaCheck className="icon-check w-[13px] h-[13px] m-auto "></FaCheck>
      </span>
      {props.label}
    </label>
  );
};

export default Checkbox;
