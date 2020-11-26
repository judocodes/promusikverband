import React from "react";

interface Props {
  placeholder: string;
}

const Input = ({ placeholder }: Props) => {
  return (
    <input
      type="text"
      className="inline-block w-full px-2 py-2 rounded shadow-inner outline-none"
      placeholder={placeholder}
    />
  );
};

export default Input;
