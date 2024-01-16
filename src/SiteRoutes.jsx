import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Categories from './components/Categories.jsx'
import About from './components/About.jsx'


function SiteRoutes() {
  return (
<>
<Routes>
      <Route path='/Home' element={<Home />} />
      <Route path='/Categories' element={<Categories />} />
      <Route path='/About' element={<About />} />

</Routes>
</>
    )
}

export default SiteRoutes