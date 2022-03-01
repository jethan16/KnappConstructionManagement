import React from 'react';
import styled from 'styled-components';
import "./footer.css"

import linkedinIcon from "../../../Assets/linkedin.png"

const Footer = () => {
    return(
        <FooterWrapper className="footer">
            <FooterInfo>
                <img width="32px" src="https://www.datocms-assets.com/48980/1646140723-kcm_icon-o.png" />
                <ContactInfoWrapper>
                    <div>
                        <h5><strong>Mailing Address:</strong></h5>
                        <h5>7935 Airport Pulling Road, Ste 4 - Box 352</h5>
                        <h5>Naples, FL</h5>
                        <h5>34109</h5>
                    </div>
                </ContactInfoWrapper>
                <ContactInfoWrapper>

                    <div>
                        <h5><strong>Phone:</strong></h5>
                        <a href="tel:12396758333"><h5>1-239-675-8333</h5></a>
                    </div>
                </ContactInfoWrapper>
                <ContactInfoWrapper>
                    <div>
                        <h5><strong>Email:</strong></h5>
                        <a href="mailto:gknapp@knappcm.com"><h5>Gknapp@knappcm.com</h5></a>
                    </div>
                </ContactInfoWrapper>
            </FooterInfo>
            <ContactInfoWrapper>
                <a target="_blank" href="https://www.linkedin.com/in/gordon-knapp-85a0095b/"><img src={linkedinIcon}/></a>
            </ContactInfoWrapper>
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.div`
    max-width: 100vw;
    margin: 0;
    position: relative;
    padding: 100px 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
`
const FooterInfo = styled.div`
    color: white;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    h5 {
        margin: 0;
    }
    img {
        position: absolute;
        top: 25px; 
        left: 25px;
    }
    @media (min-width: 768px) {
        flex-direction: row;
    }
`
const ContactInfoWrapper = styled.div`
    display: flex;
    margin: 10px 0;
    img {
        width: 32px;
        filter: brightness(0) invert(1);
        position: absolute;
        top: 25px;
        right: 25px;
    }
    @media (min-width: 768px) {
        div {
            margin: 0 15px;
            padding: 0 10px;
        }
    }
`