import { Route, Routes } from "react-router-dom"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Hero from "./Hero/hero"
import Home from "./Home/home"
import About from "./About/about"
import Contact from "./Contact/contact"




const Frontend = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element = {<Hero />} />
        <Route path="home" element = {<Home />} />
        <Route path="about" element = {<About />} />
        <Route path="contact" element = {<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Frontend
