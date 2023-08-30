import uuid4 from 'uuid4'

const BASE_API = 'http://localhost:3000'
// const apiURL = 'https://api.jikan.moe/v4/anime'

const categoriesURL = `${BASE_API}/categories`
const videosURL = `${BASE_API}/animes`

const listVideos = async () => {
  const res = await fetch(videosURL)
  const resData = await res.json()
  return resData
}

const listCategories = async () => {
  const res = await fetch(categoriesURL)
  const restData = await res.json()
  return restData
}

const createVideo = async (videoData) => {
  return await fetch(videosURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      ...videoData,
      id: uuid4(),
    }),
  })
}

const createCategory = async (categoryData) => {
  return await fetch(categoriesURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      ...categoryData,
      id: uuid4(),
    }),
  })
}
const deleteCategory = async (categoryId) => {
  return await fetch(`${categoriesURL}/${categoryId}`, {
    method: 'DELETE',
  })
}

const updateCategory = async (id, categoryData) => {
  return await fetch(`${categoriesURL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoryData),
  })
}

export const clientService = {
  listVideos,
  listCategories,
  createVideo,
  createCategory,
  deleteCategory,
  updateCategory,
}
