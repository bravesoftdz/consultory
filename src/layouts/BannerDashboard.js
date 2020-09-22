import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBanners, deleteBanner } from '../redux/actions/banner'
import '../styles/banners.css'

const BannerDashboard = () => {

    const banners = useSelector((state) => state.banners.banners)
    const dispatch = useDispatch()

    const [deletingBanner, setDeletingBanner] = useState(false)

    useEffect(() => {
        dispatch(getBanners());
    }, [])

    console.log(banners)

    const deleteBanners = async (id) => {

        if (deletingBanner) {
            return
        }

        console.log(id)

        try {
            setDeletingBanner(true)
            let result = window.confirm("Estas seguro de eliminar este banner?, recuerda que tambien se borrará de tu pagina de inicio")
            if(result == true) {
                await dispatch(deleteBanner(id))
                window.location.replace('/dashboard/banners')
            }
            setDeletingBanner(false)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
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
                            <button className="delete-banner" onClick={()=>deleteBanners(banner.id)}><i className="fas fa-trash"></i></button>
                            <Link to={`/dashboard/banners/editar/${banner.id}`} className="edit-banner"><i className="fas fa-pen"></i></Link>
                        </div>
                    )) : 
                    <p>Actualmente no tienes ningun banner en tu pagina de inicio, dale click agregar banner para agregar tu primer banner</p>
                }
            </div>
        </div>
     );
}
 
export default BannerDashboard;