import React from "react";

interface Props {
  children: React.ReactNode;
}

const ButtonPrimary = ({ children }: Props) => {
  return (
    <button className="bg-gray-100 rounded px-10 py-2 mt-6 tracking-wide shadow-md text-lg">
      {children}
    </button>
  );
};

export default ButtonPrimary;
