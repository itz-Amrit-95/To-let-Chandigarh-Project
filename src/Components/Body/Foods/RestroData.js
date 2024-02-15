import React from 'react'
import Restro from './Restro'
import './RestroSlider.css'

import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css/pagination';



const RestroData = () => {


    const FoodData = [{
        imgHave: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9",
        price: "₹120 OFF ABOVE ₹199",
        item: "La Pino'z Pizza",
        rating: " 4.4 .27min",
        address: "Pizzas, Pastas, Italian, Desserts, Beverages Sector 9 D"
    },
    {
        imgHave: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
        price: "₹120 OFF ABOVE ₹199",
        item: "Pizza Hut",
        rating: " 4.4 .27min",
        address: "Pizza  Sector 15",

    },
    {
        imgHave: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552",
        price: "₹120 OFF ABOVE ₹199",
        item: "Subway",
        rating: " 4.4 .27min",
        address: "Fast Food, Healthy Food, Salads,  Sector 22"

    }, {
        imgHave: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
        price: "₹120 OFF ABOVE ₹199",
        item: "KFC",
        rating: " 4.4 .27min",
        address: "Burgers, Biryani, American, Snacks, Fast Food Sector 35"

    },
    {
        imgHave: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        price: "₹120 OFF ABOVE ₹199",
        item: "Burger King",
        rating: " 4.4 .27min",
        address: "Burgers, American Sector 35"

    },
    {
        imgHave: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ecd32b841549ce6bfd993260a2086c1f",
        price: "₹120 OFF ABOVE ₹199",
        item: "McDonald's",
        rating: " 4.4 .27min",
        address: "American, Fast Food Sector 22"

    },
    {
        imgHave: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bngudbgsxwdx6wimjzfw",
        price: "₹120 OFF ABOVE ₹199",
        item: "Uttam Sweets Bakery & ",
        rating: " 4.4 .27min",
        address: "Sweets, Bakery, Chinese, Desserts, Punjabi, Fast Food Sector 44"

    },
    {
        imgHave: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yc37c1fbmghsz2u9wzmt",
        price: "₹120 OFF ABOVE ₹199",
        item: "El Mexicano",
        rating: " 4.4 .27min",
        address: "Mexican, Tex-Mex, Beverages, Desserts, Pizzas, Fast Food  Sector 8"

    }]



    const breakpoints = {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        440: {
            slidesPerView: 1,
            spaceBetween: 10,

        },
        300: {
            slidesPerView: 1,
            spaceBetween: 10,

        }
    };









    return (
        <>
            <div className="container" id="con" >
                <h3 className='text-muted' style={{ fontWeight: "700" }}>Top restaurant chains in Chandigarh</h3>
                <Swiper

                    slidesPerView={3}
                    centeredSlides={false}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={breakpoints}
                    loop={true}
                    grabCursor={true}
                    spaceBetween={10}

                    scrollbar={true}


                    modules={[Pagination, Autoplay]}

                    className="mySwiper1"
                >

                    {FoodData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Restro {...item} />

                        </SwiperSlide>
                    ))}


                </Swiper>


                <hr />
            </div>


        </>

    )
}

export default RestroData