import React from 'react'
import Button from './Button'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <section className=''>

            <div className='absolute md:hidden block bottom-60 sm:-right-30 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/15 rounded-full blur-3xl'/>

            <div className='max-w-7xl mx-auto h-screen items-center justify-center w-full text-center flex flex-col'>
                <p className='uppercase text-emerald-400 sm:text-lg Montenegrin-Gothic-One text-sm'>growing with data analytics</p>
                <h2 className='font-bold text-4xl md:text-5xl mt-2'>Grow with data.</h2>
                <div className='flex text-center gap-x-1 items-center'>
                    <p className=" text-center text-gray-100 text-sm">Fast, flexible and financing for </p>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'BTB',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'BTC',
                            1000,
                            'SAAS',
                            1000,
                        ]}
                        wrapper="span"
                        className='text-lg text-gray-400'
                        speed={500}
                        repeat={Infinity}
                    />
                </div>
                <h6 className='text-xs mt-2 text-gray-400 p-2 sm:text-sm md:text-lg'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</h6>
                <Button />
            </div>
        </section>
    )
}

export default Hero