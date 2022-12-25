import React from 'react'
import { StyledList, StyledItem, StyledNav } from './NavBar.styled'

export const NavBar = () => {
  return (
    <StyledNav>
      <StyledList>
        <StyledItem>
          <a href="">States</a>
        </StyledItem>
        <StyledItem>
          <a href="">Tools</a>
        </StyledItem>
        <StyledItem>
          <a href="">People</a>
        </StyledItem>
        <StyledItem>
          <a href="">Learn More</a>
        </StyledItem>
        <StyledItem>
          <a href="">Donate</a>
        </StyledItem>
      </StyledList>
    </StyledNav>
  )
}
