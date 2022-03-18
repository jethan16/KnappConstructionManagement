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
                button.copy == "SCHEDULE A CALL" ?
                        <a href="+12396758333">
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
          </Container>
          {
            title.toLowerCase() == 'owner representative services' ? (
              <PhaseWrapper> 
                <h3>We have three stages of operation</h3>
                <Phase>
                  <h4>Planning Phase</h4>
                  <ul>
                    <li>Early project planning</li>
                    <li>Manage Concept design/budget</li>
                    <li>Manage schematic design/budget</li>
                    <li>Master schedule</li>
                    <li>Master budget</li>
                    <li>Project execution plan</li>
                    <li>Manage team selection</li>
                    <li>Manage early contracts</li>
                    <li>Manage RFP process</li>
                    <li>Permit execution plan</li>
                  </ul>
                </Phase>
                <Phase>
                  <h4>Design & Preconstruction Phase</h4>
                  <ul>
                    <li>Manage design process</li>
                    <li>Manage schematic, DD, and CD budgets</li>
                    <li>Master project schedule</li>
                    <li>Prepare all contracts</li>
                    <li>Site management planning/phasing plan</li>
                    <li>Manage GMP process</li>
                    <li>Value engineering</li>
                    <li>Fast track Long lead material procurement</li>
                    <li>Document redi-check</li>
                    <li>Constructability review</li>
                  </ul>
                </Phase>
                <Phase>
                  <h4>Construction Phase</h4>
                  <ul>
                    <li>Coordination between owner, designer, and builder</li>
                    <li>Master budget management</li>
                    <li>Schedule management</li>
                    <li>Change order management</li>
                    <li>Quality compliance reviews</li>
                    <li>FF&E management</li>
                    <li>Manage all owner contracts</li>
                    <li>Claims prevention and management</li>
                    <li>Manage turnover and commissioning</li>
                  </ul>
                </Phase>
              </PhaseWrapper>
            ): <></>
          }
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
    text-align: start;
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
const PhaseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  h3 {
    width: 100%;
    margin: 15px auto;
  }
`
const Phase = styled.div`
  margin: 10px;
  width: 100%;
  * { 
    color: #33332E;
  }
  h4 {
    font-size: 16px;
    color: #fe3200;
    text-align: start;
  }
  ul {
    text-align: center;
  }
  li {
    text-align: start;
    font-size: 12px;
    list-style: disc;
  }
  @media (min-width: 768px) {
    width: 30%;
  }
  @media (min-width: 1280px) {
    width: 25%;
    h4 {
      font-size: 20px;
    }
    li {
      font-size: 16px;
    }
  }
`