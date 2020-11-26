import React from "react";
import styled from "styled-components";

const GlobalLayout = styled.div.attrs({
  className: "text-gray-700 font-open text-lg",
})``;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <GlobalLayout>{children}</GlobalLayout>;
};

export default Layout;
