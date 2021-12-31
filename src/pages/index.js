import * as React from "react"
import {graphql} from 'gatsby'
import styled from 'styled-components'
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/700.css"
import "../styles/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleLeft, faAngleDoubleRight, faCopyright, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

// Components 
import Button from "../components/button/button.js"
import Header from "../components/header/header.js"
import Layout from "../components/layout/layout"


// markup
const IndexPage = ({data}) => {

  return(
    <Layout>
        <Header  title={data.datoCmsHomepageHeader.title} subtitle={data.datoCmsHomepageHeader.subtitle} videoURL={data.datoCmsHomepageHeader.video.url} imageURL={data.datoCmsHomepageHeader.heroImageForMobile.url}/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MainQuery {
    datoCmsHomepageHeader {
    subtitle
    title 
    video {
      url
    }
    heroImageForMobile {
      url
    }
  }
}`