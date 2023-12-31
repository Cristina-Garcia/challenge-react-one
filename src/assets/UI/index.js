import styled from 'styled-components'
import { secondary, backgroundPrimary } from './variables'
import { textLight } from './variables'

export const Logo = styled.span`
  color: ${secondary};
  font-weight: bold;
  font-size: 30px;
`
export const StyledButton = styled.button`
  font-size: 21px;
  font-weight: 600px;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${backgroundPrimary};
    color: ${textLight};
  }
`
export const ButtonMain = styled(StyledButton)`
  border-radius: 4px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};

  &:hover {
    background: ${backgroundPrimary};
  }
`
export const ImageContainer = styled.figure`
  width: 250px;
`
export const ImagenVideo = styled.img`
  width: inherit;
  border: 2px solid ${(props) => props.color};
`
export const TitleHero = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
  font-family: 'Rubik Dirt', cursive;
  color: ${(props) => (props.color ? props.color : textLight)};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
export const TextHero = styled.span`
  font-weight: 300;
  font-size: 18px;
  color: ${textLight};

  /* From https://css.glass */
  background: rgba(29, 38, 125, 0.35);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
