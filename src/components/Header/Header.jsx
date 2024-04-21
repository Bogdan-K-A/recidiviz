import React, { useState } from "react";
import headerLogo from "../../assets/svg/headerLogo.svg";
import { Container } from "../common/Container/Container";
import {
  StyledHeader,
  StyledButton,
  HiddenStiled,
  StyledLogo,
  StyledIcon,
} from "./Header.styled";
import { NavBar } from "./NavBar/NavBar";
import { Flex } from "../ui-component/Flex/Flex";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useEffect } from "react";

export const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <StyledHeader scroll={window.scrollY}>
      <Container>
        <Flex justify="space-between" align="center" padding="26px 0">
          <StyledLogo
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <img src={headerLogo} alt="" />
          </StyledLogo>
          <Flex align="center">
            <HiddenStiled>
              <NavBar />
            </HiddenStiled>

            <MobileMenu isOpen={isOpen} toggle={toggle} />

            <StyledIcon onClick={toggle}>
              <RxHamburgerMenu size={24} />
            </StyledIcon>
          </Flex>
        </Flex>
      </Container>
    </StyledHeader>
  );
};
