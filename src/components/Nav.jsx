import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";


const Nav = () => {
    
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    
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
                <div 
                    className='block sm:hidden'
                    onClick={() => setIsToggleOpen((prev) => !prev)}
                >
                    {
                        isToggleOpen ? (
                            <MdOutlineClose className='text-3xl'/>
                        ) : (
                            <GiHamburgerMenu className='text-2xl'/>
                        )
                    }
                </div>
            </div>

            <div className={`md:hidden bg-transparent backdrop-blur-3xl flex px-3 py-2 border-t border-emerald-500/70 mobile-menu ${ isToggleOpen ? "show" : "" }`}>
                <div className='flex space-y-3 flex-col'>
                    <a 
                        href="#" 
                        className='text-gray-300 hover:text-white transition-all duration-200 ease-in-out lg:text-base' 
                        onClick={() => setIsToggleOpen((prev) => !prev)}
                    >
                        Home
                    </a>
                    <a 
                        href="#features"
                        className='text-gray-300 hover:text-white transition-all duration-200 ease-in-out lg:text-base'
                        onClick={() => setIsToggleOpen((prev) => !prev)}
                    >
                        Account
                    </a>
                    <a 
                        href="#pricing" 
                        className='text-gray-300 hover:text-white transition-all duration-200 ease-in-out lg:text-base' 
                        onClick={() => setIsToggleOpen((prev) => !prev)}
                    >
                        Sign In
                    </a>
                    <button className='p-1 bg-emerald-500 text-black rounded-md border border-white/50 mt-2 active:scale-98 transition-all'>Get Started</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav