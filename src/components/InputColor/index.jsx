import React from 'react'
import { styled } from 'styled-components'
import { FormGroup, Error } from '../../assets/StyledFormGroup'

const StyledInputColor = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  margin-top: 0.5rem;
  background: none;
`
const Label = styled.label`
  color: #fff;
  font-size: 12px;
`

function InputColor({ name, updateValue }) {
  return (
    <FormGroup>
      <Label>Color</Label>
      <StyledInputColor type="color" name={name} onChange={updateValue} />
    </FormGroup>
  )
}

export default InputColor
