import React from 'react'

const Hero = () => {
    return (
        <section className=''>

            <div className='absolute md:hidden block bottom-60 sm:-right-30 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/15 rounded-full blur-3xl'/>

            <div className='max-w-7xl mx-auto h-screen items-center justify-center w-full text-center flex flex-col'>
                <p className='uppercase text-emerald-400 sm:text-lg Montenegrin-Gothic-One text-sm'>growing with data analytics</p>
                <h2 className='font-bold text-4xl md:text-5xl mt-2'>Grow with data.</h2>
                <div>
                    <p className='text-gray-100'>Fast, flexible and financing for </p>
                </div>
                <h6 className='text-xs mt-2 text-gray-400 p-2 sm:text-sm md:text-lg'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</h6>
                <button className='px-2 md:px-4 py-2 bg-gray-200 text-black rounded-sm hover:bg-emerald-500 border hover:border-white/40 transition-colors'>Get Started</button>
            </div>
        </section>
    )
}

export default Hero