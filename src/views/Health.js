import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Summary from '../components/Summary';
import { withRouter } from 'react-router-dom'

const company = [
    {
        "_id": "0",
        "title": "Reglamento interno de trabajo",
        "text": "Normas para la empresa en donde se determinan las condiciones que deben sujetarse todos los trabajadores sean estos empleados u obreros."
    },
    {
        "_id": "1",
        "title": "Manual de procedimientos",
        "text": "Documento de gestión que describe en forma pormenorizada y secuencial las operaciones que se sigue en la ejecución de los procedimientos."
    },
    {
        "_id": "2",
        "title": "Manual de organización de funciones",
        "text": "Documento técnico normativo de gestión institucional donde se describe y establece la funciones del trabajador."
    },
]

const health = [
    {
        "_id": "0",
        "title": "Política en seguridad y salud en el trabajo",
        "text": "Busca eliminar peligros, proteger la seguridad y salud de todos los trabajadores y cumplir con la normatividad nacional."
    },
    {
        "_id": "1",
        "title": "Reglamento interno de seguridad y salud en el trabajo",
        "text": "Documento que da coherencia y ordena todo el sistema de seguridad y salud en el trabajo de la empresa."
    },
    {
        "_id": "2",
        "title": "Investigación de peligros, evaluación de riesgos y controles",
        "text": "Herramienta de gestión, de obligatorio cumplimiento y auditable."
    },
    {
        "_id": "3",
        "title": "Mapa de evacuación",
        "text": "Representación gráfica de un servicio o área del hospital, en el cual se han definido salidas, puntos de encuentro y rutas."
    },
]


const Health = ({ match }) => {

    const [presentation, setPresentation] = useState(true)
    useEffect(() => {
        setPresentation(true)
    },[])

    let path = match.url
    console.log(presentation)
    return (
        <Fragment>
            <Header />
            <Summary subTitle="gestión de empresa" presentation={presentation} company={company} cssFz="Fz__Presentation" title="asesoría y consultoría en sistemas de gestion de salud ocupacional" />
            <Summary health={health} subTitle="gestión de seguridad y salud en el trabajo" />
            <Footer />
        </Fragment>
    );
}

export default withRouter(Health);