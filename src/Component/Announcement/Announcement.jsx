import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 32px;
    background-color: teal;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
`



function Announcement() {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement
