import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../dummydata/dummyData'
import {mobile} from '../../Responsive'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && '10px'};
    right: ${props => props.direction === "right" && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 80%;
    width: 100%;
    object-fit: contain;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((slideIndex) => (slideIndex < 2 ? slideIndex + 1 : 0));
        }, 3000);
        return () => clearInterval(interval); 
    }, []);

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick("left")}>
                <KeyboardArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id} >
                        <ImgContainer>
                            <Image src={item.img} alt='img' />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>Show Now</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick("right")}>
                <KeyboardArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider