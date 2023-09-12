import React from 'react'
import styled from 'styled-components'

const InfoCategory = styled.ul`
  background-color: black;
  display: grid;
  grid-template-columns: 20% 45% repeat(2, 16%);
  gap: 0.5rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`
const Info = styled.li`
  color: #fff;
  list-style: none;
  padding-left: 0.5rem;
`
const Icon = styled.button`
  color: #fff;
  border: none;
  background: transparent;
  width: 20px;

  cursor: pointer;
`
function Category({ category, handleDelete, handleUpdate }) {
  return (
    <InfoCategory>
      <Info>{category.nombre}</Info>
      <Info>{category.description}</Info>
      <Icon onClick={() => handleUpdate(category.id)}>
        <i className="fa-solid fa-pen-to-square"></i>
      </Icon>
      <Icon onClick={() => handleDelete(category.id)}>
        <i className="fa-solid fa-trash"></i>
      </Icon>
    </InfoCategory>
  )
}

export default Category
