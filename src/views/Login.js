import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { signin } from '../redux/actions/auth'
import img from '../images/svg/admin.svg'
import '../styles/admin.css'
import Alert from '../components/Alert';

const Login = () => {

    const auth = useSelector((state) => state.auth.isAuthenticated)
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        dispatch(signin(data))
    }

    useEffect(() => {
        const inputs = document.querySelectorAll('.Input');

        function focusFunc() {
            let parent = this.parentNode.parentNode;
            parent.classList.add('Focus');
        }

        function blurFunc() {
            let parent = this.parentNode.parentNode;
            if (this.value == "") {
                parent.classList.remove('Focus')
            }
        }

        inputs.forEach(input => {
            input.addEventListener('focus', focusFunc);
            input.addEventListener('blur', blurFunc)
        })
    }, [])

    // Redirecciona al home si ya esta autenticado
    if (auth) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="Container__Admin">
            <Alert />
            <div className="Modal__Container">
                <div className="Banner__Container">
                    <p>Administrador</p>
                    <div className="Img__Container">
                        <img src={img} alt="imagen" />
                    </div>
                    <div className="Info__Banner">
                        <p>Administra tu página web ahora !</p>
                    </div>
                </div>
                <div className="Form__Container">
                    <div className="Welcome">
                        <h2>Te estabamos esperando</h2>
                    </div>
                    <div className="Info__Form">
                        <p>Ingresa correctamente los datos y accede a nuestro sistema</p>
                    </div>
                    <form  onSubmit={e => submit(e)}>
                        <div className="Input__Div One">
                            <div className="Icon">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Administrador</h5>
                                <input type="text" className="Input" name="email"  onChange={e => handleChange(e)} />
                            </div>
                        </div>
                        <div className="Input__Div Two">
                            <div className="Icon">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>Contraseña</h5>
                                <input type="password" className="Input" name="password"  onChange={e => handleChange(e)} />
                            </div>
                        </div>
                        <input type="submit" className="Btn" value="Iniciar Sesión" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;