import { createGlobalStyle } from 'styled-components'
import { background } from './assets/UI/variables'

const GlobalStyle = createGlobalStyle`*{
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
  margin: 0;
  padding: 0;
  text-decoration: none;
  background-color:${background}
 }
`
export default GlobalStyle
