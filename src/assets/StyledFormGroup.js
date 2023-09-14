import styled from 'styled-components'
import { textLight } from './UI/variables'

export const Form = styled.form`
  width: 90vw;
  height: calc(100% - 160px);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-block: 40px;
  margin: 0 auto;
`

export const FormGroup = styled.div`
  position: relative;
  width: 100%;
  background: #2a2f4f;
  padding: 0.5rem;
  border-radius: 4px;
  ${(props) => props.error && `border-bottom:2px solid red`}
`

export const InputFormFroup = styled.input`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  border: none;
  background: inherit;
  outline: 0px;
  caret-color: ${textLight};
  color: ${textLight};
`
export const LabelFromGroup = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  font-size: 18px;
  color: ${textLight};
`
export const SpanTextFormGroup = styled.span`
  position: absolute;
  bottom: 5px;
  left: 0;
  transition: all 0.3s ease;
  margin-left: 10px;
  color: ${textLight};
`

export const Error = styled.span`
  color: red;
  margin: 0;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  bottom: -17px;
`
