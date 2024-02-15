import React from 'react'
import './Deliver.css'

const Deliver = () => {



    return (
        <div>
            <div className="container " style={{height:"150px"}}>
                <div className="row">
                    <h3 className='text-muted' style={{ fontWeight: "700" }}>Restaurants with online food delivery in Chandigarh</h3>
                    <div className='btns-deliver mt-3 '>
                        <button type="button" className="btn btn-light my-1" >Filter <i class="fa-solid fa-arrow-up-short-wide fa-sm" style={{ color: "#000000" }}></i></button>

                        {/* { dropdown btn} */}
                        
                        <div className="dropdown">
                            <button className="btn btn-light my-1 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By <i class="fa-thin fa-arrow-down-to-line fa-sm"></i>
                            </button>
                            
                            <div className="dropdown-menu mt-1 px-3">
                                
                                <div class="form-check my-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label class="form-check-label" htmlFor="flexRadioDefault1">
                                        Relevance (Default)
                                        </label>
                                </div>
                                <div class="form-check my-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                        <label class="form-check-label" htmlFor="flexRadioDefault2">
                                        Delivery Time
                                        </label>
                                </div>
                                <div class="form-check my-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
                                        <label class="form-check-label" htmlFor="flexRadioDefault3">
                                        Rating
                                        </label>
                                </div>
                                <div class="form-check my-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked/>
                                        <label class="form-check-label" htmlFor="flexRadioDefault4">
                                        Cost: Low to High
                                        </label>
                                </div>
                                <div class="form-check my-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" checked/>
                                        <label class="form-check-label" htmlFor="flexRadioDefault5">
                                        Cost: High to Low
                                        </label>
                                </div>
                               
                            </div>
                    
                          
                        </div>
                        <button type="button" className="btn btn-light my-1" >Fast Delivery</button>
                        <button type="button" className="btn btn-light my-1" >New On Swiggy</button>
                        <button type="button" className="btn btn-light my-1" >Rating 4.0+</button>
                        <button type="button" className="btn btn-light my-1" >Pure Veg</button>
                        <button type="button" className="btn btn-light my-1" >Offer</button>
                        <button type="button" className="btn btn-light my-1" >Rs.300-Rs.600</button>
                        <button type="button" className="btn btn-light my-1" >Less Than Rs. 300</button>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Deliver