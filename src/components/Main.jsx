import { useContext, useState } from 'react'
import SectionPrincipal from './SectionPrincipal'
import SectionCategory from './SectionCategory'
import { DataContext } from '../Controllers/Context'

function Main() {
  const { animeList, categoriesList } = useContext(DataContext)

  const [animeId, setAnimeId] = useState()

  const getId = (id) => {
    setAnimeId(id)
  }

  return (
    <>
      <SectionPrincipal animeId={animeId} />
      {categoriesList.map((categorie, index) => {
        if (animeList.find((anime) => anime.genre === categorie.nombre)) {
          return (
            <SectionCategory
              key={index}
              categorie={categorie}
              animes={animeList}
              getId={getId}
            />
          )
        }
      })}
    </>
  )
}

export default Main
