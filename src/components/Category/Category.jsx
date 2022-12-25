import React from 'react'
import { Section } from '../common/Section/Section'
import { Title } from '../ui-component/Title/Title'
import {
  CatigoryItem,
  CatigoryList,
  ContentWrapper,
  StyledCircle,
  StyledText,
  TitleWrapper,
} from './Category.styled'

export const Category = () => {
  return (
    <Section padding="120px 0 117px 0">
      <ContentWrapper>
        <TitleWrapper>
          <Title>
            We are a non-profit that partners with state criminal justice
            agencies to advance their use of data and reduce incarceration.
          </Title>
        </TitleWrapper>
        <CatigoryList>
          <CatigoryItem>
            <StyledCircle>1</StyledCircle>
            <StyledText>intake an agency’s disjointed data</StyledText>
          </CatigoryItem>
          <CatigoryItem>
            <StyledCircle>2</StyledCircle>

            <StyledText>
              deploy tools for all levels of decision making
            </StyledText>
          </CatigoryItem>
          <CatigoryItem>
            <StyledCircle>3</StyledCircle>
            <StyledText>
              improve outcomes for justice-impacted individuals
            </StyledText>
          </CatigoryItem>
        </CatigoryList>
      </ContentWrapper>
    </Section>
  )
}
