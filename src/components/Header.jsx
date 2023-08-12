import styled from 'styled-components'
import { Logo } from '../assets/UI'
import { StyledButton } from '../assets/UI'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  padding: 1rem;
`
const Header = () => {
  return (
    <StyledHeader>
      <Logo>ASTROFLIX</Logo>
      <StyledButton>Nuevo video</StyledButton>
    </StyledHeader>
  )
}

export default Header
