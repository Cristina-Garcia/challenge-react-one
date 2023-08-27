import React from 'react'
import styled from 'styled-components'
import Imagen from './Imagen'
import { ButtonMain } from '../assets/UI'
const StyledSection = styled.section`
  width: 100%;
  padding-inline: 2rem;
  margin-block: 1rem;
`
const SpanDescription = styled.span`
  font-size: 18px;
  font-weight: 300;
  color: #fff;
`
const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 0.5rem;
  margin-block: 0.5rem;
`
const CategoryContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`
function SectionCategory({ categorie, animes, getId }) {
  return (
    <StyledSection>
      <CategoryHeader>
        <ButtonMain>{categorie.nombre}</ButtonMain>
        <SpanDescription>
          Animes increíbles del género {categorie.nombre}
        </SpanDescription>
      </CategoryHeader>
      <CategoryContainer>
        {animes.map((anime) => {
          if (categorie.nombre === anime.genre) {
            return (
              <Imagen
                anime={anime}
                key={anime.id}
                getId={getId}
                borderColor={categorie.color}
              />
            )
          }
        })}
      </CategoryContainer>
    </StyledSection>
  )
}

export default SectionCategory
