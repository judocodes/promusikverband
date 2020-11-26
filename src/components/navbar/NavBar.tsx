import React from "react";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
  className: "w-screen bg-white z-0 relative shadow",
})``;

const Nav = styled.nav.attrs({
  className:
    "max-w-screen-xl mx-auto flex justify-between items-center px-8 py-2",
})``;

const Logo = styled.a.attrs({
  className: "inline-block h-20 w-20 cursor-pointer",
})``;

const Image = styled.img.attrs({
  className: "w-full h-full object-contain",
})``;

const ItemsList = styled.ul.attrs({
  className: "font-open font-medium flex space-x-10 text-lg",
})``;

const Li = styled.li.attrs({
  className:
    "font-normal border-b-4 border-transparent hover:text-primary hover:border-primary py-2 tracking-tight cursor-pointer",
})``;

interface Props {}

const NavBar = (_: Props) => {
  return (
    <Wrapper>
      <Nav>
        <Logo>
          <Image src="PromusikLogo.png" alt="Promusikverband Logo" />
        </Logo>
        <ItemsList>
          <Li>Der Verband</Li>
          <Li>Mitglieder</Li>
          <Li>Mithelfen</Li>
        </ItemsList>
      </Nav>
    </Wrapper>
  );
};

export default NavBar;
