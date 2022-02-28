import * as React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/700.css"
import "../styles/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleLeft, faAngleDoubleRight, faCopyright, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

// Components 
import GetComponent from "../utils/getComponent"
import Header from "../components/header/header.js"
import Layout from "../components/layout/layout"
import Splash from "../components/splash/splash"
import Carousel from "../components/carousel/carousel"

// markup
const IndexPage = ({data}) => {

  const pageData = data.datoCmsHomePage.homePageModularContent;
  
  return(
    <Layout>
      {
        pageData.map(obj => GetComponent(obj))
      }
        {/* <Header  title={data.datoCmsHomepageHeader.title} subtitle={data.datoCmsHomepageHeader.subtitle} videoURL={data.datoCmsHomepageHeader.video.url} imageURL={data.datoCmsHomepageHeader.heroImageForMobile.url}/>
        <Splash 
         data-ref='homepage-about-us-splash' 
         title={data.datoCmsHomepageSplashCopy.titleOne} 
         subtitle={data.datoCmsHomepageSplashCopy.subtitleOne} 
         body={[data.datoCmsHomepageSplashCopy.bodyOne]} 
         button={'ABOUT'} linkPath={'/about/'} 
         buttonColor={'#FE3200'} 
         buttonTextColor={'#FFFFFF'} 
         bodyTextColor={'#33332E'} 
         titleColor={'#33332E'}  
         subtitleColor={'#FE3200'} 
         bgColor={'#FFFFFF'}
        />
        <Splash 
         data-ref='homepage-you-need-splash' 
         title={data.datoCmsHomepageSplashCopy.titleTwo} 
         subtitle={data.datoCmsHomepageSplashCopy.subtitleTwo} 
         titleColor={'#33332E'}  
         subtitleColor={'#FFFFFF'} 
         bgColor={'#ff5200'}
         customStyles={{textAlign: 'center'}}
        />
        <FlexWrapper>
          <Splash 
          data-ref='homepage-we-have-splash' 
          title={data.datoCmsHomepageSplashCopy.titleThree} 
          subtitle={data.datoCmsHomepageSplashCopy.subtitleThree} 
          body={[data.datoCmsHomepageSplashCopy.bodyThree, data.datoCmsHomepageSplashCopy.bodyThreeB]}  
          bodyTextColor={'#33332E'} 
          titleColor={'#33332E'}  
          subtitleColor={'#FE3200'} 
          bgColor={'#e6e6e6'}
          containerStyles={'100%'}
          />
          <Splash 
          data-ref='homepage-we-are-not-splash' 
          title={data.datoCmsHomepageSplashCopy.titleFour} 
          subtitle={data.datoCmsHomepageSplashCopy.subtitleFour} 
          body={[data.datoCmsHomepageSplashCopy.bodyFour, data.datoCmsHomepageSplashCopy.bodyFourB, data.datoCmsHomepageSplashCopy.bodyFourC]} 
          bodyTextColor={'#FFFFFF'} 
          titleColor={'#FE3200'}  
          subtitleColor={'#FFFFFF'} 
          bgColor={'#33332E'}
          containerStyles={'100%'}
          />
        </FlexWrapper>
        <Splash 
         data-ref='homepage-you-have-splash' 
         title={data.datoCmsHomepageSplashCopy.titleFive} 
         subtitle={data.datoCmsHomepageSplashCopy.subtitleFive} 
         titleColor={'#33332E'}  
         subtitleColor={'#FFFFFF'} 
         bgColor={'#ff5200'}
         customStyles={{textAlign: 'center'}}
        />
        <Splash 
         data-ref='homepage-we-work-splash' 
         title={data.datoCmsHomepageSplashCopy.titleSix} 
         subtitle={data.datoCmsHomepageSplashCopy.subtitleSix} 
         body={[data.datoCmsHomepageSplashCopy.bodySix, data.datoCmsHomepageSplashCopy.bodySixB]} 
         button={'WE DO'} linkPath={'/about/'} 
         buttonColor={'#FE3200'} 
         buttonTextColor={'#FFFFFF'} 
         bodyTextColor={'#33332E'} 
         titleColor={'#33332E'}  
         subtitleColor={'#FE3200'} 
         bgColor={'#FFFFFF'}
        />
        <CarouselContainer>
          <Splash 
          data-ref='homepage-our-projects-splash' 
          title={data.datoCmsHomepageSplashCopy.titleSeven} 
          subtitle={data.datoCmsHomepageSplashCopy.subtitleSeven} 
          titleColor={'#33332E'}  
          subtitleColor={'##33332E'} 
          bgColor={'#e6e6e6'}
          customStyles={{textAlign: 'center'}}
          />
          <Carousel />
          <Splash 
          data-ref='homepage-our-projects-splash' 
          button={'SEE MORE PROJECTS'} linkPath={'/services/'} 
          buttonColor={'#FE3200'} 
          buttonTextColor={'#FFFFFF'}
          bgColor={'#e6e6e6'}
          />
        </CarouselContainer>
        <Splash 
         data-ref='homepage-we-serve-splash' 
         title={data.datoCmsHomepageSplashCopy.titleEight} 
         subtitle={data.datoCmsHomepageSplashCopy.subtitleEight} 
         titleColor={'#33332E'}  
         subtitleColor={'#33332E'} 
         bgColor={'#FFFFFF'}
        />
        <ImageBannerWrapper>
          <ImageWithCaption>
            <Caption>{data.datoCmsHomepageSplashCopy.sectionEightCaptionOne}</Caption>
            <img src={data.datoCmsHomepageSplashCopy.sectionEightImageOne.url}/>
          </ImageWithCaption>
          <ImageWithCaption>
            <Caption>{data.datoCmsHomepageSplashCopy.sectionEightCaptionTwo}</Caption>
            <img src={data.datoCmsHomepageSplashCopy.sectionEightImageOne.url}/>
          </ImageWithCaption>
          <ImageWithCaption>
            <Caption>{data.datoCmsHomepageSplashCopy.sectionEightCaptionThree}</Caption>
            <img src={data.datoCmsHomepageSplashCopy.sectionEightImageOne.url}/>
          </ImageWithCaption>
        </ImageBannerWrapper>
        <Splash 
         data-ref='homepage-cta-splash' 
         subtitle={data.datoCmsHomepageSplashCopy.titleNine} 
         subtitleColor={'#FFFFFF'} 
         bgColor={'#ff5200'}
         button={'SCHEDULE A CALL'} linkPath={'/about/'} 
         buttonColor={'#FFFFFF'} 
         buttonTextColor={'#33332E'} 
        /> */}
    </Layout>
  )
}

