import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import { getClients } from '../redux/actions/client'
import { Link } from 'react-router-dom';
import Presentation from './Presentation';

const Services = () => {

    const clients = useSelector((state) => state.clients.clients)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getClients());
    }, [])

    const settingsClients = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <Fragment>
            <section className="Services Background__Services">
                <Presentation title="Servicios" />
                <div className="Row__Services">
                    <div className="Service">
                        <Link to="/servicios/consultoría">
                            <img src={require('../images/service1.png')} alt="" />
                            <p>ASESORIA Y CONSULTORIA PARA SERVICIOS DE SALUD</p>
                        </Link>
                    </div>
                    <div className="Service">
                        <Link to="/servicios/asesoría-consultoría-sistemas-de-salud-ocupacional">
                            <img src={require('../images/service2.png')} alt="" />
                            <p>ASESORIA Y CONSULTORIA en sistemas de gestión de salud ocupacional</p>
                        </Link>
                    </div>
                    <div className="Service">
                        <Link to="/servicios/capacitaciones">
                            <img src={require('../images/service3.png')} alt="" />
                            <p>Capacitaciones</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="Benef">
                <h2>Beneficios para tu empresa</h2>
                <div className="Container">
                    <div className="Img__Container">
                        <img src={require('../images/beneficios.png')} alt="" />
                    </div>
                    <div className="Info__Container Benef">
                        <p>
                            Manejar correctamente los sistemas de gestión es de gran importancia para evitar la informalidad, logrando el correcto desarrollo de una empresa y así asegurar el éxito de la misma.<br /> <br /> En la actualidad, debido a los momentos difíciles que se atraviesan en el mundo, es vital hacernos cargo del cuidado de la salud, priorizando los sistemas de seguridad, sobre todo en el ambiente laboral.
                    </p>
                    </div>
                </div>
            </section>

            <section className="Clients">
                <h2>Confian en nosotros</h2>
                <div className="Relative Background" style={{paddingTop: "340px"}}>
                    <Slider {...settingsClients} className="Clients__Slider">
                        {
                            clients.map(client => (

                                <div className="Image__Client" key={client._id}>
                                    <img src={client.image} style={{outline: "none"}}/>
                                </div>

                            ))
                        }
                    </Slider>
                </div>
            </section>
        </Fragment>
    );
}

export default Services;