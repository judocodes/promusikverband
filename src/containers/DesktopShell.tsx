import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Shell = styled.main.attrs({
  className:
    "max-w-screen-xl bg-gray-100 min-h-screen h-full mx-auto pt-4 shadow-inner",
})``;

const DesktopShell = ({ children }: Props) => {
  return <Shell>{children}</Shell>;
};

export default DesktopShell;
