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
  const [categoriesData, setCategoriesData] = useState([])
  useEffect(() => {
    clientService.listCategories().then((datos) => {
      setCategoriesData(datos)
    })
  }, [])
  const [videoData, setVideoData] = useState({
    title: '',
    videourl: '',
    imageurl: '',
    sinopsis: '',
    genre: '',
    code: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    clientService.createVideo(videoData)
  }

  const handleChange = (e) => {
    setVideoData({
      ...videoData,
      [e.target.name]: e.target.value,
    })
    console.log(videoData)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Nuevo video</Title>
      <InputText
        text="Título"
        name="title"
        value={videoData.title}
        updateValue={handleChange}
      />
      <InputText
        text="Link del video"
        name="videourl"
        value={videoData.videourl}
        updateValue={handleChange}
      />
      <InputText
        text="Link imagen del video"
        name="imageurl"
        value={videoData.imageurl}
        updateValue={handleChange}
      />
      <InputSelect
        name="genre"
        categories={categoriesData}
        value={videoData.genre}
        updateValue={handleChange}
      />
      <TextArea
        name="sinopsis"
        value={videoData.sinopsis}
        updateValue={handleChange}
      />
      <InputText
        text="Código de seguridad"
        name="code"
        value={videoData.code}
        updateValue={handleChange}
      />
      <ButtonContainer>
        <ButtonsActions>
          <ButtonForm type="submit" $primary>
            Enviar
          </ButtonForm>
          <ButtonForm>Limpiar</ButtonForm>
        </ButtonsActions>
        <StyledButton>
          <Link to="/new-category">Nueva Categoria</Link>
        </StyledButton>
      </ButtonContainer>
    </Form>
  )
}

export default FormVideo
