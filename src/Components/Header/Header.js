import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './logo.png'
import './Header.css'




const Header = () => {
    const [color, setColor] = useState(false)


    const NavColor = () => {

        if (window.scrollY >= 100) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }


    window.addEventListener("scroll", NavColor)


    return (
        <>
            <nav className={`navbar navbar-expand-lg ${color && "header"}`}>
                <div className="container-fluid  ">
                    <NavLink to="/" className='navbar-brand'><img src={Logo} className='img-fluid' alt="" /></NavLink>
                    <div className='location' style={{ cursor: "pointer" }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                        <span className='other'> Others</span> <span className='ps-2'> Chandigarh India <i className="fa-solid fa-arrow-down fa-lg" style={{ color: "orangered" }}></i></span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-react" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbar-react">
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <a href="/" className='nav-link'> <i className="fa-solid fa-magnifying-glass fa-lg"></i> Search</a>
                            </li>
                            <li className='nav-item'>
                                <a href="/" className='nav-link'> <i className="fa-solid fa-percent fa-lg"></i> Offer <span class="badge bg-danger">New</span></a>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/Help" className='nav-link'> <i className="fa-solid fa-handshake-angle fa-lg"></i> Help</NavLink>
                            </li>
                            <li className='nav-item'>
                                <a href="/" className='nav-link'> <i className="fa-solid fa-user fa-lg"></i> Sign In </a>
                            </li>
                            <li className='nav-item'>
                                <a href="/" className='nav-link'> <i className="fa-solid fa-cart-shopping fa-lg"></i> Cart</a>
                            </li>
                        </ul>

                    </div>








                </div>

            </nav>



            {/* offCanvas */}
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel" style={{ color: "oranged" }}>Swiggy</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form action="">
                        <input type="text" className='form-control p-3' placeholder='Search area and Place...' />
                    </form>
                    <div className='col-lg-12 my-4 p-4' style={{ border: "1px solid grey" }}>
                        <a href="" style={{ textDecoration: "none", color: "black", fontWeight: "800" }}><i className="fa-solid fa-location-dot fa-2xl me-2" c style={{ color: "#ff6a00" }}></i> Get Current Location</a>
                        <blockquote className='py-2  ms-5' style={{ color: "grey" }}>Using GPS</blockquote>
                    </div>
                    <div className='col-lg-12 my-4 p-4' style={{ border: "1px solid grey" }}>

                        <blockquote className='py-1 ms-5' style={{ color: "grey" }}>Recent Searches</blockquote>
                        <a href="" style={{ textDecoration: "none", color: "black", fontWeight: "800" }}><i class="fa-regular fa-clock fa-2xl me-2 ms-2" style={{ color: "#ff6a00" }}></i>Chandigarh</a>
                        <blockquote className='py-1  ms-5' style={{ color: "grey" }}>India</blockquote>
                    </div>




                </div>
            </div>
        </>
    )
}

export default Header