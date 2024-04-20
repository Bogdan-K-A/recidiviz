import React from "react";
import { Container } from "../../common/Container/Container";
import { Flex } from "../../ui-component/Flex/Flex";
import { StyledLink } from "./PartnerNameList.styled";
import { Swiper, SwiperSlide } from "swiper/react";

import { PARAMS, PARTNES_NAME } from "./mocks";

export const PartnerNameList = () => {
  return (
    <>
      <Container>
        <Flex align="center">
          <StyledLink href="">Partners</StyledLink>

          <Swiper {...PARAMS}>
            {PARTNES_NAME.map(({ img, alt }) => (
              <SwiperSlide key={img}>
                <img src={img} alt={alt} />
              </SwiperSlide>
            ))}
          </Swiper>

          <StyledLink href="">See All</StyledLink>
        </Flex>
      </Container>
    </>
  );
};
