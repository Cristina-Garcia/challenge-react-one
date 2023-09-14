import { useContext, useState } from 'react'
import { Loader } from '../Loader'
import SectionPrincipal from '../SecccionHero'
import SectionCategory from '../SectionCategories'
import { DataContext } from '../../Controllers/Context'

function Main() {
  const { animeList, categoriesList, loading } = useContext(DataContext)
  const [animeId, setAnimeId] = useState()

  const getId = (id) => {
    setAnimeId(id)
  }

  if (loading === true) {
    return <Loader />
  } else {
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
}

export default Main
