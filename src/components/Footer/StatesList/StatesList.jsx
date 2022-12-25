import React from 'react'
import { StyledItem, StyledList, StyledTitle } from './StatesList.styled'

export const StatesList = () => {
  return (
    <div>
      <StyledTitle>STATES</StyledTitle>

      <StyledList>
        <StyledItem>
          <a href="">Overview</a>
        </StyledItem>
        <StyledItem>
          <a href="">Idaho</a>
        </StyledItem>
        <StyledItem>
          <a href="">Maine</a>
        </StyledItem>
        <StyledItem>
          <a href="">Michigan</a>
        </StyledItem>
        <StyledItem>
          <a href="">Missouri</a>
        </StyledItem>
        <StyledItem>
          <a href="">North Dakota</a>
        </StyledItem>
        <StyledItem>
          <a href="">Pennsylvania</a>
        </StyledItem>
        <StyledItem>
          <a href="">Tennessee</a>
        </StyledItem>
      </StyledList>
    </div>
  )
}
