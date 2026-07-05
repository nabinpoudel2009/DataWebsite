import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import SignUp from './components/SignUp'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const App = () => {
    return (
        <main className='text-white overflow-hidden'>
            <Nav />
            <Hero />
            <Features />
            <SignUp />
            <Pricing />
            <Footer />
        </main>
    )
}

export default App