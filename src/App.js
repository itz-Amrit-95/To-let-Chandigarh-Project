import React from 'react'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'
import Help from './Help/Help'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Body/>} />
          <Route path='/Help' element={<Help/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App