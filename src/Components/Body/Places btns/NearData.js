import React, { useState } from 'react'
import Near from './Near'


const NearData = () => {
    const x = [{
        id: 1,
        name: "Kerala Restaurants Near Me",

    },
    {
        id: 2,
        name: "Chandigarh Restaurants Near Me"
    },
    {
        id: 3,
        name: " Punjab Restaurants Near Me"
    },
    {
        id: 4,
        name: " Delhi Restaurants Near Me"
    },
    {
        id: 5,
        name: " Udaipur Restaurants Near Me"
    },
    {
        id: 6,
        name: " Mumbai Restaurants Near Me"
    },
    {
        id: 7,
        name: " Himachal Pradesh Restaurants Near Me"
    },
    {
        id: 8,
        name: " Jaipur Restaurants Near Me"
    },
    {
        id: 9,
        name: " Agra Restaurants Near Me"
    },
    {
        id: 10,
        name: " Tamil Nadu Restaurants Near Me"
    },
    {
        id: 11,
        name: " Pathankot Restaurants Near Me"
    },
    {
        id: 12,
        name: " Jammu&Kashmir Restaurants Near Me"
    },
    {
        id: 13,
        name: "Jaipur Restaurants Near Me "
    },
    {
        id: 14,
        name: " Kalka Restaurants Near Me"
    },
    {
        id: 14,
        name: " Pinjore Restaurants Near Me"
    }

    ]
    const [numbers, Setnumbers] = useState(9)
    const [btns, setBtns] = useState("Load More...")
    const sliceBtn = x.slice(0, numbers)

    const ShowMore = () => {
        setTimeout(() => {
            Setnumbers(numbers + numbers)
            setBtns("")
        }, 1000);


    }
    return (
        <>
            <div className="container-fluid my-4" >
                <div className="row  d-flex justify-content-between" id="margin-take"  >
                    <h3 className='text-muted py-4' style={{ fontWeight: "700" }}>Best Cuisines Near Me
                    </h3>

                    {sliceBtn.map((codes, indexs) => (
                        <div className="col-lg-3  mx-1 col-md-6 my-3 col-sm-12 col-12 have-btn-type-place " key={indexs} >
                            <Near {...codes} />

                        </div>
                    ))}
                    <div className='text-center my-3'>
                        {btns && <button className='btn btn-danger' onClick={ShowMore}>{btns}</button>}
                    </div>

                </div>
            </div>

        </>
    )
}

export default NearData