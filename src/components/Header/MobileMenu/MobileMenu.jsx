import { NavBar } from "../NavBar/NavBar";
import { StyledMobileMenu } from "./MobileMenu.styled";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <StyledMobileMenu isOpen={isOpen}>
      <NavBar toggle={toggle} />
    </StyledMobileMenu>
  );
};

export default MobileMenu;
