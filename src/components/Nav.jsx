import React from 'react'

const Nav = () => {
    return (
        <nav>
            <div className='max-w-7xl mx-auto backdrop-blur-3xl bg-transparent p-4 flex items-center justify-between'>
                <h1 className='text-2xl md:text-3xl text-emerald-400 font-bold'>REACT.</h1>
                <div className='hidden items-center gap-x-5 sm:flex'>
                    <ul className='flex items-center gap-x-8'>
                        <li className='cursor-pointer text-gray-300 hover:text-gray-100 transition-colors'>Home</li>
                        <li className='cursor-pointer text-gray-300 hover:text-gray-100 transition-colors'>Account</li>
                        <li className='cursor-pointer text-gray-300 hover:text-gray-100 transition-colors'>Sign In</li>
                    </ul>
                    <button className='p-2 bg-gray-200 text-black rounded-sm hover:bg-emerald-500 border hover:border-white/40 transition-colors'>Get Started</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav