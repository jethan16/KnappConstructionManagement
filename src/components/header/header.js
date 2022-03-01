import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./header.css"

const Header = ({title, subtitle, videoURL, media, button}) => {

    console.log(button)

    return(
        <HeaderWrapper>
            <Overlay />
            <img src={media.url} alt={media.alt} />
            <video autoPlay="autoplay" muted loop preload="auto" className='hero-video' id="bgvid">
                <source src={videoURL} type="video/mp4" />
            </video>
            <ContentWrapper>
                <Title color={title.color.hex}>{title.copy}</Title>
                <Subtitle color={subtitle.color.hex}>{subtitle.copy}</Subtitle>
            </ContentWrapper>
            {
                button ? button.map(button => (
                    button.copy == "CONTACT US" ? 
                    <a href="mailto:gknapp@knappcm.com">
                        <Button 
                            buttonColor={button.backgroundColor.hex} 
                            buttonTextColor={button.color.hex}>
                            {button.copy}
                        </Button>  
                    </a>
                    :
                    <Link to={`/${button.link}`}>
                            <Button 
                            buttonColor={button.backgroundColor.hex} 
                            buttonTextColor={button.color.hex}>
                            {button.copy}
                            </Button> 
                    </Link>
                )) : <></>
            }
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 75vh;
    padding: 100px 0;
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    overflow: hidden;
    @media only screen and (min-width: 1024px) {
        height: 50vh;
    }
    @media only screen and (min-width: 1440px) {
        height: 75vh;
        padding: 200px 0;
    }
    img {
        position: absolute;
        filter: grayscale(100%);
        object-fit: cover;
        object-position: center top;
        z-index: -2;
    }
`
const ContentWrapper = styled.div`
    padding: 0;
`;
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #33332e;
    opacity: .5;
    z-index: -1;
`
const Title = styled.h1`
    text-align: center;
    color: ${props => props.color ? props.color : 'black'};
    text-decoration: underline;
`;
const Subtitle = styled.h1`
    text-align: center;
    min-width: 300px;
    color: ${props => props.color ? props.color : ''};
    @media only screen and (min-width: 768px) {
        width: 501px
    }
`;
const Button = styled.button`
    display: block;
    width: 165px;
    padding: 5px 15px;
    margin: 50px auto;
    margin-bottom: 0;
    border: none;
    border-radius: 0;
    background-color: ${props => props.buttonColor ? props.buttonColor : '#FE3200'};
    color: ${props => props.buttonTextColor ? props.buttonTextColor : '#FFFFFF'}
`


