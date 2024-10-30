import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Footer from './components/footer/Footer'
import Products from './pages/products/Products'
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      
      <Header />
      
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            {/* <CSpinner color="primary" variant="grow" /> */}
          </div>
        }
      >
        <Routes>
          <Route path="/" name="Home" element={<Home />} />
          <Route exact path="/product" name="Product" element={<Product />} />
          <Route exact path="/products" name="Products" element={<Products />} />
          <Route exact path="/cart" name="Cart" element={<Cart />} />
          <Route exact path="/checkout" name="Checkout" element={<Checkout />} />
          {/* <Route exact path="/about" name="About" element={<About />} />
          <Route exact path="/contact" name="Contact" element={<Contact />} />
          <Route exact path="/admin" name="Login" element={<Auth />} />
          <Route exact path="/terms-and-conditions" name="Page 500" element={<TermsAndConditions />} />
          <Route path="/service/:serviceTypeParam/:locationParam" element={<Service/>} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route exact path="/*" name="Page 404" element={<Page404 />} /> */}
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  )
}

export default App
