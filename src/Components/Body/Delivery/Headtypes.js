import React, { useEffect } from 'react'
import Typed from 'typed.js';

const Headtypes = () => {
    useEffect(() => {
        const typed = new Typed('#element', {
            strings: ['<i>Welcome </i> To swiggy.', ' The fastest food delivery service in your city.'],
            typeSpeed: 50,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            <div className="container my-5">
                <div className="row">

                    <div className="col-lg-12 text-center ">


                        <span id="element" style={{ fontSize: "30px" }}></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headtypes