// import * as React from "react"
// import {graphql} from 'gatsby'
// import styled from 'styled-components'
// import "@fontsource/poppins/400.css"
// import "@fontsource/poppins/500.css"
// import "@fontsource/poppins/700.css"
// import "../styles/styles.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faAngleDoubleLeft, faAngleDoubleRight, faCopyright, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

// // Components 
// import Button from "../components/button/button.js"


// // markup
// const IndexPage = ({data}) => {

//   const services = [
//     {
//       title: data.datoCmsService.serviceOneTitle,
//       subtitle: data.datoCmsService.serviceOneSubtitle,
//       accentText: data.datoCmsService.serviceOneAccentText,
//       body: data.datoCmsService.serviceOneBody
//     },
//     {
//       title: data.datoCmsService.serviceTwoTitle,
//       subtitle: data.datoCmsService.serviceTwoSubtitle,
//       accentText: data.datoCmsService.serviceTwoAccentText,
//       body: data.datoCmsService.serviceTwoBody
//     },
//     {
//       title: data.datoCmsService.serviceThreeTitle,
//       subtitle: data.datoCmsService.serviceThreeSubtitle,
//       accentText: data.datoCmsService.serviceThreeAccentText,
//       body: data.datoCmsService.serviceThreeBody
//     }
    
//   ]

//   return (
//     <main>
//       <div className='row hero'>
//         <div className='overlay'></div>
//         <div className='row'>
//           <img src='https://www.datocms-assets.com/48980/1622657583-kcmlogo-o.png' height='90' className='logo'/>
//         </div>
//         <div className='row flex _inner'>
//           <div className='col-7 title'>
//             <h1>{data.datoCmsTitle.title}</h1>
//             <h2 className='m-TB-25'>{data.datoCmsTitle.subtitle}</h2>
//             <Button />
//           </div>
//           <div className='col-5 image-container'>
//             <img src={data.datoCmsTitle.heroForegroundImage.url} alt={data.datoCmsTitle.heroForegroundImage.alt} className='hero-image'/>
//           </div>
//         </div>
//       </div>
//       <section>
//         <div className='row flex flex-center'>
//           {services.map(service => (
//             <div className='col-4 service'>
//               <h3>{service.title}</h3>
//               {/* <div className='flex flex-row align-center flex-center'>
//                 <FontAwesomeIcon icon={faAngleDoubleRight}/>
//                 <h4>{service.subtitle}</h4>
//                 <FontAwesomeIcon icon={faAngleDoubleLeft}/>
//               </div> */}
//               <p><span>{service.accentText}</span>{service.body}</p>
//             </div>
//           ))}
//         </div>
//         <footer className='flex'>
//         <div className='flex flex-row flex-center'>
//         <div className='flex flex-row align-center'>
//           <FontAwesomeIcon icon={faCopyright}/>
//           <h5 className='mL-15'>2021 Knapp Construction Management</h5>
//         </div>
//           <div className='flex flex-row space-evenly align-center social-bar '>
//             <a href='mailto:Gknapp@knappcm.com'>
//               <FontAwesomeIcon icon={faEnvelope} />
//             </a>
//             <a href='tel:+239-675-8333'>
//               <FontAwesomeIcon icon={faPhone} />
//             </a>
//             <a href='https://www.linkedin.com/in/gordon-knapp-85a0095b/' target='_blank'>
//               <FontAwesomeIcon icon={faLinkedin} />
//             </a>
//           </div>
//         </div>
//         </footer>
//       </section>
//     </main>
//   )
// }

// export default IndexPage

// export const query = graphql`
//   query MainQuery {
//     datoCmsTitle {
//       subtitle
//       title
//       heroBackground {
//         url
//       }
//       heroForegroundImage {
//         alt
//         url
//       }
//     }
//     datoCmsService {
//       serviceOneTitle
//       serviceOneSubtitle
//       serviceOneAccentText
//       serviceOneBody
//       serviceTwoTitle
//       serviceTwoSubtitle
//       serviceTwoAccentText
//       serviceTwoBody
//       serviceThreeTitle
//       serviceThreeSubtitle
//       serviceThreeAccentText
//       serviceThreeBody
//     }
//   }
// `
