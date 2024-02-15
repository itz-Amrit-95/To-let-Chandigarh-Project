import React, { useState } from 'react'
import './Place.css'
import Place from './Place'

const PlaceData = () => {






  const PlaceAnd = [{
    id:1,
    name: "Best Restaurants in Banglore",
   
  },
  {
    id:2,
    name: "Best Restaurants in Chandigarh"
  },
  { id:3,
    name: "Best Restaurants in Punjab"
  },
  { id:4,
    name: "Best Restaurants in Delhi"
  },
  { id:5,
    name: "Best Restaurants in Udaipur"
  },
  {
    id:6,
    name: "Best Restaurants in Mumbai"
  },
  {
    id:7,
    name: "Best Restaurants in Himachal Pradesh"
  },
  {
    id:8,
    name: "Best Restaurants in Jaipur"
  },
  {
    id:9,
    name: "Best Restaurants in Agra"
  },
  {
    id:10,
    name: "Best Restaurants in Tamil Nadu"
  },
  {
    id:11,
    name: "Best Restaurants in Pathankot"
  },
  {
    id:12,
    name: "Best Restaurants in Jammu&Kashmir"
  },
  
  ]
  const [number, Setnumber] = useState(6)
  const [btn,setBtn]=useState("Load More...")
  const slice = PlaceAnd.slice(0, number)

  const LoadMore = () => {
    setTimeout(() => {
      Setnumber(number + number)
      setBtn("")
    }, 1000);

  
  }
    
   



  


  return (
    <>
      <div className="container-fluid my-4" >
        <div className="row  d-flex justify-content-between" id="margin-take"  >
          <h3 className='text-muted py-4' style={{ fontWeight: "700" }}>Best Places to Eat Across Cities</h3>

          {slice.map((code, index) => (
            <div className="col-lg-3  mx-1 col-md-6 my-3 col-sm-12 col-12 have-btn-type-place " key={index} >
              <Place {...code} />

            </div>
          ))}
          <div className='text-center my-3'>
          { btn &&  <button className='btn btn-danger' onClick={LoadMore}>{btn}</button>}
          </div>

        </div>
      </div>
    </>
  )
}

export default PlaceData