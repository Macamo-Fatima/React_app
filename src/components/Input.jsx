import React from "react";

const Input = (props) => {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      //   type={props.type}
      //   value={props.value}
      //   onChange={props.onChange}
      //   placeholder={props.placeholder}
      {...props}
    />
  );
};

export default Input;
