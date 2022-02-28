import React, { useEffect, useRef, useState, useCallback, createRef } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import CirclesGraph from '../header/circlesGraph/circlesGraph';

const SplashSideBySide = ({id, model, backgroundOneColor, titleOne, titleOneColor, subtitleOne, subtitleOneColor, bodyCopyOne, buttonOne, backgroundTwoColor, titleTwo, titleTwoColor, subtitleTwo, subtitleTwoColor, bodyTwoCopy, buttonTwo, }) => {

    // console.log(bodyCopyOne)

  return(
    <SplashWrapper data-cms-ref={id} >
      <SideOne backgroundColor={backgroundOneColor.hex}>
            {
            titleOne ? <SplashTitle titleStyle={bodyCopyOne.length > 0 ? 'title' : 'cta'} textColor={titleOneColor ? titleOneColor.hex: ''}>{titleOne}</SplashTitle> : <></>
            }
            {
            subtitleOne ? <SplashSubtitle textColor={subtitleOneColor ? subtitleOneColor.hex : ''}>{subtitleOne}</SplashSubtitle> : <></>
            }
            { 
            <ContentWrapper data-ref='content-wrapper'>
            <Container>
                {
                bodyCopyOne[0] !== undefined ? bodyCopyOne[0].copy.map((item,i) => (
                    <SplashBody key={i} textColor={bodyCopyOne[0].bodyColor.hex}>{item.text}</SplashBody>
                )) : <></>
                }
            </Container>
            </ContentWrapper> 
            }
            {
            buttonOne ? buttonOne.map(button => (
                <Button color={button.buttonTextColor.hex} backgroundColor={button.buttonBackgroundColor.hex}>{button.buttonText.toUpperCase()}</Button>
            )) : <></>
            }
      </SideOne>
      <SideTwo backgroundColor={backgroundTwoColor.hex}>
            {
            titleTwo ? <SplashTitle titleStyle={bodyTwoCopy.length > 0 ? 'title' : 'cta'} textColor={titleTwoColor ? titleTwoColor.hex: ''}>{titleTwo}</SplashTitle> : <></>
            }
            {
            subtitleTwo ? <SplashSubtitle textColor={subtitleTwoColor ? subtitleTwoColor.hex : ''}>{subtitleTwo}</SplashSubtitle> : <></>
            }
            { 
            <ContentWrapper data-ref='content-wrapper'>
            <Container>
                {
                bodyTwoCopy[0] !== undefined ? bodyTwoCopy[0].copy.map((item,i) => (
                    <SplashBody key={i} textColor={bodyTwoCopy[0].bodyColor.hex}>{item.text}</SplashBody>
                )) : <></>
                }
            </Container>
            </ContentWrapper> 
            }
            {
            buttonTwo ? buttonTwo.map(button => (
                <Button color={button.buttonTextColor.hex} backgroundColor={button.buttonBackgroundColor.hex}>{button.buttonText.toUpperCase()}</Button>
            )) : <></>
            }
      </SideTwo>
    </SplashWrapper>
  );
};

export default SplashSideBySide;

const SplashWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`
const SideOne = styled.div`
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : '#FE3200'};
    div {
        max-width: 500px;
    }
    @media (min-width: 768px) {
        width: 50%;
    }
`
const SideTwo = styled.div`
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : '#FE3200'};
    div {
        max-width: 500px;
    }
    @media (min-width: 768px) {
        width: 50%;
    }
`
const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0;
`
const Container = styled.div`
    max-width: ${props => props.containerStyles ? props.containerStyles : '550px'};
    /* text-align: center; */
    margin: 0 auto;
`
const SplashTitle = styled.h2`
    color: ${props => props.textColor ? props.textColor : ''};
    text-decoration: ${props => props.titleStyle === 'title' ? 'underline' : 'none'};
    text-align: center;
    font-weight: 500;
    margin-bottom: ${props => props.titleStyle === 'title' ? '5px' : '0px'};
    padding: ${props => props.titleStyle === 'title' ? '0px' : '25px 0'}
`
const SplashSubtitle = styled.h2`
    color: ${props => props.textColor ? props.textColor : ''}
`
const SplashBody = styled.p`
    text-align: left; 
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '700px'};
    color: ${props => props.textColor ? props.textColor : ''};
    margin: 10px 0;
`
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  h2 {
    width: 100%;
    margin-bottom: 25px;
  }
`
const List = styled.ul`
    display: inline-block;
    margin: 0 auto;
`
const ListItem = styled.li`
    margin: 10px 0;
    font-size: 14px;
    text-align: center;
    color: ${props => props.color ? props.color : '#33332E'};
    @media (min-width: 768px) {
      text-align: start;
      font-size: 16px;
    }
`
const Button = styled.button`
    display: block;
    width: 165px;
    padding: 5px 15px;
    margin: 25px auto;
    border: none;
    border-radius: 0;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#FE3200'};
    color: ${props => props.color ? props.color : '#FFFFFF'}
`
