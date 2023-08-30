import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import { background } from '../assets/UI/variables'

const MainHome = styled.main`
  /* background: ${background}; */
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-block: 1rem;
`

export default function Home() {
  return (
    <>
      <Header />
      <MainHome>
        <Outlet />
      </MainHome>
      <Footer />
    </>
  )
}
