import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBanners } from '../redux/actions/banner'
import Slider from "react-slick";

const Banners = () => {

    const banners = useSelector((state) => state.banners.banners)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBanners());
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <Slider {...settings}>
            {/* {
                banners.map(banner => (
                    <div style={{ width: "100%", height: 'auto' }} key={banner._id}>
                        <div className="Banner" >
                            <img src={banner.image} />
                            <p>{banner.title}</p>
                        </div>
                    </div>
                ))
            } */}
            <div style={{ width: "100%", height: 'auto' }}>
                <div className="Banner" >
                    <img src={require('../images/banner1.png')} />
                    <p>Mejoramos y fortalecemos tus sistemas de gestión
                    </p>
                </div>
            </div><div style={{ width: "100%", height: 'auto' }}>
                <div className="Banner" >
                    <img src={require('../images/banner2.png')} />
                    <p>Prevenimos riesgos y accidentes en tu empresa
                    </p>
                </div>
            </div><div style={{ width: "100%", height: 'auto' }}>
                <div className="Banner" >
                    <img src={require('../images/banner3.png')} />
                    <p>Creamos ambientes seguros y exitosos
                    </p>
                </div>
            </div>
        </Slider>
    );
}

export default Banners;