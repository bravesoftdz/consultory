import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Summary from '../components/Summary'

const trainings = [
    {
        "_id": "0",
        "text": "Asesorías y consultorías en gestión de establecimientos de salud públicos y privados"
    },
    {
        "_id": "1",
        "text": "Asesorías y consultorías en gestión de establecimientos de salud públicos y privados"
    },
]

const Trainings = () => {

    const [presentation, setPresentation] = useState(true)
    useEffect(() => {
        setPresentation(true)
    },[])

    return ( 
        <Fragment>
            <Header />
            <Summary presentation = {presentation} title="capacitaciones" trainings={trainings} />
            <Footer />
        </Fragment>
     );
}
 
export default Trainings;