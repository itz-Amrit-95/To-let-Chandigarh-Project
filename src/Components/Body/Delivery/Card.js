import React from 'react'
import './Deliver.css'

const Card = ({src,name,discount,rating,place}) => {
  return (
    <>
  
            <div className="col-lg-4">
            <div className="single-card card-style-one py-3">
                <div className="card-image">

                    <img src={src}
                        alt="/" className='img-have-size' />
                    <h4 href="" className="category  ">{discount}</h4>
                </div>
                <div className="card-content px-4">
                    <h5 className="card-title fw-bold  pt-1">
                        {name}
                    </h5>
                    <h4 className="fw-bold pt-1 "><i className="fa-solid fa-star fa-sm" style={{ color: "orange" }}></i> {rating}</h4>
                    <address className="text-muted pt-2 ">
                        {place}
                    </address>

                </div>
            </div>
            </div>
   
    </>
  )
}

export default Card