import React from 'react'
import { Container } from '../common/Container/Container'
import { Button } from '../ui-component/Button/Button'
import { titleAnimation } from './animatin'
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
  const trustedItem = [
    'Idaho',
    'Maine',
    'Missouri',
    'North Dakota',
    'Pennsylvania',
    'Tennessee',
  ]

  const title =
    'Every person who safely transitions back to the community is a step toward a better society.'
  return (
    <StyledHero>
      <Container>
        <StyledContentWrapper>
          <StyledTitle>{titleAnimation(title)}</StyledTitle>
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
            {trustedItem.map((item) => (
              <StyledItem key={item}>{item}</StyledItem>
            ))}
          </StyledList>
        </WrapperList>
      </Container>
    </StyledHero>
  )
}
