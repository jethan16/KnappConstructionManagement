import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import { faSearch, faCaretDown, faArrowAltCircleUp, faStar, faRocket, faXmark} from "@fortawesome/free-solid-svg-icons";

const PhotoGrid = ({images}) => {

  const [ modalImage, setModalImage ] = useState({})
  const [ modalState, setModalState ] = useState(false)

  function handleImageModal(e, i) {
    setModalState(true)
    setModalImage({
      key: i,
      src: e.currentTarget.children[1].src,
      alt: e.currentTarget.children[1].alt, 
      title: e.currentTarget.children[2].innerText,
      imgPosition: e.currentTarget.getBoundingClientRect(),
    })
  }

  console.log(modalState)

  return(
    <GridWrapper>
      {
        images.map((image, i) => (
          <PreviewWrapper key={i} onClick={(e) => handleImageModal(e, i)} active={modalState}>
            <IconWrapper>
              <FontAwesomeIcon icon={faExpand} style={{fontSize: '20px', color: '#FFFFFF', position: 'absolute', top: '10px', left: '10px'}}/>
            </IconWrapper>
            <PreviewImage src={image.url} alt={image.alt}/>
            <PreviewImageTitle class="preview-title">{image.title}</PreviewImageTitle>
          </PreviewWrapper>
        ))
      }
      {  
      <Modal imgPosition={modalImage.imgPosition} id={modalImage.key} active={modalState} title={modalImage.title}>
        {
          <>
          <FontAwesomeIcon icon={faXmark} style={{display: modalState ? 'block' : 'none', fontSize: '25px', color: 'black', position: 'absolute', top: '15px', right: '20px'}} onClick={() => setModalState(false)}/>
          <ModalImage src={modalImage.src} alt={modalImage.alt}/>
          </>
        }
      </Modal>
      }
    </GridWrapper>
  );
};

export default PhotoGrid

const GridWrapper = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  .preview-title {
    position: absolute;
    right: 0px;
    bottom: 25px;
    color: #ffffff;
    background-color: #FE3200;
    font-size: 12px;
    padding: 5px 10px;
  }
  @media (min-width: 768px) {
    div {
      width: 45%;
    }
  }
  @media (min-width: 1024px) {
    div {
      width: 30%;
    }
  }
  @media (min-width: 1440px) {
    div {
      width: 25%;
    }
  }
`
const PreviewWrapper = styled.div`
  position: relative;
`
const PreviewImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
`
const PreviewImageTitle = styled.p`
  position: absolute;
  right: 0px;
  bottom: 25px;
  color: #ffffff;
  background-color: #FE3200;
  font-size: 12px;
  padding: 5px 10px; 
`
const IconWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`
const Modal = styled.section`
  display: none;
  position: fixed;
  top: 20vh;
  transition: .15s all;
  padding: 0px;
  @media(min-width: 768px) {
    height: ${(props) => props.active ? '500px' : '0px'};
    width: ${(props) => props.active ? '600px' : '0px'};
    padding: 50px 0;
    display: inline;
    position: absolute;
    background-color: rgba(236, 236, 236, .75);
    img {
      object-fit: cover;
      object-position: center;
    }
    &:after {
      position: absolute;
      right: 0px;
      bottom: 75px;
      color: #ffffff;
      background-color: #FE3200;
      font-size: 12px;
      padding: ${(props) => props.active ? '5px 10px' : '0px'}; 
      }
  }
  @media(min-width: 1024px) {
    height: ${(props) => props.active ? '600px' : '0px'};
    width: ${(props) => props.active ? '700px' : '0px'};
    top: 15vh;
  }
`
const CloseModalButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`
const ModalImage = styled.img`
  width: 100%;
  height: 100%;
`
const ModalImageTitle = styled.div`
  position: absolute;
  right: 0px;
  bottom: 25px;
  color: #ffffff;
  background-color: #FE3200;
  font-size: 12px;
  padding: ${(props) => props.active ? '5px 10px' : '0px'}; 
`