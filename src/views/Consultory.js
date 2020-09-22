import React, { Fragment, useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Summary from '../components/Summary';

const consultory = [
    {
        "_id": "0",
        "text": "Asesorías y consultorías en gestión de establecimientos de salud públicos y privados"
    },
    {
        "_id": "1",
        "text": "Asesorías y consultorías en gestión de establecimientos de salud públicos y privados"
    },
]

const Consultory = () => {

    const [presentation, setPresentation] = useState(true)
    useEffect(() => {
        setPresentation(true)
    },[])

    return (
        <Fragment>
            <Header />
            <Summary consultory={consultory} presentation={presentation} title="consultoría" />
            <Footer />
        </Fragment>
    );
}

export default Consultory;