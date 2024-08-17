import React, { useState } from 'react'
import NavBar from './Component/NavBar/NavBar'
import {Routes,Route} from 'react-router-dom'
import Home from '../src/Pages/Home/Home.jsx'
import Video from "../src/Pages/Video/Video.jsx"

const App = () => {
  const [sidebar,setSidebar]=useState(true)
  return (
    <div>
      <NavBar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App