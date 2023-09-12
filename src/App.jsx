import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle from './GlobalStyle.jsx'
import Home from './components/Home'
import Main from './components/Main'
import FormVideo from './components/FormVideo'
import FormCategory from './components/FormCategory'
import List from './components/List'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'create-video',
        element: <FormVideo />,
      },
      {
        path: 'create-category',
        element: <FormCategory />,
      },
      {
        path: 'animes/:categoria',
        element: <List />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
