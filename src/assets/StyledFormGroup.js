import styled from 'styled-components'
import { background } from '../assets/UI/variables'

export const Form = styled.form`
  width: 90vw;
  height: calc(100% - 160px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 40px;
  margin: 0 auto;
  /* background: ${background}; */
`

export const FormGroup = styled.div`
  position: relative;
  width: 100%;
  background: #2a2f4f;
  padding: 0.5rem;
  border-radius: 4px;
`
export const InputFormFroup = styled.input`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  border: none;
  background: inherit;
  outline: 0px;
  caret-color: #fff;
  color: white;
`
export const LabelFromGroup = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  font-size: 18px;
  color: #fff;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }
`
export const SpanTextFormGroup = styled.span`
  position: absolute;
  bottom: 5px;
  left: 0;
  transition: all 0.3s ease;
  margin-left: 10px;
  color: #fff;
`
