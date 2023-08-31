import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonMain, TitleHero } from '../assets/UI'
import { text, backgroundPrimary } from '../assets/UI/variables'

const Error = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ErrorImg = styled.img`
  width: 400px;
`
const Text = styled(TitleHero)`
  letter-spacing: 5px;
  font-weight: bold;
  margin-bottom: 2rem;
`
export default function ErrorPage() {
  return (
    <Error>
      <Text>Lo sentimos...</Text>
      <ErrorImg
        src="./lost-astronout-boy-pngtree.png"
        alt="Error page by storyset de Freepik"
      />
      <Link to="/">
        <ButtonMain color={text}>Volver a la página</ButtonMain>
      </Link>
    </Error>
  )
}
