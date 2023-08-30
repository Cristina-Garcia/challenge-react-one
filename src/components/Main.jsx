import { useEffect, useState } from 'react'
import SectionPrincipal from './SectionPrincipal'
import SectionCategory from './SectionCategory'
import { clientService } from '../Controllers/service'

function Main() {
  const [animeList, setAnimeData] = useState([])
  const [categoriesList, setCategoriesData] = useState([])
  const [animeId, setAnimeId] = useState()

  useEffect(() => {
    clientService.listVideos().then((datos) => {
      setAnimeData(datos)
    })
  }, [])

  useEffect(() => {
    clientService.listCategories().then((datos) => {
      setCategoriesData(datos)
    })
  }, [])

  const getId = (id) => {
    setAnimeId(id)
  }

  return (
    <>
      <SectionPrincipal
        animes={animeList}
        animeId={animeId}
        categories={categoriesList}
      />
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
