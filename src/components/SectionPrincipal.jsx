import React from 'react'
import styled from 'styled-components'
import {
  ButtonMain,
  ImageContainer,
  ImagenVideo,
  TitleHero,
  TextHero,
} from '../assets/UI'

const video = 'https://www.youtube.com/embed/7oJeOedoHCQ?si=-fOWnclwcu5LmajG'

const SectionHero = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`
const ContainerHero = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-inline: 2rem;
  color: white;
  z-index: 1;
  @media (max-width: 768px) {
    height: 450px;
  }
`
const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 40%;
  @media (max-width: 768px) {
    height: 450px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

const IframeVideo = styled.iframe`
  width: 100%;
  height: 600px;
  src: ${(props) => (props.src ? `url(${props.src})` : `url(${video})`)};
`

function SectionPrincipal({ animes, animeId, categories }) {
  const selectAnime = animes.find((anime) => anime.id === animeId)
  const videoURL = selectAnime ? selectAnime.videourl : video
  const allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; '
  const categoriePrincipal = categories.find(
    (categorie) => categorie.nombre === selectAnime?.genre
  )

  const colorPrincipal = categoriePrincipal ? categoriePrincipal.color : 'black'

  return (
    <SectionHero>
      <IframeVideo
        width="100%"
        src={videoURL}
        title="YouTube video player"
        $frameborder="0"
        allow={allow}
        allowFullScreen
      ></IframeVideo>
      {animes.map((anime) => {
        if (anime.id === animeId) {
          return (
            <ContainerHero key={anime.id}>
              <ContainerInfo>
                <ButtonMain background={colorPrincipal}>
                  {anime.genre}
                </ButtonMain>
                <TitleHero>{anime.title}</TitleHero>
                <TextHero>{anime.sinopsis}</TextHero>
              </ContainerInfo>
              <ImageContainer>
                <ImagenVideo
                  src={anime.imageurl}
                  alt={anime.title}
                  color={colorPrincipal}
                />
              </ImageContainer>
            </ContainerHero>
          )
        }
      })}
    </SectionHero>
  )
}

export default SectionPrincipal
