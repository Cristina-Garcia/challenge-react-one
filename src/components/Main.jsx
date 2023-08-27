import { useEffect, useState } from 'react'
import SectionPrincipal from './SectionPrincipal'
import SectionCategory from './SectionCategory'
import { clientService } from '../Controllers/service'

function Main() {
  const [animeData, setAnimeData] = useState([])
  const [categoriesData, setCategoriesData] = useState([])
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
        animes={animeData}
        animeId={animeId}
        categories={categoriesData}
      />

      {categoriesData.map((categorie, index) => {
        return (
          <SectionCategory
            key={index}
            categorie={categorie}
            animes={animeData}
            getId={getId}
          />
        )
      })}
    </>
  )
}

export default Main
