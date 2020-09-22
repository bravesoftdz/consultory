import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, Redirect } from 'react-router-dom'
import { editClient } from '../redux/actions/client'
import { setAlert } from '../redux/actions/alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert'

const ClientEditDashboard = ({ match }) => {

    const id = match.params.id

    const dispatch = useDispatch();
    const isAuth = useSelector((state => state.auth.isAuthenticated))
    console.log(isAuth)
    const history = useHistory();
    const [loadingClient, setLoadingClient] = useState(true)
    const [uploadingImage, setUploadingImage] = useState(false)
    const [submitingPost, setSubmitingPost] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [client, setClient] = useState({
        title: '',
        image: ''
    })

    useEffect(() => {
        const loadBanner = async () => {
            try {
                let token = localStorage.getItem('token')

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                }
                const { data } = await axios.get(`/api/clients/${id}`, config);
                console.log(data)
                setClient({
                    title: data.title,
                    image: data.image
                })
                setLoadingClient(false)
            } catch (error) {
                console.log(error)
            }
        }
        loadBanner()
    }, [])

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

    const updateClient= async (e) => {

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
            dispatch(setAlert('Debes ingresar el titulo de tu banner', 'danger', 5000))
            return
        }

        try {
            setSubmitingPost(true)
            const body = {
                title,
                image: imageUrl ? imageUrl : client.image
            }

            console.log(body)
            await dispatch(editClient(id, body))
            setSubmitingPost(false)
            history.push('/dashboard/clientes')
        } catch (error) {
            console.log(error)
        }
    }

    const goBack = () => {
        history.goBack();
    }

    const { title, image } = client

    return (
        <div className="new-client ">
            <div className="header-client">
                <p>Puedes editar tu banner</p>
                <Link to="" className="btn-new" onClick={goBack}>Volver</Link>
            </div>
            <Alert />
            <div className="container-new_client">
                <div className="input">
                    <input type="text" defaultValue={title} onChange={handleChange} placeholder="Nombre del Cliente" name="title" id="" />
                </div>
                <div className="input img-product">
                    <ImageUpload uploadingImage={uploadingImage} image={image} imageUrl={imageUrl} handleImageSelected={handleImageSelected} />
                </div>
                <div className="btn-save">
                    <button onClick={updateClient}>Guardar</button>
                </div>
            </div>
        </div>
    );
}

export default ClientEditDashboard;

const ImageUpload = ({ uploadingImage, imageUrl, handleImageSelected, image }) => {
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
                {
                    image ?

                            <>
                            <label>Elije una nueva imagen</label>
                            <div className="thumbail">
                                <img src={image} />
                                <input type="file" onChange={handleImageSelected} className="hidden" name="image" />
                            </div>
                            </> :
                            <>
                            <label>Elije una nueva imagen</label>
                            <div className="thumbail">
                                <img src={require('../images/upload.jpg')} />
                                <input type="file" onChange={handleImageSelected} className="hidden" name="image" />
                            </div>
                            </>

                }
            </>
        )
    }
}