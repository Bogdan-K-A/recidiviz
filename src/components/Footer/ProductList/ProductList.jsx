import React from 'react'
import {
  StyledItem,
  StyledList,
  StyledProduct,
  StyledTitle,
} from './ProductList.styled'

export const ProductList = () => {
  const productItem = [
    { link: '#', text: 'Our Approach' },
    { link: '#', text: 'Corrections Leaders' },
    { link: '#', text: 'Corrections Staff' },
    { link: '#', text: 'Policy Impact' },
    { link: '#', text: 'Public Data' },
    { link: '#', text: 'Security' },
    { link: '#', text: 'Testimonials' },
  ]

  return (
    <StyledProduct>
      <StyledTitle>PRODUCT</StyledTitle>

      <StyledList>
        {productItem.map(({ link, text }) => (
          <StyledItem>
            <a href={link}>{text}</a>
          </StyledItem>
        ))}
      </StyledList>
    </StyledProduct>
  )
}
