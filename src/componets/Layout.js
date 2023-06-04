import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './styles/Layout.css';

function Layout({ children }) {
    return (
        <>
            <Header className='lay' />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default Layout
