import React from "react";
import { Flex } from "../../ui-component/Flex/Flex";
import { Container } from "../../common/Container/Container";
import { StyledItem } from "./PartnerLogoList.styled";
import { PARAMS, PARTNNER_ITEMS } from "./mocks";
import { Swiper } from "swiper/react";

export const PartnerLogoList = () => {
  return (
    <>
      <Container>
        <Swiper {...PARAMS}>
          {PARTNNER_ITEMS.map(({ img, text }) => (
            <StyledItem key={text}>
              <Flex align="center">
                <img src={img} alt={text} />
                <p>{text}</p>
              </Flex>
            </StyledItem>
          ))}
        </Swiper>
      </Container>
    </>
  );
};
