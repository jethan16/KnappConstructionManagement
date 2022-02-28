import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import CirclesGraph from '../header/circlesGraph/circlesGraph';


const SplashWithImage = ({id, model, backgroundColor, title, titleColor, subtitle, subtitleColor, bodyCopy, image, caption, captionColor, captionSubtitle, captionSubtitleColor, list, buttons}) => {

    console.log(list)

    return(
      <SplashWrapper data-cms-ref={id} backgroundColor={backgroundColor.hex}>
          <Container>
            <div style={{marginBottom: '20px'}}>
              <img alt={image.alt} src={image.url} />
              { captionColor !== null ? ( 
                <>
                <h4 style={{color: captionColor.hex, textAlign: 'start', fontWeight: 'bold', margin: 0}}>{caption}</h4>
                <h5 style={{color: captionSubtitleColor.hex, textAlign: 'start', fontWeight: '500', margin: 0}}>{captionSubtitle}</h5>
                </> ) : <></>
              }
            </div>
            <div>
            {
            title ? <SplashTitle textColor={titleColor ? titleColor.hex: ''}>{title}</SplashTitle> : <></>
            }
            {
              subtitle ? <SplashSubtitle textColor={subtitleColor ? subtitleColor.hex : ''}>{subtitle}</SplashSubtitle> : <></>
            }
            {
              bodyCopy.length ? (
                bodyCopy.map(copyArr => (
                  copyArr.copy.map((section, i) => (
                    <SplashBody textColor={copyArr.bodyColor.hex}>{section.text}</SplashBody>
                  ))
                ))
              ) : <></>
            }
            {
            list.length > 0 ? 
              <ListWrapper>
              {
                list.map((item, i) => (
                <>
                  { item.listTitle ? <h4 style={{margin: 0, color: item.titleColor !== null ? item.titleColor.hex : '#33332E'}}>{item.listTitle}</h4> : <></>}
                  <List>
                  {
                    item.listItem.map(list => ( 
                        <ListItem key={i} color={item.textColor.hex}>{list.listItemCopy}</ListItem>
                    ))
                  }  
                  </List> 
                </>
              ))
              }
              </ListWrapper> : <></>
            } 
            {
              buttons ? buttons.map(button => (
                  <Button>{button.buttonText}</Button>
              )) : <></>
            }
            </div>
          </Container>
      </SplashWrapper>
    );
};


export default SplashWithImage;

const SplashWrapper = styled.section`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#ffffff'};
    text-align: center;
    padding: 25px;
    @media (min-width: 768px) {
      &:nth-child(odd) > div {
        flex-direction: row;
      }
      &:nth-child(even) > div {
        flex-direction: row-reverse;
      }
    }
    @media only screen and (min-width: 1024px) {
        padding: 50px 25px;
    }
    @media only screen and (min-width: 1440px) {
        padding: 75px 25px;
    }
`
const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    @media (min-width: 768px) {
      flex-direction: row;
        img { 
            width: 300px; 
        }
        gap: 25px;
    }
    @media (min-width: 1440px) {
        img {
          width: 375px;
        }
        max-width: 900px;
    }
   
`
const SplashTitle = styled.h2`
    color: ${props => props.textColor ? props.textColor : ''};
    text-decoration: underline;
    text-align: start;
    font-weight: 500;
`
const SplashSubtitle = styled.h2`
    color: ${props => props.textColor ? props.textColor : ''}
`
const SplashBody = styled.p`
    color: ${props => props.textColor ? props.textColor : ''};
    margin: 10px 0;
    margin-top: 0;
    text-align: start;
`;
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
    margin-bottom: 0;
    border: none;
    border-radius: 0;
    background-color: ${props => props.buttonColor ? props.buttonColor : '#FE3200'};
    color: ${props => props.buttonTextColor ? props.buttonTextColor : '#FFFFFF'}
`