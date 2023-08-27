import React from 'react'
import styled from 'styled-components'

const InfoCategory = styled.ul`
  background-color: black;
  display: grid;
  grid-template-columns: 20% 45% repeat(2, 16%);
  gap: 0.5rem;
  width: 100%;
`
const Info = styled.li`
  color: #fff;
  list-style: none;
  padding-left: 0.5rem;
  /* background: '#1D267D'; */
`
function Category({ data }) {
  const { nombre, description } = data
  return (
    <InfoCategory>
      <Info>{nombre}</Info>
      <Info>{description}</Info>
      <Info>
        <i className="fa-solid fa-pen-to-square"></i>
      </Info>
      <Info>
        <i className="fa-solid fa-trash"></i>
      </Info>
    </InfoCategory>
  )
}

export default Category
