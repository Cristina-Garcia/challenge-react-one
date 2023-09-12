import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../assets/UI/index.js'
import { background, lineaColor, secondary } from '../../assets/UI/variables.js'

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${lineaColor};
  /* background: ${background}; */
  box-sizing: border-box;
  padding: 1rem;
  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`
export const Credits = styled.p`
  color: ${secondary};
  font-weight: bold;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Logo>ASTROFLIX</Logo>
      <Credits>Creado por Cristina Garcia (2023)</Credits>
    </StyledFooter>
  )
}

export default Footer
