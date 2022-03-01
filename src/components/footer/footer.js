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
                        <h6><strong>Mailing Address:</strong></h6>
                        <h6>7935 Airport Pulling Road, Ste 4 - Box 352</h6>
                        <h6>Naples, FL</h6>
                        <h6>34109</h6>
                    </div>
                    <hr />
                    <div>
                        <h6><strong>Phone:</strong></h6>
                        <a href="tel:12396758333"><h6>1-239-675-8333</h6></a>
                    </div>
                    <hr />
                    <div>
                        <h6><strong>Email:</strong></h6>
                        <a href="mailto:gknapp@knappcm.com"><h6>Gknapp@knappcm.com</h6></a>
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
    position: relative;
    padding: 50px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FooterInfo = styled.div`
    color: white;
    margin: 10px 0;
    h6 {
        margin: 0;
    }
    img {
        position: absolute;
        top: 25px; 
        left: 25px;
    }
`
const ContactInfoWrapper = styled.div`
    display: flex;
    margin: 10px;
    div {
        margin: 0 15px;
        padding: 0 10px;
    }
    img {
        width: 32px;
        filter: brightness(0) invert(1);
    }
`