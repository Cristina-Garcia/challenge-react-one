import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import InputSelect from '../InputSelect'
import InputText from '../InputText'
import TextArea from '../TextArea'
import { Form } from '../../assets/StyledFormGroup.js'
import { StyledButton } from '../../assets/UI'
import { textLight, text } from '../../assets/UI/variables'
import { clientService } from '../../Controllers/service.js'
import { DataContext } from '../../Controllers/Context'
import { useForm } from '../../Controllers/useForm'
import { validationsAnimes } from '../../Controllers/validate.js'

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 400;
  color: ${textLight};
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
  color: ${(props) => (props.$primary ? textLight : 'black')};
  background: ${({ $primary }) => ($primary ? text : textLight)};
  &:hover {
    color: ${textLight};
  }
`

const animeData = {
  title: '',
  videoId: '',
  imageurl: '',
  sinopsis: '',
  genre: '',
  code: '',
}

function FormVideo() {
  const { categoriesList } = useContext(DataContext)

  const { form, setForm, errors, setErrors, handleBlur, handleChange } =
    useForm(animeData, validationsAnimes)

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validationsAnimes(form))
    if (Object.keys(errors).length === 0) {
      clientService.createVideo(form)
    } else {
      console.log('Hubo algun error')
    }
    setForm(animeData)
  }

  const cleanForm = () => {
    setForm(animeData)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Title>Nuevo video</Title>
      <InputText
        text="Título"
        name="title"
        value={form.title}
        updateValue={handleChange}
        onBlur={handleBlur}
        errorInvalid={errors.title}
      />
      <InputText
        text="Id embed del video (Ingrese el de Youtube)"
        name="videoId"
        value={form.videoId}
        updateValue={handleChange}
        onBlur={handleBlur}
        errorInvalid={errors.videoId}
      />
      <InputText
        text="Link imagen del video"
        name="imageurl"
        value={form.imageurl}
        updateValue={handleChange}
        onBlur={handleBlur}
        errorInvalid={errors.imageurl}
      />
      <InputSelect
        name="genre"
        categories={categoriesList}
        value={form.genre}
        updateValue={handleChange}
        onBlur={handleBlur}
        errorInvalid={errors.genre}
      />
      <TextArea
        name="sinopsis"
        value={form.sinopsis}
        updateValue={handleChange}
        onBlur={handleBlur}
        errorInvalid={errors.sinopsis}
      />
      <InputText
        text="Código de seguridad"
        name="code"
        value={form.code}
        updateValue={handleChange}
        onBlur={handleBlur}
        errorInvalid={errors.code}
      />
      <ButtonContainer>
        <ButtonsActions>
          <ButtonForm type="submit" $primary>
            Enviar
          </ButtonForm>
          <ButtonForm onClick={cleanForm}>Limpiar</ButtonForm>
        </ButtonsActions>
        <StyledButton>
          <Link to="/create-category">Nueva Categoria</Link>
        </StyledButton>
      </ButtonContainer>
    </Form>
  )
}

export default FormVideo
