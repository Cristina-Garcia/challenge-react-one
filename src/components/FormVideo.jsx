import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import InputSelect from './InputSelect'
import InputText from './InputText'
import TextArea from './TextArea'
import { Form } from '../assets/StyledFormGroup.js'
import { StyledButton } from '../assets/UI'
import { clientService } from '../Controllers/service.js'

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 400;
  color: #fff;
  text-align: center;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ButtonsActions = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const ButtonForm = styled(StyledButton)`
  color: ${(props) => (props.$primary ? 'white' : 'black')};
  background: ${({ $primary }) => ($primary ? '#5C469C' : 'white')};
`

function FormVideo() {
  const [categoriesList, setCategoriesList] = useState([])
  useEffect(() => {
    clientService.listCategories().then((datos) => {
      setCategoriesList(datos)
    })
  }, [])
  const [animeData, setAnimeData] = useState({
    title: '',
    videourl: '',
    imageurl: '',
    sinopsis: '',
    genre: '',
    code: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    clientService.createVideo(animeData)
    setAnimeData({
      title: '',
      videourl: '',
      imageurl: '',
      sinopsis: '',
      genre: '',
      code: '',
    })
  }

  const handleChange = (e) => {
    setAnimeData({
      ...animeData,
      [e.target.name]: e.target.value,
    })
  }

  const cleanForm = () => {
    setAnimeData({
      title: '',
      videourl: '',
      imageurl: '',
      sinopsis: '',
      genre: '',
      code: '',
    })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Title>Nuevo video</Title>
      <InputText
        text="Título"
        name="title"
        value={animeData.title}
        updateValue={handleChange}
      />
      <InputText
        text="Link embed del video"
        name="videourl"
        value={animeData.videourl}
        updateValue={handleChange}
      />
      <InputText
        text="Link imagen del video"
        name="imageurl"
        value={animeData.imageurl}
        updateValue={handleChange}
      />
      <InputSelect
        name="genre"
        categories={categoriesList}
        value={animeData.genre}
        updateValue={handleChange}
      />
      <TextArea
        name="sinopsis"
        value={animeData.sinopsis}
        updateValue={handleChange}
      />
      <InputText
        text="Código de seguridad"
        name="code"
        value={animeData.code}
        updateValue={handleChange}
      />
      <ButtonContainer>
        <ButtonsActions>
          <ButtonForm type="submit" $primary>
            Enviar
          </ButtonForm>
          <ButtonForm onClick={cleanForm}>Limpiar</ButtonForm>
        </ButtonsActions>
        <StyledButton>
          <Link to="/new-category">Nueva Categoria</Link>
        </StyledButton>
      </ButtonContainer>
    </Form>
  )
}

export default FormVideo
