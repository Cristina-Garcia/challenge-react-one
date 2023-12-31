import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Logo } from '../../assets/UI'
import { StyledButton } from '../../assets/UI'
import { lineaColor } from '../../assets/UI/variables'
import './index.css'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${lineaColor};
  padding: 1rem;
  box-sizing: border-box;
`
const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo>ASTROFLIX</Logo>
      </Link>
      <StyledButton>
        <Link to="/create-video">Nuevo video</Link>
      </StyledButton>
    </StyledHeader>
  )
}

export default Header
