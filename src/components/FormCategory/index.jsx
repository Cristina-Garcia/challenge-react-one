import React from 'react'
import { useState, useEffect } from 'react'
import { Form } from '../../assets/StyledFormGroup'
import { Title } from '../FormVideo'
import InputText from '../InputText'
import InputColor from '../InputColor'
import { ButtonsActions, ButtonContainer, ButtonForm } from '../FormVideo'
import Table from '../Table'
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

  const [categoryToUpdate, setCategoryToUpdate] = useState({})

  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await clientService.createCategory(categoryData)
    if (response.ok) {
      const newCategory = await response.json()
      setCategoriesList((prevCategories) => [...prevCategories, newCategory])
      setCategoryData({
        nombre: '',
        color: '',
        description: '',
        code: '',
      })
    }
  }
  const cleanForm = () => {
    setCategoryData({
      nombre: '',
      color: '',
      description: '',
      code: '',
    })
  }
  const handleUpdate = (id) => {
    setIsEditing(true)
    const dataToUpdate = categoriesList.find((category) => category.id === id)
    setCategoryToUpdate(dataToUpdate)
  }
  const updateData = (e) => {
    setCategoryToUpdate((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const update = async (e) => {
    e.preventDefault()
    const response = await clientService.updateCategory(
      categoryToUpdate.id,
      categoryToUpdate
    )
    if (response.ok) {
      setCategoriesList((CategoriesList) =>
        CategoriesList.map((category) =>
          category.id === categoryToUpdate.id ? categoryToUpdate : category
        )
      )
      setIsEditing(false)
      setCategoryData({
        nombre: '',
        color: '',
        description: '',
        code: '',
      })
    }
  }
  const handleDelete = (id) => {
    clientService.deleteCategory(id)
    setCategoriesList(categoriesList.filter((category) => category.id !== id))
  }
  return (
    <div>
      <Form onSubmit={isEditing === true ? update : handleSubmit}>
        <Title>Nueva Categoria</Title>
        <InputText
          text="Nombre"
          name="nombre"
          value={
            isEditing === true ? categoryToUpdate.nombre : categoryData.nombre
          }
          updateValue={isEditing === true ? updateData : handleChange}
        />
        <InputColor
          name="color"
          value={
            isEditing === true ? categoryToUpdate.color : categoryData.color
          }
          updateValue={isEditing === true ? updateData : handleChange}
        />
        <TextArea
          name="description"
          value={
            isEditing === true
              ? categoryToUpdate.description
              : categoryData.description
          }
          updateValue={isEditing === true ? updateData : handleChange}
        />
        <InputText
          text="Código de seguridad"
          name="code"
          value={isEditing === true ? categoryToUpdate.code : categoryData.code}
          updateValue={isEditing === true ? updateData : handleChange}
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
        <Table
          categorias={categoriesList}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  )
}

export default FormCategory
