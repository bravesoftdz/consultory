import React, { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setAlert } from '../redux/actions/alert'
import { useForm } from 'react-hook-form'
import Alert from './Alert';

const ContactForm = () => {

    const dispatch = useDispatch()

    const { register, handleSubmit, errors } = useForm()

    const [sendGmail, setSendGmail] = useState({
        user: '',
        phone: '',
        email: '',
        message: ''
    })

    const sendMessage = async (body, e) => {
        e.preventDefault();

        console.log(body)

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            const { data } = await axios.post('/api/gmail', body, config)
            e.target.reset();
            if (data === "Success") {
                dispatch(setAlert('Se ha enviado el mensaje, gracias por contactarnos !', 'success', 5000))
                return
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="Container" style={{ alignItems: "center", marginBottom: "120px" }}>
                <div className="Img__Form" style={{ position: "relative" }}>
                    <img src={require('../images/contact.png')} alt="" />
                </div>
                <div className="Form">
                    <div className="Container__Contact">
                        <h2>Contáctanos</h2>
                        <form onSubmit={handleSubmit(sendMessage)}>
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder="Nombre Completo"
                                    name="user"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese sus nombres completos'
                                            }
                                        })
                                    }
                                />
                            </div>
                            <span className="text-danger text-small d-block mb-2">
                                {errors.user && errors.user.message}
                            </span>
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder="Teléfono"
                                    name="phone"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese su teléfono'
                                            }
                                        })
                                    }
                                />
                            </div>
                            <span className="text-danger text-small d-block mb-2">
                                {errors.phone && errors.phone.message}
                            </span>
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder="Correo"
                                    name="email"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese su correo'
                                            }
                                        })
                                    }
                                />
                            </div>
                            <span className="text-danger text-small d-block mb-2">
                                {errors.email && errors.email.message}
                            </span>
                            <div className="input">
                                <textarea
                                    type="text"
                                    placeholder="Consulta"
                                    name="message"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese su mensaje'
                                            }
                                        })
                                    }
                                />
                            </div>
                            <span className="text-danger text-small d-block mb-2">
                                {errors.message && errors.message.message}
                            </span>
                            <div className="" style={{position: "relative"}}>
                             <Alert />
                            </div>
                            <div className="btn-sendGmail">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;