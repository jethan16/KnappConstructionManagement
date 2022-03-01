import React, {useState} from 'react';
import Layout from '../components/layout/layout';
import styled from 'styled-components'
import {graphql} from 'gatsby';
import GetComponent from '../utils/getComponent';

import Header from '../components/header/header';
import Splash from '../components/splash/splash'

const About = ({data}) => {

    const pageData = data.datoCmsAbout.aboutPageModularContent;
    // const splashText = data.datoCmsAboutPageSplashCopy
    // const projects = data.allDatoCmsProjectExperience.nodes
    return(
        <Layout>
            {
              pageData.map(obj => GetComponent(obj))
            }
        </Layout>
    );
};

export default About;

const CirclesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 50px
`
const CirclesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FE3200;
    margin-bottom: 20px;
    h4 {
        margin: 0;
    }
`
const Circle = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background:  linear-gradient(#FE3200 50%, #FF623C 95%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    margin: 0px 50px;
    margin-bottom: 10px;
    h1{
        margin: 0;
    }
`
const FlexWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: solid 3px black;
    margin: 20px;
    h5 {
        margin: 0;
        margin-top: 10px;
    }
    ul:first-child{
        margin-top: 0;
    }
    ::last-child {
        margin-bottom: 0;
    }
`

export const query = graphql`
query AboutQuery {
  datoCmsAbout {
    aboutPageModularContent {
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