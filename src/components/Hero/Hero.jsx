import React from 'react'
import { Container } from '../common/Container/Container'
import { Button } from '../ui-component/Button/Button'
import { Flex } from '../ui-component/Flex/Flex'
import {
  StyledHero,
  StyledContentWrapper,
  StyledTitle,
  StyledText,
  WrapperList,
  StyledList,
  StyledItem,
} from './Hero.styled'

export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <StyledContentWrapper>
          <StyledTitle>
            Every person who safely transitions back to the community is a step
            toward a better society.
          </StyledTitle>
          <StyledText>
            Criminal justice leaders use Recidiviz to get a real-time picture of
            their system, diagnose issues, and drive meaningful changes.
          </StyledText>
          <Button bgColorNone padding="17px 33px">
            See our work in action
          </Button>
        </StyledContentWrapper>
        <WrapperList>
          <p>Trusted in:</p>
          <StyledList>
            <StyledItem>Idaho</StyledItem>
            <StyledItem>Maine</StyledItem>
            <StyledItem>Missouri</StyledItem>
            <StyledItem>North Dakota</StyledItem>
            <StyledItem>Pennsylvania</StyledItem>
            <StyledItem>Tennessee</StyledItem>
          </StyledList>
        </WrapperList>
      </Container>
    </StyledHero>
  )
}
