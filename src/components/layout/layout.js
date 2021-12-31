import React from 'react';

import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'

const Layout = ({children}) => {
    return(
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;