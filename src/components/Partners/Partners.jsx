import React from 'react'
import { Section } from '../common/Section/Section'
import { PartnerLogoList } from './PartnerLogoList/PartnerLogoList'
import { PartnerNameList } from './PartnerNameList/PartnerNameList'

import {
  StyledImg,
  ContentWrapepr,
  CenterWrapper,
  StyledText,
  StyledTitle,
} from './Partners.styled'

export const Partners = () => {
  return (
    <Section padding="24px 0 17px 0">
      <CenterWrapper>
        <PartnerLogoList />
        <StyledImg />
        <ContentWrapepr>
          <StyledTitle>See the forest and the trees.</StyledTitle>
          <StyledText>
            The criminal justice system can't support safe, whole communities
            without feedback on what’s working and what’s not. We stitch
            together data from fragmented systems to provide decision-makers
            with the information they need to improve outcomes. With this data,
            we surface opportunities to safely chart a path to a smaller system,
            and to track the impact of policy and practice changes over time.
          </StyledText>
        </ContentWrapepr>
      </CenterWrapper>
      <PartnerNameList />
    </Section>
  )
}
