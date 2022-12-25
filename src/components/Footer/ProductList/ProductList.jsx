import React from 'react'
import {
  StyledItem,
  StyledList,
  StyledProduct,
  StyledTitle,
} from './ProductList.styled'

export const ProductList = () => {
  return (
    <StyledProduct>
      <StyledTitle>PRODUCT</StyledTitle>

      <StyledList>
        <StyledItem>
          <a href="">Our Approach</a>
        </StyledItem>
        <StyledItem>
          <a href="">Corrections Leaders</a>
        </StyledItem>
        <StyledItem>
          <a href="">Corrections Staff</a>
        </StyledItem>
        <StyledItem>
          <a href="">Policy Impact</a>
        </StyledItem>
        <StyledItem>
          <a href="">Public Data</a>
        </StyledItem>
        <StyledItem>
          <a href="">Security</a>
        </StyledItem>
        <StyledItem>
          <a href="">Testimonials</a>
        </StyledItem>
      </StyledList>
    </StyledProduct>
  )
}
