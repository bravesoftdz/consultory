import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

const Header = () => {

    const isAuth = useSelector((state) => state.auth.isAuthenticated)
    const history = useHistory();

    useEffect(() => {
        var nav = document.querySelector(".Mobile")
        var hamburger = document.querySelector(".hamburger")
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('is-active')
            nav.classList.toggle('active')
        })

        const target = document.querySelector(".target");
        const links = document.querySelectorAll(".Nav__Item a");
        const colors = ["#015D74", "#015D74", "#015D74", "#015D74"];

        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", (e) => e.preventDefault());
            links[i].addEventListener("mouseenter", mouseenterFunc);
        }

        function mouseenterFunc() {
            for (let i = 0; i < links.length; i++) {
                if (links[i].parentNode.classList.contains("active")) {
                    links[i].parentNode.classList.remove("active");
                }
                links[i].style.opacity = "0.8";
            }

            this.parentNode.classList.add("active");
            this.style.opacity = "1";

            const width = this.getBoundingClientRect().width;
            const height = this.getBoundingClientRect().height;
            const left = this.getBoundingClientRect().left + window.pageXOffset;
            const top = this.getBoundingClientRect().top + window.pageYOffset;
            const color = colors[Math.floor(Math.random() * colors.length)];

            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
            target.style.borderColor = color;
            target.style.transform = "none";
        }

        window.addEventListener("resize", resizeFunc);

        function resizeFunc() {
            const active = document.querySelector(".mynav li.active");

            if (active) {
                const left = active.getBoundingClientRect().left + window.pageXOffset;
                const top = active.getBoundingClientRect().top + window.pageYOffset;

                target.style.left = `${left}px`;
                target.style.top = `${top}px`;
            }
        }
    }, [])

    const goBannerAdmin = () => {
        history.push('/dashboard')
    }

    const goContact = () => {
        history.push('/contacto')
    }

    const goServices = () => {
        history.push('/servicios')
    }

    const goAbout = () => {
        history.push('/')
    }

    const goHome = () => {
        history.push('/')
    }


    return (
        <div className="Header">
            <div className="Container__Full">
                <div className="Logo">
                    <img src={require('../images/logo.png')} alt="" />
                </div>
                <button class="hamburger hamburger--collapse" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <span class="target"></span>
                {
                    isAuth ?
                        <div className="Nav Mobile" style={{ justifyContent: "flex-end" }}>
                            <ul className="Nav__Link" style={{ marginTop: "0px" }}>
                                <li className="Nav__Item">
                                    <Link onClick={goHome} to="/">home</Link>
                                </li>
                                <li className="Nav__Item">
                                    <Link onClick={goAbout} to="/">quiénes somos</Link>
                                </li>
                                <li className="Nav__Item">
                                    <Link onClick={goServices} to="/servicios">beneficios para tu empresa</Link>
                                </li>
                                <li className="Nav__Item">
                                    <Link onClick={goServices} to="/servicios">servicios</Link>
                                </li>
                                <li className="Nav__Item">
                                    <Link onClick={goContact} to="/contacto">contacto</Link>
                                </li>
                                <li className="Nav__Item">
                                    <Link onClick={goBannerAdmin} to="/banners">admin</Link>
                                </li>
                            </ul>
                        </div>
                        :
                        <div className="Nav Mobile" style={{ justifyContent: "flex-end" }}>
                            <ul className="Nav__Link" style={{ marginTop: "0px" }}>
                            <li className="Nav__Item">
                                    <Link onClick={goHome} to="/">home</Link>
                                </li>
                                <li className="Nav__Item">
                                    <Link onClick={goAbout} to="/">quiénes somos</Link>
                                </li>
                                <li className="Nav__Item">
                                    <Link onClick={goServices} to="/servicios">beneficios para tu empresa</Link>
                                </li>
                                <li className="Nav__Item">
                                    <Link onClick={goServices} to="/servicios">servicios</Link>
                                </li>
                                <li className="Nav__Item">
                                    <Link onClick={goContact} to="/contacto">contacto</Link>
                                </li>
                            </ul>
                        </div>
                }

            </div>
        </div>
    );
}

export default Header;