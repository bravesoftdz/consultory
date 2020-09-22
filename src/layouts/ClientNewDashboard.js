import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, Redirect } from 'react-router-dom'
import { createClient } from '../redux/actions/client'
import { setAlert } from '../redux/actions/alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert'

const ClientNewDashboard = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector((state => state.auth.isAuthenticated))
    console.log(isAuth)
    const history = useHistory();
    const [uploadingImage, setUploadingImage] = useState(false)
    const [submitingPost, setSubmitingPost] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [client, setClient] = useState({
        title: ''
    })

    const handleChange = (e) => {
        setClient({
            ...client,
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

    const clientSubmit = async (e) => {

        e.preventDefault();

        const { title } = client
        if (submitingPost) {
            return
        }

        if (uploadingImage) {
            console.log('La imagen esta cargando')
            return
        }

        if (title === '') {
            dispatch(setAlert('Debes ingresar el titulo de tu cliente', 'danger', 5000))
            return
        }


        if (!imageUrl) {
            dispatch(setAlert('Debes agregar una imagen de tu nuevo cliente', 'danger', 5000))
            return
        }

        let formData = new FormData()

        try {
            setSubmitingPost(true)
            
            formData.append('title',title);
            formData.append('image',imageUrl)

            await dispatch(createClient(formData))
            setSubmitingPost(false)
            history.push('/dashboard/clientes')
        } catch (error) {
            console.log(error)
        }
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <div className="new-client ">
            <div className="header-client">
            <p>Agrega un nuevo cliente</p>
            <Link to="" className="btn-new" onClick={goBack}>Volver</Link>
            </div>
            <Alert />
            <div className="container-new_client">
                <div className="input">
                    <input type="text" onChange={handleChange} placeholder="Nombre del cliente" name="title" id="" />
                </div>
                <div className="input img-product">
                    <ImageUpload uploadingImage={uploadingImage} imageUrl={imageUrl} handleImageSelected={handleImageSelected} />
                </div>
                <div className="btn-save">
                    <button onClick={clientSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
}

export default ClientNewDashboard;

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