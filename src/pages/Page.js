import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

// base component for all pages
const Page = ({content}) => {
    return (
        <div>
            <NavBar />
            {content}
            <Footer/>
        </div>
    );
}

export default Page;