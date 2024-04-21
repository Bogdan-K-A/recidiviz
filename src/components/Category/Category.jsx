import React from "react";
import { Section } from "../common/Section/Section";
import { Title } from "../ui-component/Title/Title";
import {
  CatigoryItem,
  CatigoryList,
  StyledCircle,
  StyledText,
  TitleWrapper,
} from "./Category.styled";
import { Container } from "../common/Container/Container";

export const Category = () => {
  return (
    <Section id="about" padding="0 0 117px 0">
      <Container>
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
      </Container>
    </Section>
  );
};
