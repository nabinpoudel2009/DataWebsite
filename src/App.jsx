import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import SignUp from './components/SignUp'

const App = () => {
    return (
        <main className='text-white overflow-hidden'>
            <Nav />
            <Hero />
            <Features />
            <SignUp />
        </main>
    )
}

export default App