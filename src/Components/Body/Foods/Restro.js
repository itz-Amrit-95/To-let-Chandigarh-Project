import React from 'react'
import './Restro.css'

const Restro = (props) => {
    return (
        <>
            <div className="single-food food-style-one py-3">
                <div className="food-image">

                    <img src={props.imgHave}
                        alt="/" className='img-have-size' />
                    <h4 href="" className="category">{props.price}</h4>
                </div>
                <div className="food-content px-4">
                    <h5 className="food-title fw-bold  pt-3">
                        {props.item}
                    </h5>
                    <h4 className="fw-bold "><i className="fa-solid fa-star fa-lg" style={{ color: "red" }}></i> {props.rating}</h4>
                    <address className="text-muted ">
                        {props.address}
                    </address>

                </div>
            </div>
        </>
    )
}

export default Restro