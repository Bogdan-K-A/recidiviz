import React from "react";
import { Container } from "../common/Container/Container";
import { Section } from "../common/Section/Section";
import { Title } from "../ui-component/Title/Title";
import {
  StyledGrid,
  StyledImg,
  StyledItem,
  StyledSmollTitle,
  TitleWrapper,
  FlexBox,
} from "./Information.styled";
import { INFO_ITEM } from "./mock";

export const Information = () => {
  return (
    <Section
      id="blog"
      background={(p) => p.theme.colors.light}
      padding="88px 0 141px 0"
    >
      <StyledImg />
      <Container>
        <FlexBox>
          <TitleWrapper>
            <Title>
              Get the right
              <br /> information to the right person at the right time.
            </Title>
          </TitleWrapper>

          <StyledGrid>
            {INFO_ITEM.map(({ title, text }) => (
              <StyledItem key={title}>
                <StyledSmollTitle>{title}</StyledSmollTitle>
                <p>{text}</p>
              </StyledItem>
            ))}
          </StyledGrid>
        </FlexBox>
      </Container>
    </Section>
  );
};
