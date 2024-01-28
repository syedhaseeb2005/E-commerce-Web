import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../Responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  ${mobile({ height: "20vh" })}
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color : #fff;
  margin-bottom: 20px;
`

const Button = styled.button`
  border : none;
  outline : none;
  padding : 10px;
  background-color : #fff;
  color : gray;
  cursor : pointer;
  font-weight : 600;
  border-radius : 10px;
  
`

function CategoryItem({ item }) {
  // console.log(item);
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now!</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
