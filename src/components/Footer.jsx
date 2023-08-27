import React from 'react'
import styled from 'styled-components'
import { Logo } from '../assets/UI/index.js'
import { background, lineaColor } from '../assets/UI/variables.js'

export const StyledFooter = styled.footer`
  border-top: 1px solid ${lineaColor};
  background: ${background};
  padding: 1rem;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Logo>ASTROFLIX</Logo>
    </StyledFooter>
  )
}

export default Footer
