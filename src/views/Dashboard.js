import React, { Fragment, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'
import HeaderDashboard from '../components/HeaderDashboard'
import { Route, useHistory } from 'react-router-dom'
import '../styles/dashboard.css'

// layouts
import BannerDashboard from '../layouts/BannerDashboard'
import BannerNewDashboard from '../layouts/BannerNewDashboard'
import BannerEditDashboard from '../layouts/BannerEditDashboard'
import ClientDashboard from '../layouts/ClientDashboard'
import ClientNewDashboard from '../layouts/ClientNewDashboard'
import ClientEditDashboard from '../layouts/ClientEditDashboard'
import Dashboards from '../layouts/Dashboard'

const Dashboard = () => {

    const auth = useSelector(state => state.auth.isAuthenticated);
    const token = useSelector(state => state.auth.token)
    const history = useHistory();
    console.log(auth)

    useEffect(() => {
        const boton = document.getElementById('boton-sidebar')
        const html = document.getElementById('html')
        const botonSidebarLeft = document.getElementById('boton-sidebar_left')
        const navbar = document.getElementById('content-buttons')
        const botonFixed = document.getElementById('content-button_fixed')
        const sidebar = document.getElementById('sidebar')
        const contenedor = document.getElementById('main')

        boton.addEventListener('click', function () {
            sidebar.classList.toggle('Toggle');
            contenedor.classList.toggle('Main');
            botonFixed.classList.remove('Block');
            botonFixed.classList.add('Align');
        })

        botonFixed.addEventListener('click', function () {
            sidebar.classList.toggle('Toggle');
            contenedor.classList.toggle('Main')
        })

        botonSidebarLeft.addEventListener('click', function () {
            html.classList.toggle('Nav-open');
        })

        function mostrarBotonFixed() {
            let scroll = document.documentElement.scrollTop
            if (scroll >= 25) {
                navbar.classList.add('None');
                botonFixed.classList.add('Block');
            } else {
                navbar.classList.remove('None');
                botonFixed.classList.remove('Block');
            }
        }


        window.addEventListener('scroll', mostrarBotonFixed);
    }, [])

    if(auth === false && (localStorage.getItem('token') === token)) {
        history.push('/admin')
    }

    return (
        <Fragment>
            <div className="Wrapper">
                <Sidebar />
                <div className="Main-panel">
                    <HeaderDashboard />
                    <div className="Content" id="main">
                        <Route exact path="/dashboard" component={Dashboards} />
                        <Route exact path="/dashboard/banners" component={BannerDashboard} />
                        <Route exact path="/dashboard/banners/nuevo" component={BannerNewDashboard} />
                        <Route exact path="/dashboard/banners/editar/:id" component={BannerEditDashboard} />
                        <Route exact path="/dashboard/clientes" component={ClientDashboard} />
                        <Route exact path="/dashboard/clientes/nuevo" component={ClientNewDashboard} />
                        <Route exact path="/dashboard/clientes/editar/:id" component={ClientEditDashboard} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Dashboard;