import React from 'react'
import { Section } from '../common/Section/Section'
import { Container } from '../common/Container/Container'
import { Button } from '../ui-component/Button/Button'
import { Title } from '../ui-component/Title/Title'

import partnerLogo0 from '../../assets/images/partnersLogo/IMAGE.png'
import partnerLogo1 from '../../assets/images/partnersLogo/IMAGE-1.png'
import partnerLogo6 from '../../assets/images/partnersLogo/IMAGE-6.png'
import partnerLogo7 from '../../assets/images/partnersLogo/IMAGE-7.png'
import partnerLogo8 from '../../assets/images/partnersLogo/IMAGE-8.png'
import partnerLogo9 from '../../assets/images/partnersLogo/IMAGE-9.png'
import { Flex } from '../ui-component/Flex/Flex'
import {
  StyledGrid,
  StyledItem,
  StyledDescription,
  StyledText,
} from './Press.styled'

export const Press = () => {
  return (
    <Section padding="87px 0 132px 0">
      <Container>
        <Flex justify="space-between">
          <Title>Recidiviz in the Press</Title>
          <Button
            margin="0 0 24px 0"
            bgColorNone
            padding="17px 33px"
            colorText={(p) => p.theme.colors.btnText}
          >
            See All
          </Button>
        </Flex>

        <StyledGrid>
          <StyledItem>
            <Flex align="center">
              <img src={partnerLogo0} alt="TED Talks" />
              <StyledText>TED TALKS</StyledText>
              <p>2.22.22</p>
            </Flex>
            <StyledDescription>
              Meet the 2022 class of TED Fellows
            </StyledDescription>
          </StyledItem>
          <StyledItem>
            <Flex align="center">
              <img src={partnerLogo6} alt="Correctional News" />
              <StyledText>CORRECTIONAL NEWS</StyledText>
              <p>2.2.22</p>
            </Flex>
            <StyledDescription>
              New Partnership Aims to Help Transform Prison Conditions
            </StyledDescription>
          </StyledItem>

          <StyledItem>
            <Flex align="center">
              <img src={partnerLogo7} alt="Department of Justice" />
              <StyledText>DEPARTMENT OF JUSTICE</StyledText>
              <p>1.26.22</p>
            </Flex>
            <StyledDescription>
              Justice Department Establishes Initiative to Strengthen States’
              Use of Criminal Justice Data
            </StyledDescription>
          </StyledItem>
          <StyledItem>
            <Flex align="center">
              <img src={partnerLogo1} alt="The New York Times" />
              <StyledText>THE NEW YORK TIMES</StyledText>
              <p>12.27.21</p>
            </Flex>
            <StyledDescription>The 2021 Good Tech Awards</StyledDescription>
          </StyledItem>
          <StyledItem>
            <Flex align="center">
              <img src={partnerLogo8} alt="Corrections" />
              <StyledText>CORRECTIONS1</StyledText>
              <p>11.18.21</p>
            </Flex>
            <StyledDescription>
              Maine DOC to better harness correctional data to improve outcomes
            </StyledDescription>
          </StyledItem>
          <StyledItem>
            <Flex align="center">
              <img src={partnerLogo9} alt="Right on Crime" />
              <StyledText>RIGHT ON CRIME</StyledText>
              <p>9.9.21</p>
            </Flex>
            <StyledDescription>
              Together, We Can Make Mississippi Safer and Reentry-Ready
            </StyledDescription>
          </StyledItem>
        </StyledGrid>
      </Container>
    </Section>
  )
}
