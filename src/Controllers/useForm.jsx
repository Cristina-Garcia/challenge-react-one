import { useState } from 'react'

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleBlur = (e) => {
    handleChange(e)
    setErrors(validateForm(form))
  }

  return { form, setForm, errors, setErrors, handleBlur, handleChange }
}
