import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Research from './components/research/Research'
import Certs from './components/certifications/Certs'
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {
    <SpeedInsights/>
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Certs />
            <Portfolio />
            <Research />
            <Testimonials/>
            <Contact />
            <Footer />
        </>
    )
}

export default App
