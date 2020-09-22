import React, { Fragment, useEffect, useState } from 'react'
import ContactForm from '../components/ContactForm';
import Header from '../components/Header'
import Summary from '../components/Summary';
import Footer from '../components/Footer'

const Contact = () => {

    const [presentation, setPresentation] = useState(true)
    useEffect(() => {
        setPresentation(true)
    },[])


    return ( 
        <Fragment>
            <Header />
            <Summary presentation={presentation} title="contacto" cssContact="Contact" />
            <ContactForm />
            <Footer />
        </Fragment>
     );
}
 
export default Contact;