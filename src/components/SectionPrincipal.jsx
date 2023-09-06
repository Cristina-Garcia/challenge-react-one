import React, { useEffect, useState, useContext } from 'react'
import { useRef } from 'react'
import styled, { StyleSheetManager } from 'styled-components'
import { DataContext } from '../Controllers/Context'
import {
  ButtonMain,
  ImageContainer,
  ImagenVideo,
  TitleHero,
  TextHero,
} from '../assets/UI'

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

const IframeVideo = styled.iframe`
  width: 100%;
  height: 600px;
  src: ${(props) => (props.src ? `url(${props.src})` : `url(${video})`)};
  border: none;
  @media (max-width: 480px) {
    height: 300px;
  }
`
//Video banner default
const video = 'https://www.youtube.com/embed/7oJeOedoHCQ?si=-fOWnclwcu5LmajG'

function SectionPrincipal({ animeId }) {
  const { animeList, categoriesList } = useContext(DataContext)
  const [isVisible, setIsVisible] = useState(true)
  const [selectAnimeId, setSelectedAnimeId] = useState(null)

  const iframeRef = useRef(null)
  iframeRef.onLoad = () => {
    const player = iframeRef.current.player
    player.onPlayerStateChange = (event) => {
      console.log('reproduciendo')
      if (event.data === YT.PlayerState.ENDED) {
        setIsVisible(false)
      }
    }
  }

  //Encuentra el anime seleccionado
  const selectAnime = animeList.find((anime) => anime.id === animeId)

  //Si hay un anime seleccionado, obtenemos el url del video para su uso
  const videoURL = selectAnime ? selectAnime.videourl : video

  const allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share '

  //Encontramos el genero al que pertenece el anime seleccionado
  const categoriePrincipal = categoriesList.find(
    (categorie) => categorie.nombre === selectAnime?.genre
  )
  //Si hay una categoria seleccionada usamos el color que trae para resaltar el boton al que pertenece.
  const colorPrincipal = categoriePrincipal ? categoriePrincipal.color : 'fff'

  useEffect(() => {
    if (animeId !== selectAnimeId) {
      setIsVisible(true)
      setSelectedAnimeId(animeId)
    }
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 20000)

    // const resetTimer = setTimeout(() => {
    //   setIsVisible(true)
    // }, 60000)
    return () => {
      clearTimeout(timer)
      // clearTimeout(resetTimer)
    }
  }, [animeId, selectAnimeId])

  return (
    <SectionHero>
      <IframeVideo
        ref={iframeRef}
        width="100%"
        src={videoURL}
        title="YouTube video player"
        $frameborder="0"
        allow={allow}
        allowFullScreen
      ></IframeVideo>
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
