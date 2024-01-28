import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 45%;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Aggreement = styled.span`
    font-size: 13px;
    margin: 20px 0px;
`

const Button = styled.button`
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    border-radius: 5px;
`


function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input type="text" placeholder="Username..." />
                    <Input type="email" placeholder="Email..." />
                    <Input type="password" placeholder="Password..." />
                    <Input type="password" placeholder="ConfirmPassword..." />
                    <Aggreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Aggreement>
                    <Button type="submit">Sign Up</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
