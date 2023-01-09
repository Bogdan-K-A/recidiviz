import React from 'react'
import { Container } from '../../common/Container/Container'
import { Flex } from '../../ui-component/Flex/Flex'

import partner0 from '../../../assets/svg/partnersImg/IMAGE.svg'
import partner1 from '../../../assets/svg/partnersImg/IMAGE-1.svg'
import partner2 from '../../../assets/svg/partnersImg/IMAGE-2.svg'
import partner3 from '../../../assets/svg/partnersImg/IMAGE-3.svg'
import partner4 from '../../../assets/svg/partnersImg/IMAGE-4.svg'
import partner5 from '../../../assets/svg/partnersImg/IMAGE-5.svg'
import { StyledItem, StyledList, StyledLink } from './PartnerNameList.styled'

export const PartnerNameList = () => {
  const partnerNameImgItem = [
    { img: partner0, alt: 'reform' },
    { img: partner1, alt: 'schmidt futures' },
    { img: partner2, alt: 'right on crime' },
    { img: partner3, alt: 'moz://a' },
    { img: partner4, alt: 'aclu' },
    { img: partner5, alt: 'y' },
  ]
  return (
    <>
      <Container>
        <Flex align="center">
          <StyledLink href="">Partners</StyledLink>
          <StyledList>
            {partnerNameImgItem.map(({ img, alt }) => (
              <StyledItem key={img}>
                <img src={img} alt={alt} />
              </StyledItem>
            ))}
          </StyledList>

          <StyledLink href="">See All</StyledLink>
        </Flex>
      </Container>
    </>
  )
}
