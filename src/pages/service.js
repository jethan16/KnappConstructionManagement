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

  const pageData = data.datoCmsService.servicesPageModularContent;

  return(
    <Layout>
      {
        pageData.map(obj => GetComponent(obj))
      }
    </Layout>
  )
}

export default ServicesPage

export const query = graphql`
query ServicesQuery {
datoCmsService {
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
          link {
            ... on DatoCmsAbout {
              model {
                apiKey
              }
            }
            ... on DatoCmsIndex {
              id
              model {
                apiKey
              }
            }
            ... on DatoCmsService {
              id
              model {
                apiKey
              }
            }
          }
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
          link {
            ... on DatoCmsAbout {
              model {
                apiKey
              }
            }
            ... on DatoCmsIndex {
              id
              model {
                apiKey
              }
            }
            ... on DatoCmsService {
              id
              model {
                apiKey
              }
            }
          }
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
          link {
            ... on DatoCmsAbout {
              model {
                apiKey
              }
            }
            ... on DatoCmsIndex {
              id
              model {
                apiKey
              }
            }
            ... on DatoCmsService {
              id
              model {
                apiKey
              }
            }
          }
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
          link {
            ... on DatoCmsAbout {
              model {
                apiKey
              }
            }
            ... on DatoCmsIndex {
              id
              model {
                apiKey
              }
            }
            ... on DatoCmsService {
              id
              model {
                apiKey
              }
            }
          }
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
          link {
            ... on DatoCmsAbout {
              model {
                apiKey
              }
            }
            ... on DatoCmsIndex {
              id
              model {
                apiKey
              }
            }
            ... on DatoCmsService {
              id
              model {
                apiKey
              }
            }
          }
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

