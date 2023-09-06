import React from 'react'
import { StyleSheetManager } from 'styled-components'
import {
  FormGroup,
  InputFormFroup,
  LabelFromGroup,
  SpanTextFormGroup,
  Error,
} from '../../assets/StyledFormGroup'
import './InputText.css'

function InputText({ text, name, value, updateValue, onBlur, errorInvalid }) {
  return (
    <>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'error'}>
        <FormGroup error={errorInvalid}>
          <div>
            <InputFormFroup
              type="text"
              name={name}
              value={value}
              onChange={updateValue}
              onBlur={onBlur}
            />
            <LabelFromGroup>
              <SpanTextFormGroup>{text}</SpanTextFormGroup>
            </LabelFromGroup>
          </div>
          {errorInvalid && <Error>{errorInvalid}</Error>}
        </FormGroup>
      </StyleSheetManager>
    </>
  )
}

export default InputText
