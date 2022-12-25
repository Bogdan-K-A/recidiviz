import React from 'react'
import {
  StyledItem,
  StyledList,
  StyledNetwork,
  StyledTitle,
} from './NetworkList.styled'

export const NetworkList = () => {
  return (
    <StyledNetwork>
      <StyledTitle>NETWORK</StyledTitle>

      <StyledList>
        <StyledItem>
          <a href="">Twitter</a>
        </StyledItem>
        <StyledItem>
          <a href="">Medium</a>
        </StyledItem>
        <StyledItem>
          <a href="">GitHub</a>
        </StyledItem>
        <StyledItem>
          <a href="">LinkedIn</a>
        </StyledItem>
      </StyledList>
    </StyledNetwork>
  )
}
