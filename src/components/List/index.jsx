import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../Loader'
import { DataContext } from '../../Controllers/Context'
import { TitleHero } from '../../assets/UI'
import { textLight } from '../../assets/UI/variables'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding-inline: 2rem;
  margin-block: 1rem;
  gap: 1rem;
`
const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`
const CardImg = styled.img`
  width: 300px;
`
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${textLight};
  height: min(200px, auto);
  /* From https://css.glass */
  background: rgba(12, 19, 79, 0.68);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.1px);
  -webkit-backdrop-filter: blur(5.1px);
  border: 1px solid rgba(12, 19, 79, 0.71);
  padding: 2rem;
`
const Header = styled(TitleHero)`
  margin-block-start: 1rem;
`
const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${textLight};
`
function List() {
  const { animeList, loading } = useContext(DataContext)
  const { categoria } = useParams()

  if (loading === true) {
    return <Loader />
  } else {
    return (
      <>
        <Header>Lista de Animes {categoria}</Header>
        <Container>
          {animeList.map((anime) => {
            if (anime.genre === categoria) {
              return (
                <Card key={anime.id}>
                  <CardImg src={anime.imageurl} alt={anime.title} />
                  <CardInfo>
                    <Title>{anime.title}</Title>
                    <span>{anime.sinopsis}</span>
                  </CardInfo>
                </Card>
              )
            }
          })}
        </Container>
      </>
    )
  }
}

export default List