export default IndexPage

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  section {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    section {
      width: 50%
    }
  }
`
const CarouselContainer = styled.div`
`
const ImageBannerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`
const ImageWithCaption = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  img {
    margin: 10px 0;
    width: 290px;
    object-fit: contain;
  }
`
const Caption = styled.p`
  color: #FE3200;
  text-align: center;
  font-weight: 500;
`
export const query = graphql`
query IndexQuery {
  datoCmsHomePage {
    homePageModularContent {
      ... on DatoCmsHero {
        id
        model {
          name
        }
        title
        titleColor {
          hex
        }
        subtitle
        subtitleColor {
          hex
        }
        media {
          url
        }
        button {
          buttonBackgroundColor {
            hex
          }
          buttonText
          buttonTextColor {
            hex
          }
        }
      }
      ... on DatoCmsSplashBasic {
        id
        model {
          name
        }
        backgroundColor {
          hex
        }
        title
        titleColor {
          hex
        }
        subtitle
        subtitleColor {
          hex
        }
        bodyCopy {
          copy {
            text
          }
          bodyColor {
            hex
          }
        }
        list {
          listTitle
          titleColor {
            hex
          }
          listItem {
            listItemCopy
          }
          textColor {
            hex
          }
        }
        imagesArray {
          image {
            alt
            url
            title
          }
          carousel
        }
        buttons {
          buttonText
          buttonBackgroundColor {
            hex
          }
          buttonTextColor {
            hex
          }
        }
      }
      ... on DatoCmsSplashSideBySide {
        id
        model {
          name
        }
        backgroundOneColor {
          hex
        }
        titleOne
        titleOneColor {
          hex
        }
        subtitleOne
        subtitleOneColor {
          hex
        }
        bodyCopyOne {
          copy {
            text
          }
          bodyColor {
            hex
          }
        }
        buttonOne {
          buttonText
          buttonBackgroundColor {
            hex
          }
          buttonTextColor {
            hex
          }
        }
        backgroundTwoColor {
          hex
        }
        titleTwo
        titleTwoColor {
          hex
        }
        subtitleTwo
        subtitleTwoColor {
          hex
        }
        bodyTwoCopy {
          copy {
            text
          }
          bodyColor {
            hex
          }
        }
        buttonTwo {
          buttonText
          buttonBackgroundColor {
            hex
          }
          buttonTextColor {
            hex
          }
        }
      }
      ... on DatoCmsSplashWithImage {
        id
        model {
          name
        }
        backgroundColor {
          hex
        }
        title
        titleColor {
          hex
        }
        subtitle
        subtitleColor {
          hex
        }
        bodyCopy {
          copy {
            text
          }
          bodyColor {
            hex
          }
        }
        image {
          alt
          url
        }
        caption
        captionColor {
          hex
        }
        captionSubtitle
        captionSubtitleColor {
          hex
        }
        model {
          name
        }
        list {
          listTitle
          titleColor {
            hex
          }
          listItem {
            listItemCopy
          }
          textColor {
            hex
          }
        }
        buttons {
          buttonText
          buttonBackgroundColor {
            hex
          }
          buttonTextColor {
            hex
          }
        }
      }
    }
  }
}
`

