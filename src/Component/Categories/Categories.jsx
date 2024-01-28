import React from 'react'
import styled from 'styled-components'
import { categories } from '../dummydata/dummyData'
import CategoriesItem from './CategoryItem'
import { mobile } from '../../Responsive'


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`

function Categories() {
  return (
    <Container>
      {categories.map(item => (
        <CategoriesItem key={item.id} item={item} />
      ))
    }
    </Container>
  )
}


export default Categories
