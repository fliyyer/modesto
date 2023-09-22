import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../layout/Homepage/Header'
import Body from '../layout/Homepage/Body'
import Footer from '../components/Footer'
import Content from '../layout/Homepage/Content'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Body />
            <Content />
            <Footer />
        </div>
    )
}

export default Homepage
