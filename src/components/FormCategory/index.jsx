import React from 'react'
import { useState } from 'react'
import { Form } from '../../assets/StyledFormGroup'
import { Title } from '../FormVideo'
import InputText from '../InputText'
import InputColor from '../InputColor'
import { ButtonsActions, ButtonContainer, ButtonForm } from '../FormVideo'
import InfoCategory from '../InfoCategory'
import TextArea from '../TextArea'
import { clientService } from '../../Controllers/service'

function FormCategory() {
  const [categoryData, setCategoryData] = useState({
    nombre: '',
    color: '',
    description: '',
    code: '',
  })

  // const [categorias, setCategorias] = useState([
  //   {
  //     id: uuid4(),
  //     nombre: 'Espacio',
  //     color: '#fff',
  //     description: 'Todo sobre el espacio',
  //     code: '123',
  //   },
  //   {
  //     id: uuid4(),
  //     nombre: 'Codigo',
  //     color: '#842222',
  //     description: 'Todo sobre el codigo',
  //     code: '123',
  //   },
  // ])

  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    clientService.createCategory(categoryData)
  }

  const listCategorias = clientService
    .listCategories()
    .then((categories) => categories)

  console.log('datos', listCategorias)

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Title>Nueva Categoria</Title>
        <InputText
          text="Nombre"
          name="nombre"
          value={categoryData.nombre}
          updateValue={handleChange}
        />
        <InputColor
          name="color"
          value={categoryData.color}
          updateValue={handleChange}
        />
        <TextArea
          name="description"
          value={categoryData.description}
          updateValue={handleChange}
        />
        <InputText
          text="Código de seguridad"
          name="code"
          value={categoryData.code}
          updateValue={handleChange}
        />
        <ButtonContainer>
          <ButtonsActions>
            <ButtonForm $primary type="submit">
              Guardar
            </ButtonForm>
            <ButtonForm>Limpiar</ButtonForm>
          </ButtonsActions>
        </ButtonContainer>
      </Form>
      {listCategorias.length >= 0 && (
        <InfoCategory categorias={listCategorias.categories} />
      )}
    </div>
  )
}

export default FormCategory
