import React from 'react'
import styled, { StyleSheetManager } from 'styled-components'
import { FormGroup, LabelFromGroup, Error } from '../../assets/StyledFormGroup'

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

function TextArea({ name, updateValue, value, onBlur, errorInvalid }) {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'error'}>
      <FormGroup error={errorInvalid}>
        <div>
          <Label>Sinopsis</Label>
          <StyledTextArea
            name={name}
            value={value}
            onChange={updateValue}
            onBlur={onBlur}
          />
        </div>
        {errorInvalid && <Error>{errorInvalid}</Error>}
      </FormGroup>
    </StyleSheetManager>
  )
}

export default TextArea
