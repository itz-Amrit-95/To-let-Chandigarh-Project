import React from 'react'
import './Footer.css'


const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">

                <section className="d-flex  flex-column  justify-content-center   align-items-center  p-4 border-bottom">

                    <div className="me-5  d-lg-block">
                        <h3 className="py-1">For better experience,download the  Swiggy app now</h3>
                    </div>



                    <div>
                        <a href="" className=" text-reset me-3">
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"}  alt="" />
                        </a>
                        <a href="" className=" text-reset">
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"}  alt="" />
                        </a>

                    </div>

                </section>



                <section className="bg-black  text-light "  >
                    <div className="container text-center text-md-start pt-4">

                        <div className="row ">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h3 className="text-uppercase  d-flex  align-items-center  mb-2">
                                    <i className="fas fa-gem me-3"></i> Swiggy
                                </h3>
                                <p>
                                    © 2023 Bundl Technologies Pvt. Ltd
                                </p>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="fw-bold mb-4">
                                    Company
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">About</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Careers</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Team</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Swiggy One</a>


                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Swiggy Instamart</a>


                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Swiggy Genie</a>


                                </p>


                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <div className="pb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">

                                        Contact us
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Help & Support</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Partner with us</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Ride with us</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Help</a>
                                    </p>
                                </div>
                                <div>

                                    <h6 className="text-uppercase fw-bold mb-4">


                                        Legal
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Legal
                                            Terms & Conditions</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Cookie Policy</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Privacy Policy</a>
                                    </p>

                                </div>


                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <div className="pb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">

                                        We deliver to:
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Bangalore</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Gurgaon</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Hyderabad</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Delhi</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Mumbai</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Pune</a>
                                    </p>

                                </div>



                            </div>

                        </div>

                    </div>
                </section>




            </footer>


        </>
    )
}

export default Footer