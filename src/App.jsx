import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

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
          {/* <Route exact path="/services" name="Services" element={<Services />} />
          <Route exact path="/pricing" name="Pricing" element={<Pricing />} />
          <Route exact path="/blogs/*" name="Blogs" element={<Blog />} />
          <Route exact path="/about" name="About" element={<About />} />
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
