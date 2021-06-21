import * as React from "react"
import {graphql} from 'gatsby'
import styled from 'styled-components'
import "@fontsource/poppins"

const Button = styled.a`
  display: inline-block;
  text-align: center;
  border-radius: 2px;
  padding: 0.5rem 0;
  width: 11rem;
  background: #FC4C02;
  color: white;
  border: none;
  max-height: 45px;
`

const ButtonComp = () => {
    return(
      <a>
        <Button mailto='ethan.nel.jones@gmail.com'>
          Contact Us
        </Button>
      </a>
    )
}

export default ButtonComp;