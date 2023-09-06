import styled from 'styled-components'
import { secondary, backgroundPrimary } from './variables'

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
`
export const ButtonMain = styled(StyledButton)`
  border-radius: 4px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};

  &:hover {
    background: ${backgroundPrimary};
    color: #fff;
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
  color: ${(props) => (props.color ? props.color : '#fff')};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
export const TextHero = styled.span`
  font-weight: 300;
  font-size: 18px;
  color: #fff;

  /* From https://css.glass */
  background: rgba(29, 38, 125, 0.35);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
