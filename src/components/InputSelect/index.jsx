import React from 'react'
import styled from 'styled-components'

export const Select = styled.select`
  background: #2a2f4f;
  width: 100%;
  padding: 10px;
  border: none;
  color: #fff;
  font-size: 21px;
  outline: 0px;
`

function InputSelect({ categories, value, updateValue }) {
  return (
    <Select value={value} onChange={updateValue}>
      <option value="" disabled selected>
        Escoja un género
      </option>
      {categories.map((categorie) => {
        return (
          <option value={categorie.nombre} key={categorie.id}>
            {categorie.nombre}
          </option>
        )
      })}
    </Select>
  )
}

export default InputSelect
