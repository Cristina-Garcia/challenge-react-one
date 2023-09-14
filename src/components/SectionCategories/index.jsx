import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import styled from 'styled-components'
import Imagen from '../Imagen'
import { ButtonMain } from '../../assets/UI'
import { textLight } from '../../assets/UI/variables'

const StyledSection = styled.section`
  width: 100%;
  padding-inline: 2rem;
  margin-block: 1rem;
  box-sizing: border-box;
`
const SpanDescription = styled.span`
  font-size: 18px;
  font-weight: 300;
  color: ${textLight};
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
  const filterAnimes = animes.filter(
    (anime) => categorie.nombre === anime.genre
  )
  const shouldRender = filterAnimes.length >= 5
  return (
    shouldRender && (
      <StyledSection>
        <CategoryHeader>
          <Link to={`/animes/${categorie.nombre}`}>
            <ButtonMain>{categorie.nombre}</ButtonMain>
          </Link>
          <SpanDescription>{categorie.description}</SpanDescription>
        </CategoryHeader>
        <Slider {...settings}>
          {filterAnimes.map((anime) => {
            return (
              <Imagen
                anime={anime}
                key={anime.id}
                getId={getId}
                borderColor={categorie.color}
              />
            )
          })}
        </Slider>
      </StyledSection>
    )
  )
}

export default SectionCategory
