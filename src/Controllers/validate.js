export const validationsAnimes = (form) => {
  let errors = {}

  const regex = new RegExp(
    '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
  )

  if (!form.title.trim()) {
    errors.title = 'El campo Título es requerido'
  } else if (form.title.length >= 40) {
    errors.title = 'No puede tener más de 40 caracteres'
  }
  if (!form.videoId.trim()) {
    errors.videoId = 'El campo Id embed del video  es requerido'
  } else if (form.videoId.length < 11 || form.videoId.length > 11) {
    errors.videoId = 'Debe ingresar 11 caracteres'
  }
  if (!form.imageurl.trim()) {
    errors.imageurl = 'El campo Link imagen del video  es requerido'
  } else if (!regex.test(form.imageurl.trim())) {
    errors.imageurl = 'Debe ingresar una url valida'
  }
  if (!form.genre.trim()) {
    errors.genre = 'El campo Genero es requerido'
  }
  if (!form.sinopsis.trim()) {
    errors.sinopsis = 'El campo sinopsis es requerido'
  } else if (form.sinopsis.length >= 400) {
    errors.sinopsis =
      'La longitud maxima de la descripción debe ser menor a 400 caracteres'
  }
  if (!form.code.trim()) {
    errors.code = 'El campo Codigo es requerido'
  }

  return errors
}

export const validationsCategories = (form, isEditing) => {
  let errors = {}

  if (!isEditing) {
    if (!form.nombre.trim()) {
      errors.nombre = 'El campo Nombre es requerido'
    } else if (form.nombre.length >= 40) {
      errors.nombre = 'No puede tener más de 15 caracteres'
    }

    if (!form.description.trim()) {
      errors.description = 'El campo Descripcion es requerido'
    } else if (form.description.length >= 300) {
      errors.description =
        'La longitud maxima de la descripción debe ser menor a 300 caracteres'
    }
    if (!form.code.trim()) {
      errors.code = 'El campo Codigo es requerido'
    }
  }

  return errors
}
