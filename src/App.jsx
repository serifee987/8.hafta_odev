import { useState } from 'react'
import Header from './components/Header'
import products from './products.json'
import Product from './components/Product'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SiteRoutes from './SiteRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar/>
      <div>

        <SiteRoutes/>
      </div>
    </>
  )
}

export default App
