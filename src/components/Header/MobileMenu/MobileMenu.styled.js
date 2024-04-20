import styled from "styled-components";

export const StyledMobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  width: 100%;
  height: 100vh;
  background: ${(p) => p.theme.colors.text};

  transition: all 0.4s ease;
  overflow-y: auto;
  z-index: 9999;
`;
