import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 150px;
  height: auto;
  max-width: 100%;
  border: 2px solid ${(props) => props.color};
`
function Imagen({ anime, getId, borderColor }) {
  // console.log('animeID', anime)

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
