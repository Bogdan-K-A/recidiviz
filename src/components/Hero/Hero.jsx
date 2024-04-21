import React from "react";
import { Container } from "../common/Container/Container";
import { Button } from "../ui-component/Button/Button";
import { titleAnimation } from "./animatin";
import {
  StyledHero,
  StyledContentWrapper,
  StyledTitle,
  StyledText,
  WrapperList,
  StyledList,
  StyledItem,
} from "./Hero.styled";

export const Hero = () => {
  const trustedItem = [
    "Idaho",
    "Maine",
    "Missouri",
    "North Dakota",
    "Pennsylvania",
    "Tennessee",
  ];

  const textTitle =
    "Every person who safely transitions back to the community is a step toward a better society.";
  const title = titleAnimation(textTitle);

  return (
    <StyledHero id="home">
      <Container>
        <StyledContentWrapper>
          <div>
            <StyledTitle>{title}</StyledTitle>
            <StyledText>
              Criminal justice leaders use Recidiviz to get a real-time picture
              of their system, diagnose issues, and drive meaningful changes.
            </StyledText>
            <Button bgColorNone padding="17px 33px">
              See our work in action
            </Button>
          </div>
          <WrapperList>
            <p>Trusted in:</p>
            <StyledList>
              {trustedItem.map((item) => (
                <StyledItem key={item}>{item}</StyledItem>
              ))}
            </StyledList>
          </WrapperList>
        </StyledContentWrapper>
      </Container>
    </StyledHero>
  );
};
