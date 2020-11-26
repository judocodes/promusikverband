import React from "react";

interface Props {
  children: React.ReactNode;
  additionalStyles?: string;
}

const SectionShell = ({ children, additionalStyles }: Props) => {
  return (
    <div className={`w-full px-12 relative py-32 ${additionalStyles || ""}`}>
      {children}
    </div>
  );
};

export default SectionShell;
