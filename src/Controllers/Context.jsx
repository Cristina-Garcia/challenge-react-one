import React, { useState, useEffect, createContext } from 'react'
import { clientService } from './service.js'

//  1. Crear el contexto || el que tenemos que consumir
export const DataContext = createContext()

// 2. Crear el provider, para proveer el contexto
export const DataProvider = ({ children }) => {
  const [animeList, setAnimeList] = useState([])
  const [categoriesList, setCategoriesList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const animes = await clientService.listVideos()
        setAnimeList(animes)
      } catch (error) {
        console.log('Error', error)
      }
      try {
        const categorias = await clientService.listCategories()
        setCategoriesList(categorias)
      } catch (error) {
        console.log('Error', error)
      }
      setLoading(false)
    }
    fetchData()
  }, [])
  return (
    <DataContext.Provider
      value={{
        animeList,
        setAnimeList,
        categoriesList,
        setCategoriesList,
        loading,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
