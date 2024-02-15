import React from 'react'
import Junk from './JunkFood/JunkData'
import RestroData from './Foods/RestroData'
import Deliver from './Delivery/Deliver'
import Card from './Delivery/CardData'
import PlaceData from './Places btns/PlaceData'
import Near from './Places btns/NearData'
import Headtypes from './Delivery/Headtypes'


const Body = () => {
  return (
    <div>
      <Headtypes/>
      <Junk />
      <RestroData />
      <Deliver />
      <Card />
      <PlaceData />
      <Near />

    </div>
  )
}

export default Body