import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import imageOne from "../../../Assets/DJI_0141.jpeg"
import imageTwo from "../../../Assets/DJI_0250.jpeg"
import imageThree from "../../../Assets/HP7A0013.jpeg"

// const images = [
//     {
//         img: imageOne,
//         title: 'Tall Building'
//     },
//     {
//         img: imageTwo,
//         title: 'Luxury High Rise Condo'
//     },
//     {
//         img: imageThree,
//         title: 'Hands and Plans'
//     },
    
// ]

const ModalComponent = ({img}) => {
    return(
        <ModalWrapper>
            <img src={img}/>
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
        display: inline;
        position: absolute;
        left: 0;
        z-index: 1000;
        width: 400px;
        height: 400px;
        img {
            object-fit: cover;
            object-position: center;
        }
    }
`

const Carousel = ({images}) => {

    const [ carouselCounter, setCarouselCounter ] = useState(0);
    const [ modalState, setModalState ] = useState(false)

    const handlePrevious = () => {
        if ( carouselCounter === 0 ) { return setCarouselCounter(images.length - 1) }
        setCarouselCounter(carouselCounter - 1)
    };
    const handleNext = () => {
        if ( carouselCounter === images.length - 1 ) { return setCarouselCounter(0) }
        setCarouselCounter(carouselCounter + 1)
    };

    console.log(images)

    return(
        <CarouselWrapper>
            <ImageLeft>
                <img src={images[carouselCounter] === images[0] ? images[images.length - 1].url : images[carouselCounter - 1].url} />
            </ImageLeft>
            <Image>
                <ArrowWrapper style={{left: '15px'}}>
                    <FontAwesomeIcon style={{marginRight: '4px'}} icon={faAngleLeft} onClick={handlePrevious} size='lg'/>
                </ArrowWrapper>
                <img src={images[carouselCounter].url} />
                <LinkWrapper>
                    <div onClick={() => setModalState(!modalState)}><p>{images[carouselCounter].title}</p></div>
                </LinkWrapper>
                <ArrowWrapper style={{right: '15px'}}>
                    <FontAwesomeIcon style={{marginLeft: '2px'}} icon={faAngleRight} onClick={handleNext} size='lg'/>
                </ArrowWrapper>
            </Image>
            <ImageRight>
                <img src={images[carouselCounter].url === images[images.length - 1].url ? images[0].url : images[carouselCounter + 1].url} />
            </ImageRight>
            {/* {
                modalState ? <ModalComponent img={images[carouselCounter].img}/> : ''
            } */}
        </CarouselWrapper>
    );
};

export default Carousel;


const CarouselWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    margin: 50px 0;
    @media only screen and (min-width: 768px) {
        overflow: hidden;
    }
    @media (min-width: 1440px) {
        padding: 0px 100px;
    }
`
const ArrowWrapper = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    background: #e6e6e6;
    opacity: .65;
    backdrop-filter: blur(150px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: solid 1px black;
    z-index: 2;
`
// const Overlay = styled.div`
//     display: none;
//     @media only screen and (min-width: 768px) {
//         /* position: absolute;
//         top: 0;
//         left: 0; */
//         width: 100px;
//         height: 250px;
//         z-index: 100;
//         background-color: black;
//     }
// `
const ImageLeft = styled.div`
    display: none;
    position: relative;
    background-color: black;
    img {
        object-fit: cover;
        object-position: center;
        height: 250px;
        filter: brightness(50%);
    }
    @media only screen and (min-width: 768px) {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
    } 
    /* @media (min-width: 1440px) {
        width: 100px
    } */
`
const ImageRight = styled.div`
    display: none;
    position: relative;
    background-color: black;
    img {
        height: 250px;
        object-fit: cover;
        object-position: center;
        filter: brightness(50%);
    }
    @media only screen and (min-width: 768px) {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
    }   
    /* @media (min-width: 1440px) {
        width: 100px
    } */
`
const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    position: relative;
    img {
        height: 300px;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
    @media only screen and (min-width: 768px) {
        width: 50%;
        margin-bottom: 0;
        z-index: 2;
    }
    @media (min-width: 1024px) {
        img {
            height: 350px;
        }
    }
    @media (min-width: 1440px) {
        img {
            height: 500px;
        }
    }

`
const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 25px;
    right: 0px;
    padding: 5px 20px;
    background-color: #FE3200;
    color: whitesmoke;
`