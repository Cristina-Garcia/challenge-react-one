import styled from 'styled-components'
import { secondary } from './variables'

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
`
export const ImageContainer = styled.figure`
  width: 400px;
`
export const ImagenVideo = styled.img`
  width: inherit;
  /* height: 200px; */
  border: 2px solid ${(props) => props.color};
`
export const TitleHero = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
  color: #fff;
`
export const TextHero = styled.span`
  font-weight: 300;
  font-size: 18px;
  color: #fff;
`
