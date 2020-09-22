import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, Redirect } from 'react-router-dom'
import { createBanner } from '../redux/actions/banner'
import { setAlert } from '../redux/actions/alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert'

const BannerNewDashboard = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [uploadingImage, setUploadingImage] = useState(false)
    const [submitingPost, setSubmitingPost] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [banner, setBanner] = useState({
        title: ''
    })

    const handleChange = (e) => {
        setBanner({
            ...banner,
            [e.target.name]: e.target.value
        })
    }

    const handleImageSelected = async (e) => {

        let token = localStorage.getItem('token')

        try {
            let formData = new FormData()
            setUploadingImage(true)
            const file = e.target.files[0];
        
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token
                }
            }

            formData.append('image',file)
            
            const { data } = await axios.post('/upload', formData, config)
            console.log(data)
            setUploadingImage(false)
            setImageUrl(data)
        } catch (error) {
            setUploadingImage(false)
            console.log(error)
        }
    }

    console.log(imageUrl)

    const bannerSubmit = async (e) => {

        e.preventDefault();
        console.log('hola')

        const { title } = banner
        if (submitingPost) {
            return
        }

        if (uploadingImage) {
            console.log('La imagen esta cargando')
            return
        }

        if (title === '') {
            dispatch(setAlert('Debes ingresar el titulo de tu banner', 'danger', 5000))
            return
        }


        if (!imageUrl) {
            dispatch(setAlert('Debes agregar una imagen para tu banner', 'danger', 5000))
            return
        }

        let formData = new FormData()

        try {
            setSubmitingPost(true)
            
            formData.append('title',title);
            formData.append('image',imageUrl)

            await dispatch(createBanner(formData))
            setSubmitingPost(false)
            history.push('/dashboard/banners')
        } catch (error) {
            console.log(error)
        }
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <div className="new-banner ">
            <div className="header-banner">
            <p>Agrega un nuevo banner</p>
            <Link to="" className="btn-new" onClick={goBack}>Volver</Link>
            </div>
            <Alert />
            <div className="container-new_banner">
                <div className="input">
                    <input type="text" onChange={handleChange} placeholder="Titulo del banner" name="title" id="" />
                </div>
                <div className="input img-product">
                    <ImageUpload uploadingImage={uploadingImage} imageUrl={imageUrl} handleImageSelected={handleImageSelected} />
                </div>
                <div className="btn-save">
                    <button onClick={bannerSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
}

export default BannerNewDashboard;

const ImageUpload = ({ uploadingImage, imageUrl, handleImageSelected }) => {
    if (uploadingImage) {
        return (
            <>
                <p>Cargando</p>
                <div className="thumbail">
                    <img src={require('../images/loading.gif')} />
                </div>
            </>
        )
    } else if (imageUrl) {
        return (
            <>
                <label>Cambia de imagen</label>
                <div className="thumbail">
                    <img src={imageUrl} />
                    <input type="file" onChange={handleImageSelected} className="hidden" name="image" />
                </div>
            </>
        )
    } else {
        return (
            <>
                <label>Elije una imagen</label>
                <div className="thumbail">
                    <img src={require('../images/upload.jpg')} />
                    <input type="file" onChange={handleImageSelected} className="hidden" name="image" />
                </div>
            </>
        )
    }
}