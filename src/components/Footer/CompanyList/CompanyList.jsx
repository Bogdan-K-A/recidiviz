import React from 'react'
import {
  StyledCompany,
  StyledItem,
  StyledList,
  StyledTitle,
} from './CompanyList.styled'

export const CompanyList = () => {
  return (
    <StyledCompany>
      <StyledTitle>COMPANY</StyledTitle>

      <StyledList>
        <StyledItem>
          <a href="">About</a>
        </StyledItem>
        <StyledItem>
          <a href="">Team</a>
        </StyledItem>
        <StyledItem>
          <a href="">Supporters</a>
        </StyledItem>
        <StyledItem>
          <a href="">Diversity</a>
        </StyledItem>
        <StyledItem>
          <a href="">Blog</a>
        </StyledItem>
        <StyledItem>
          <a href="">Press</a>
        </StyledItem>
        <StyledItem>
          <a href="">Careers</a>
        </StyledItem>
        <StyledItem>
          <a href="">Contact</a>
        </StyledItem>
      </StyledList>
    </StyledCompany>
  )
}
