import React from 'react';

import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'

const Layout = ({children}) => {
    return(
        <div>
            <meta charSet="utf-8" />
            <title>Knapp Construction Management</title>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;