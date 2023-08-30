import React from 'react'
import styled from 'styled-components'
import { FormGroup, LabelFromGroup } from '../../assets/StyledFormGroup'

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding-top: 20px;
  border: none;
  background: inherit;
  outline: 0px;
  caret-color: #fff;
  resize: none;
  color: white;
`
const Label = styled(LabelFromGroup)`
  margin-left: 10px;
`

function TextArea({ name, updateValue, value }) {
  return (
    <FormGroup>
      <Label>Descripción</Label>
      <StyledTextArea name={name} value={value} onChange={updateValue} />
    </FormGroup>
  )
}

export default TextArea
