import React from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar';

const Layout = (props) => {
    return (
        <>
            <NavBar />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout