import React from 'react'
import { Container } from '../common/Container/Container'
import { Flex } from '../ui-component/Flex/Flex'
import { CompanyList } from './CompanyList/CompanyList'
import { ProductList } from './ProductList/ProductList'
import { StatesList } from './StatesList/StatesList'
import { NetworkList } from './NetworkList/NetworkList'

import { StyledFooter, StyledMenu, DescriptionText } from './Footer.styled'

import logo from '../../assets//svg/logo.svg'

export const Footer = () => {
  return (
    <footer>
      <StyledMenu>
        <Container>
          <Flex>
            <CompanyList />
            <ProductList />
            <StatesList />
            <NetworkList />
          </Flex>
        </Container>
      </StyledMenu>
      <StyledFooter>
        <Container>
          <Flex justify="space-between">
            <img src={logo} alt="recidiviz" />
            <DescriptionText>
              Terms of Service Privacy Responsible Disclosure Copyright © 2017
              -2022, Recidiviz. All Rights Reserved.
            </DescriptionText>
          </Flex>
        </Container>
      </StyledFooter>
    </footer>
  )
}
