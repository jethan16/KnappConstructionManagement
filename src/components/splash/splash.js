import React, { useEffect, useRef, useState, useCallback, createRef } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import CirclesGraph from '../header/circlesGraph/circlesGraph';

// Imported components
import Carousel from '../carousel/carousel'
import PhotoGrid from '../photo-grid/photo-grid';

const Splash = ({id, model, backgroundColor, title, titleColor, subtitle, subtitleColor, list, bodyCopy, imagesArray, buttons}) => {

  const [ imagesArrayState, setImagesArrayState ] = useState({}) 

  useEffect(() => {
    if (imagesArray[0] !== undefined && imagesArray[0].carousel === false) {
      setImagesArrayState({
        type: 'standard',
        content: imagesArray[0].image
      })
    } else if (imagesArray[0] !== undefined && imagesArray[0].carousel === true) {
      setImagesArrayState({
        type: 'carousel',
        content: imagesArray[0].image
      })
    }
  }, [])

  const [ elRefs, setElRefs ] = useState([]);
  const [ maxWidth, setMaxWidth ] = useState();

  let arrLength = bodyCopy[0] !== undefined ? bodyCopy[0].copy.length : '';

  useEffect(() => {
    setElRefs((ref) => {
      return Array(arrLength)
      .fill()
      .map((_, i) => ref[i] || createRef())
    })
  }, [])

  useEffect(() => {
    elRefs.forEach(ref => {
      if (ref.current !== null) {
        elRefs.filter(storedRef => {
          storedRef > ref ? setMaxWidth(storedRef.current.offsetWidth) : setMaxWidth(ref.current.offsetWidth)
        })
      }
    })
  }, [elRefs])

  return(
    <SplashWrapper data-cms-ref={id} backgroundColor={backgroundColor.hex}>
      <div>
        {
          title ? <SplashTitle titleStyle={bodyCopy.length > 0 ? 'title' : 'cta'} textColor={titleColor ? titleColor.hex: ''}>{title.toUpperCase()}</SplashTitle> : <></>
        }
        {
          subtitle ? <SplashSubtitle textColor={subtitleColor ? subtitleColor.hex : ''}>{subtitle}</SplashSubtitle> : <></>
        }
        { 
        bodyCopy[0] !== undefined  || list.length > 0 ? 
        (<ContentWrapper data-ref='content-wrapper'>
          <Container>
            {
              bodyCopy[0] !== undefined ? bodyCopy[0].copy.map((item,i) => (
                <SplashBody key={i} maxWidth={maxWidth} textColor={bodyCopy[0].bodyColor.hex}>{item.text}</SplashBody>
              )) : <></>
            }
            <ListWrapper>
            {
              list ? list.map((item, i) => (
                <>
                  { item.listTitle ? <h2>{item.listTitle}</h2> : <></>}
                  <List>
                  {
                    item.listItem.map(list => (
                        <ListItem key={i}>{list.listItemCopy}</ListItem>
                    ))
                  }  
                  </List> 
                </>
              )) : <></>
            }
            </ListWrapper>
          </Container>
        </ContentWrapper> ) : <></>
        }
        {
          title === 'WE HAVE' ? (
            <CirclesGraph />
          ) : <></>
        }
        {
          imagesArrayState.type === 'standard' ?
          (
            <ImagesArrayWrapper>
              {
                imagesArray[0] !== undefined ? (
                  imagesArray[0].image.map(image => (
                    <div>
                      <p>{image.title}</p>
                      <img alt={image.alt} src={image.url}/>
                    </div>
                  ))
                ) : <></>
              }
            </ImagesArrayWrapper>
          ) : imagesArrayState.type === 'carousel' ? 
          (
            <PhotoGrid images={imagesArrayState.content}/>
          ) : <></>
        }
        {
          buttons ? buttons.map(button => (
            button.buttonText.toUpperCase() === "SCHEDULE A CALL" ?
              <a href="tel:+12396758333">
                <Button 
                  color={button.buttonTextColor.hex} 
                  backgroundColor={button.buttonBackgroundColor.hex}>
                  {button.buttonText.toUpperCase()}
                </Button>
              </a> :
              <Link to={`/${button.link.model.apiKey}`}>
                <Button 
                  color={button.buttonTextColor.hex} 
                  backgroundColor={button.buttonBackgroundColor.hex}>
                  {button.buttonText.toUpperCase()}
                </Button>
              </Link>
          )) : <></>
        }
      </div>
    </SplashWrapper>
  );
};

export default Splash;

const SplashWrapper = styled.section`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#ffffff'};
  text-align: center;
  padding: 20px;
  @media only screen and (min-width: 768px) {
      padding: ${props => props.customStyles ? props.customStyles : ''};
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
    /* display: inline-block; */
    text-align: left; 
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '700px'};
    color: ${props => props.textColor ? props.textColor : ''};
    margin: 10px 0;
    @media (min-width: 768px) {
      /* font-size: 18px; */
    }
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
const ImagesArrayWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
  div {
    display: inline-block;
    width: 100%;
    p {
      color: #FE3200;
      margin-bottom: 5px;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (min-width: 768px) {
      width: 30%;
      img {
        height: 200px;
      }
    }
    @media (min-width: 1024px) {
      img {
        height: 200px;
      }
    }
    @media (min-width: 1440px) {
      img {
        height: 300px;
      }
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    padding: 0 50px;
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
