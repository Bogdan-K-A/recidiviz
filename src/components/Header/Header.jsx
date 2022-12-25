import React from 'react'
import headerLogo from '../../assets/svg/headerLogo.svg'
import { Container } from '../common/Container/Container'
import { StyledHeader, StyledButton } from './Header.styled'
import { NavBar } from './NavBar/NavBar'
import { Flex } from '../ui-component/Flex/Flex'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flex justify="space-between" align="center">
          <a href="#">
            <img src={headerLogo} alt="" />
          </a>
          <Flex align="center">
            <NavBar />
            <StyledButton href="">Log In</StyledButton>
          </Flex>
        </Flex>
      </Container>
    </StyledHeader>
  )
}
