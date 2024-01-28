import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../../Responsive'
import { login } from '../../Redux/apiCalls';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
      background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 10px;
    &:disabled{
        opacity: 0.5;
        color: green;
        cursor: not-allowed;
    }
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    color: teal;
    cursor: pointer;

`

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);

    const handleLogin = (e) => {
        // console.log('==>>handleLogin');
        e.preventDefault();
        login(dispatch, { username, password })
        navigate('/')
    }

    return (
        <Container>
            <Wrapper>
                <Title>Login your Account</Title>
                <Form>
                    <Input
                        type="text"
                        placeholder="Username..."
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Password..."
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        onClick={handleLogin}
                        disabled={isFetching}
                        type="submit">
                         Login
                    </Button>
                    {error && <span style={{color:'red'}}>Something went wrong...</span>}
                    <Link>Forgot Password?</Link>

                    <Link>Create a New Account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
