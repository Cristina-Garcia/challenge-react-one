import React from 'react'
import {
  FormGroup,
  InputFormFroup,
  LabelFromGroup,
  SpanTextFormGroup,
} from '../../assets/StyledFormGroup'
import './InputText.css'

function InputText({ text, name, value, updateValue }) {
  return (
    <FormGroup>
      <InputFormFroup
        type="text"
        name={name}
        value={value}
        onChange={updateValue}
      />
      <LabelFromGroup>
        <SpanTextFormGroup>{text}</SpanTextFormGroup>
      </LabelFromGroup>
    </FormGroup>
  )
}

export default InputText
