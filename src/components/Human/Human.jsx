import React from 'react'
import { Section } from '../common/Section/Section'
import { Button } from '../ui-component/Button/Button'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import {
  ContentWrapper,
  ImgWrapper,
  StyledText,
  StyledTitle,
} from './Human.styled'
import { Container } from '../common/Container/Container'
import { Flex } from '..//ui-component/Flex/Flex'

export const Human = () => {
  return (
    <Section padding="80px 0" background={(p) => p.theme.colors.light}>
      <Container>
        <Flex justify="space-between">
          <ContentWrapper>
            <StyledTitle>A human–centered definition of success.</StyledTitle>
            <StyledText>
              Our approach is shaped by the perspective and experience of people
              impacted by the justice system. Together, we are focused on
              restoring equity and supporting success in the community.
            </StyledText>
            <Button
              colorText={(p) => p.theme.colors.btnText}
              bgColorNone
              padding="17px 33px"
            >
              Our approach
            </Button>
          </ContentWrapper>
          <ImgWrapper>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </ImgWrapper>
        </Flex>
      </Container>
    </Section>
  )
}
