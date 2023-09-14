import React from 'react'
import styled from 'styled-components'
import { textLight } from '../../assets/UI/variables'

export const Select = styled.select`
  background: #2a2f4f;
  width: 100%;
  padding: 10px;
  border: none;
  color: ${textLight};
  font-size: 21px;
  outline: 0px;
`

function InputSelect({ categories, name, value, updateValue }) {
  return (
    <Select name={name} value={value} onChange={updateValue} required>
      <option value="" disabled defaultValue="">
        Escoja el género principal
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
