import React, { Fragment } from 'react'
import Header from '../components/Header'
import Banners from '../components/Banners'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <Fragment>
            <div className="Page__main">
                <Header />
                <Banners />
                <About />
                <Footer />
            </div>
        </Fragment>
    );
}

export default Home;