import React from 'react'
import styled from 'styled-components'
import Category from './Category'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid #d4adfc;
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
  border: 1px solid #d4adfc;
  padding: 0.5rem;
`
const LiHeader = styled.li`
  list-style: none;
  color: #fff;
`
const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

function InfoCategory({ categorias, handleDelete }) {
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
              />
            )
          })}
        </CategoriesContainer>
      )}
    </Section>
  )
}

export default InfoCategory
