import React, { useEffect, useState, useContext } from 'react'
import styled, { StyleSheetManager } from 'styled-components'
import { DataContext } from '../../Controllers/Context'
import {
  ButtonMain,
  ImageContainer,
  ImagenVideo,
  TitleHero,
  TextHero,
} from '../../assets/UI'
import { textLight } from '../../assets/UI/variables'
import YouTubePlayer from 'youtube-player'
import './index.css'

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

  color: ${textLight};
  z-index: 1;
  @media (max-width: 768px) {
    height: 450px;
  }
  @media (max-width: 480px) {
    display: none;
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

const videoId = '7oJeOedoHCQ'

function SectionPrincipal({ animeId }) {
  const { animeList, categoriesList } = useContext(DataContext)
  const [isVisible, setIsVisible] = useState(true)
  const [selectAnimeId, setSelectedAnimeId] = useState(null)

  //Encuentra el anime seleccionado
  const selectAnime = animeList.find((anime) => anime.id === animeId)
  //Si hay un anime seleccionado, obtenemos el url del video para su uso
  const videoSelectedId = selectAnime ? selectAnime.videoId : videoId
  //Encontramos el genero al que pertenece el anime seleccionado
  const categoriePrincipal = categoriesList.find(
    (categorie) => categorie.nombre === selectAnime?.genre
  )
  //Si hay una categoria seleccionada usamos el color que trae para resaltar el boton al que pertenece.
  const colorPrincipal = categoriePrincipal
    ? categoriePrincipal.color
    : textLight

  const allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share '

  useEffect(() => {
    if (animeId !== selectAnimeId) {
      setIsVisible(true)
      setSelectedAnimeId(animeId)
    }
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 15000)

    const player = YouTubePlayer('video-hero', {
      videoId: videoSelectedId,
    })
    player.on('stateChange', (event) => {
      if (event.data == 0) {
        setIsVisible(true)
      }
    })

    return () => {
      clearTimeout(timer)
    }
  }, [animeId, selectAnimeId, videoSelectedId])

  return (
    <SectionHero>
      <iframe
        id="video-hero"
        src={`https://www.youtube.com/embed/${videoSelectedId}?enablejsapi=1&wmode=opaque&autoplay=1&rel=0`}
        title="YouTube video player"
        allow={allow}
        allowFullScreen
      ></iframe>
      {animeList.map((anime) => {
        if (anime.id === animeId) {
          return (
            <ContainerHero key={anime.id}>
              <StyleSheetManager
                shouldForwardProp={(prop) => prop !== 'background'}
              >
                <ContainerInfo>
                  {isVisible && (
                    <ButtonMain background={colorPrincipal}>
                      {anime.genre}
                    </ButtonMain>
                  )}
                  <TitleHero>{anime.title}</TitleHero>
                  {isVisible && <TextHero>{anime.sinopsis}</TextHero>}
                </ContainerInfo>
                {isVisible && (
                  <ImageContainer>
                    <ImagenVideo
                      src={anime.imageurl}
                      alt={anime.title}
                      color={colorPrincipal}
                    />
                  </ImageContainer>
                )}
              </StyleSheetManager>
            </ContainerHero>
          )
        }
      })}
    </SectionHero>
  )
}

export default SectionPrincipal
