import React from 'react'
import styled from 'styled-components'
import Category from '../Category'
import { textLight, secondary } from '../../assets/UI/variables'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid ${secondary};
  margin-inline: 40px;
  margin-block: 2rem;
`
const SectionHeader = styled.ul`
  display: grid;
  grid-template-columns: 20% 45% repeat(2, 16%);
  gap: 0.5rem;
  width: 100%;
  flex: 1;
  flex-direction: row;
  border: 1px solid ${secondary};
  padding: 0.5rem;
`
const LiHeader = styled.li`
  list-style: none;
  color: ${textLight};
`
const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

function Table({ categorias, handleDelete, handleUpdate }) {
  return (
    <Section>
      <SectionHeader>
        <LiHeader>Nombre</LiHeader>
        <LiHeader>Descripción</LiHeader>
        <LiHeader>Editar</LiHeader>
        <LiHeader>Eliminar</LiHeader>
      </SectionHeader>
      {categorias && (
        <CategoriesContainer>
          {categorias.map((category) => {
            return (
              <Category
                key={category.id}
                category={category}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            )
          })}
        </CategoriesContainer>
      )}
    </Section>
  )
}

export default Table
