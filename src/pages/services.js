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
const ServicesPage = ({data}) => {

  const pageData = data.datoCmsServicesPage.servicesPageModularContent;
//   console.log(pageData)
  return(
    <Layout>
      {
        pageData.map(obj => GetComponent(obj))
      }
    </Layout>
  )
}

export default ServicesPage

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
query ServicesQuery {
datoCmsServicesPage {
    servicesPageModularContent {
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

