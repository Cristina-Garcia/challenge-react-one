import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle from './GlobalStyle.jsx'
import Home from './components/Home.jsx'
import Main from './components/Main.jsx'
import FormVideo from './components/FormVideo.jsx'
import FormCategory from './components/FormCategory/index.jsx'
import List from './components/List.jsx/index.jsx'
import ErrorPage from './components/ErrorPage.jsx'

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
        path: 'new-video',
        element: <FormVideo />,
      },
      {
        path: 'new-category',
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
