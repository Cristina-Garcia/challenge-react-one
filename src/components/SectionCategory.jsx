import React from 'react'
import styled from 'styled-components'
import Imagen from './Imagen'
import { ButtonMain } from '../assets/UI'
import Slider from 'react-slick'

const StyledSection = styled.section`
  width: 100%;
  padding-inline: 2rem;
  margin-block: 1rem;
  box-sizing: border-box;
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
  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`

function SectionCategory({ categorie, animes, getId }) {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <StyledSection>
      <CategoryHeader>
        <ButtonMain>{categorie.nombre}</ButtonMain>
        <SpanDescription>
          Animes increíbles del género {categorie.nombre}
        </SpanDescription>
      </CategoryHeader>
      <Slider {...settings}>
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
      </Slider>
    </StyledSection>
  )
}

export default SectionCategory
