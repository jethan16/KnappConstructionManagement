import React, {useEffect, useState} from 'react';

import Header from '../components/header/header';
import Splash from '../components/splash/splash'
import SplashWithImage from "../components/splash/splash-with-image"
import SplashSideBySide from '../components/splash/splash-side-by-side';

const GetComponent = (pageData) => {
      const compName = pageData.model.name

      function getList(listObj) {

        let listData;

        listObj[0] !== undefined ? [ ...listData ] = listObj[0].listItem.map(list => ({copy: list.listItemCopy, color: listObj[0].textColor.hex})) 
        : listData = [{copy: '', color: ''}];

        return listData;
      }
      switch(compName) {
      case 'Hero':
      return <Header 
              title={{
                    copy: pageData.title,
                    color: pageData.titleColor
              }}
              subtitle={{
                    copy: pageData.subtitle,
                    color: pageData.subtitleColor
              }}
              media={
                  pageData['media'] ? (
                  // Checks if property exists and if the property has a value
                          {
                                url: pageData.media.url,
                                alt: pageData.media.alt
                          }
                  ) : false
              }
              button={pageData.button.map(buttonData => (
                  { 
                      copy: buttonData.buttonText,
                      color: buttonData.buttonTextColor,
                      backgroundColor: buttonData.buttonBackgroundColor,
                      link: 'test'
                  }
              ))}
              />;
      case 'Splash - Basic':
      return <Splash 
              {...pageData}
             />
      case 'Splash - With Image':
      return <SplashWithImage 
              {...pageData}
             />
      case 'Splash - Side by Side':
      return <SplashSideBySide
              {...pageData}
             />

  };
}

// image={
//   pageData['image'] ? (
//   // Checks if property exists and if the property has a value
//           {
//                 url: pageData.image.url,
//                 alt: pageData.image.alt
//           }
//   ) : false
// }

// id={pageData.id}
//               backgroundColor={pageData.backgroundColor}
//               title={{
//                   copy: pageData.title,
//                   color: pageData.titleColor
//               }}
//               subtitle={{
//                 copy: pageData.subtitle,
//                 color: pageData.subtitleColor
//               }}

export default GetComponent;
