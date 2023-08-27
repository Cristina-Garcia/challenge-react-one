import React from 'react'
import styled from 'styled-components'
import Category from './Category'
import { clientService } from '../Controllers/service'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid #d4adfc;
`
const SectionHeader = styled.ul`
  display: grid;
  grid-template-columns: 20% 45% repeat(2, 16%);
  gap: 0.5rem;
  width: 100%;
  /* justify-content: space-between; */
  flex: 1;
  flex-direction: row;
  border: 1px solid #d4adfc;
  padding: 0.5rem;
`
const LiHeader = styled.li`
  list-style: none;
  color: #fff;

  /* border-right: 1px solid #d4adfc; */
`

function InfoCategory({ categorias }) {
  return (
    <Section>
      <SectionHeader>
        <LiHeader>Nombre</LiHeader>
        <LiHeader>Descripción</LiHeader>
        <LiHeader>Editar</LiHeader>
        <LiHeader>Eliminar</LiHeader>
      </SectionHeader>
    </Section>
  )
}

export default InfoCategory
