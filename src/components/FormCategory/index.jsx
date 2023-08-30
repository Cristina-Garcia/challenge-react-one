import React from 'react'
import { useState, useEffect } from 'react'
import { Form } from '../../assets/StyledFormGroup'
import { Title } from '../FormVideo'
import InputText from '../InputText'
import InputColor from '../InputColor'
import { ButtonsActions, ButtonContainer, ButtonForm } from '../FormVideo'
import InfoCategory from '../InfoCategory'
import TextArea from '../TextArea'
import { clientService } from '../../Controllers/service'

function FormCategory() {
  const [categoriesList, setCategoriesList] = useState([])
  useEffect(() => {
    clientService.listCategories().then((datos) => {
      setCategoriesList(datos)
    })
  }, [])
  const [categoryData, setCategoryData] = useState({
    nombre: '',
    color: '',
    description: '',
    code: '',
  })

  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    clientService.createCategory(categoryData)
  }
  const cleanForm = () => {
    setCategoryData({
      nombre: '',
      color: '',
      description: '',
      code: '',
    })
  }

  const handleDelete = (id) => {
    clientService.deleteCategory(id)
    setCategoriesList(categoriesList.filter((category) => category.id !== id))
  }
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
            <ButtonForm onClick={cleanForm}>Limpiar</ButtonForm>
          </ButtonsActions>
        </ButtonContainer>
      </Form>
      {categoriesList && (
        <InfoCategory categorias={categoriesList} handleDelete={handleDelete} />
      )}
    </div>
  )
}

export default FormCategory
