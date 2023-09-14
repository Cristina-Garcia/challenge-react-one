import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 170px;
  height: auto;
  border: 2px solid ${(props) => props.color};

  @media (max-width: 768px) {
    width: 220px;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`
function Imagen({ anime, getId, borderColor }) {
  return (
    <Image
      src={anime.imageurl}
      alt={anime.title}
      onClick={() => getId(anime.id)}
      color={borderColor}
    />
  )
}

export default Imagen
