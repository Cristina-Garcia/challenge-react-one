import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle from './GlobalStyle.jsx'
import Home from './components/Home.jsx'
import Main from './components/Main.jsx'
import FormVideo from './components/FormVideo.jsx'
import FormCategory from './components/FormCategory/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
