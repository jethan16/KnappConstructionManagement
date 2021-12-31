import React from 'react';
import styled from 'styled-components';
import "./header.css"

const Header = ({title, subtitle, videoURL, imageURL}) => {
    return(
        <HeaderWrapper>
            <Overlay />
            <img className='hero-image' src={imageURL} />
            <Video playsinline autoplay muted loop poster="polina.jpg" id="bgvid">
                <source src={videoURL} type="video/mov" />
            </Video>
            <ContentWrapper>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </ContentWrapper>
            <Button>contact us</Button>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.div`
    position: relative;
    width: 100vw;
    padding: 100px 0;
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
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
    width: 100%;
    z-index: -1
`
const Video = styled.video`
    display: none;
`
const Title = styled.h1`
    text-align: center;
    color: #FE3200;
    text-decoration: underline;
`;
const Subtitle = styled.h1`
    text-align: center;
    min-width: 300px;
    color: #FFFFFF;
    @media only screen and (min-width: 768px) {
        width: 501px
    }
`;
const Button = styled.button`
    display: block;
    width: 125px;
    padding: 5px 15px;
    margin: 50px auto;
    margin-bottom: 0;
    border: none;
    border-radius: 0;
    background-color: #FE3200;
    color: #FFFFFF;
`;


