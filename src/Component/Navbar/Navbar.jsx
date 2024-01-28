import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../Responsive'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* ${mobile({ padding: "10px 0px" })} */
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    ${mobile({ display: 'none' })}
`
const SearchContainer = styled.div`
    border : 0.5px solid lightgray;
    margin-left: 25px;
    display: flex;
    align-items: center;
    padding: 3px;
    border-radius: 5px;
`

const SearchInput = styled.input`
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    ${mobile({ width: "50px" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "10px" })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <SearchInput placeholder='Search' />
                        <Search style={{ color: 'gray', fontSize: '15px' }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}>
                        <Logo>
                            Syed Store
                        </Logo>
                    </Link>
                </Center>
                <Right>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}><MenuItem>Register</MenuItem></Link>  
                    <Link style={{ textDecoration: 'none', color: 'inherit' }}  to={'/login'}><MenuItem>Login</MenuItem></Link>
                    <Link to={'/cart'}>
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined fontSize="medium" style={{ color: "black" }} />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
