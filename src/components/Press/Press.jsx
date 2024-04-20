import React from "react";
import { Section } from "../common/Section/Section";
import { Container } from "../common/Container/Container";
import { Button } from "../ui-component/Button/Button";
import { Title } from "../ui-component/Title/Title";

import { Flex } from "../ui-component/Flex/Flex";
import {
  StyledGrid,
  StyledItem,
  StyledDescription,
  StyledText,
} from "./Press.styled";
import { PRESS_ITEM } from "./mock";

export const Press = () => {
  return (
    <Section id="news" padding="87px 0 132px 0">
      <Container>
        <Flex justify="space-between" align="center" margin="0 0 24px 0">
          <Title>Recidiviz in the Press</Title>
          <Button
            bgColorNone
            padding="17px 33px"
            colorText={(p) => p.theme.colors.btnText}
          >
            See All
          </Button>
        </Flex>

        <StyledGrid>
          {PRESS_ITEM.map(({ img, name, date, title }) => (
            <StyledItem key={name}>
              <Flex align="center">
                <img src={img} alt={name} />
                <StyledText>{name}</StyledText>
                <p>{date}</p>
              </Flex>
              <StyledDescription>{title}</StyledDescription>
            </StyledItem>
          ))}
        </StyledGrid>
      </Container>
    </Section>
  );
};
