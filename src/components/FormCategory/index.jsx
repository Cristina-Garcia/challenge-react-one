import React, { useContext } from 'react'
import { useState } from 'react'
import { DataContext } from '../../Controllers/Context'
import { Form } from '../../assets/StyledFormGroup'
import { Title } from '../FormVideo'
import InputText from '../InputText'
import InputColor from '../InputColor'
import { ButtonsActions, ButtonContainer, ButtonForm } from '../FormVideo'
import Table from '../TableCategories'
import TextArea from '../TextArea'
import { clientService } from '../../Controllers/service'
import { useForm } from '../../Controllers/useForm'
import { validationsCategories } from '../../Controllers/validate'

const categoryData = {
  nombre: '',
  color: '',
  description: '',
  code: '',
}

function FormCategory() {
  const { form, setForm, errors, setErrors, handleBlur, handleChange } =
    useForm(categoryData, (formData) => {
      if (isEditing) {
        return {}
      } else {
        return validationsCategories(formData)
      }
    })

  const { categoriesList, setCategoriesList } = useContext(DataContext)

  const [categoryToUpdate, setCategoryToUpdate] = useState({})

  const [isEditing, setIsEditing] = useState(false)

  const initalValue = isEditing ? categoryToUpdate : form

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors(validationsCategories(form))
    if (Object.keys(errors).length === 0) {
      const response = await clientService.createCategory(form)
      if (response.ok) {
        const newCategory = await response.json()
        setCategoriesList((prevCategories) => [...prevCategories, newCategory])
      }
    } else {
      alert('Ocurrio un error, favor de verificar')
    }
    setForm(categoryData)
  }
  const cleanForm = () => {
    setForm(categoryData)
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
      setForm(categoryData)
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
          value={initalValue.nombre}
          updateValue={isEditing === true ? updateData : handleChange}
          onBlur={handleBlur}
          errorInvalid={errors.nombre}
        />
        <InputColor
          name="color"
          value={initalValue.color}
          updateValue={isEditing === true ? updateData : handleChange}
          onBlur={handleBlur}
        />
        <TextArea
          name="description"
          value={initalValue.description}
          updateValue={isEditing === true ? updateData : handleChange}
          onBlur={handleBlur}
          errorInvalid={errors.description}
        />
        <InputText
          text="Código de seguridad"
          name="code"
          value={initalValue.code}
          updateValue={isEditing === true ? updateData : handleChange}
          onBlur={handleBlur}
          errorInvalid={errors.code}
        />
        <ButtonContainer>
          <ButtonsActions>
            <ButtonForm $primary type="submit">
              Guardar
            </ButtonForm>
            <ButtonForm onClick={() => cleanForm}>Limpiar</ButtonForm>
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
