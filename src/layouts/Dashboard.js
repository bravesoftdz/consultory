import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getBanners } from '../redux/actions/banner'
import { getClients } from '../redux/actions/client'
import stc from 'string-to-color'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const banners = useSelector(state => state.banners.banners)
    const clients = useSelector(state => state.clients.clients)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBanners());
        dispatch(getClients())
    }, [])

    return ( 
        <>
        <div className="BannerDashboard">
            <div className="header-banner">
                <p>Su galería de imagenes para el banner</p>
                <Link to="/dashboard/banners/nuevo">Agregar banner</Link>
            </div>
            <div className="container-gallery_banner">
                {
                    banners && banners.length > 0 ? 
                    banners.map(banner => (
                        <div className="banner-item" key={banner.id}>
                            <img src={banner.image} alt=""/>
                            <p>{banner.title}</p>
                        </div>
                    )) : 
                    <p>Actualmente no tienes ningun banner en tu pagina de inicio, dale click agregar banner para agregar tu primer banner</p>
                }
            </div>
        </div>
        <div className="ClientDashboard" style={{marginTop: "40px"}}>
        <div className="header-client">
            <p>Su galería de imagenes para sus clientes</p>
            <Link to="/dashboard/clientes/nuevo">Agregar cliente</Link>
        </div>
        <div className="container-gallery_client">
            {
                clients && clients.length > 0 ? 
                clients.map(client => (
                    <div className="client-item" key={client.id} style={{background: stc("yellow"), borderRadius: "4px"} }>
                        <img src={client.image} alt="imagen cliente" style={{width: "60%", objectFit: "contain"}}/>
                        <p>{client.title}</p>
                    </div>
                )) : 
                <p>Actualmente no tienes ningun cliente en tu sección de clientes, dale click agregar cliente para agregar un cliente</p>
            }
        </div>
    </div>
    </>
     );
}
 
export default Dashboard;