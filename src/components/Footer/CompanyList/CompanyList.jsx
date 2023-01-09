import React from 'react'
import {
  StyledCompany,
  StyledItem,
  StyledList,
  StyledTitle,
} from './CompanyList.styled'

export const CompanyList = () => {
  const companyItem = [
    { link: '#', text: 'About' },
    { link: '#', text: 'Team' },
    { link: '#', text: 'Supporters' },
    { link: '#', text: 'Diversity' },
    { link: '#', text: 'Blog' },
    { link: '#', text: 'Press' },
    { link: '#', text: 'Careers' },
    { link: '#', text: 'Contact' },
  ]
  return (
    <StyledCompany>
      <StyledTitle>COMPANY</StyledTitle>

      <StyledList>
        {companyItem.map(({ link, text }) => (
          <StyledItem>
            <a href={link}>{text}</a>
          </StyledItem>
        ))}
      </StyledList>
    </StyledCompany>
  )
}
