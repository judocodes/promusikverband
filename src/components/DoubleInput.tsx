import React from "react";

import Input from "./Input";

interface Props {
  placeholderFirst: string;
  placeholderSecond: string;
}

const DoubleInput = ({ placeholderFirst, placeholderSecond }: Props) => {
  return (
    <div className="w-full flex overflow-hidden shadow-inner rounded">
      <input
        type="text"
        className="border-r px-2 py-2 w-1/2 outline-none"
        placeholder={placeholderFirst}
      />

      <input
        type="text"
        className="border-l border-gray-100 px-2 py-2 w-1/2 outline-none"
        placeholder={placeholderSecond}
      />
    </div>
  );
};

export default DoubleInput;
