import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Footer = () => {
    return (
        <footer className='bg-black p-2 sm:p-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex items-center gap-x-1 text-gray-400'>
                    <FaRegCopyright />
                    <h3 className='text-xs sm:text-sm md:text-base'>2026 DataBloom. All right reserved.</h3>
                </div>
                <div className='flex justify-center items-center text-gray-200'>
                    <h3 className='text-sm flex gap-x-1 items-center'>
                        <span>Developed By</span>
                        <a href="#" className='text-emerald-400 underline'>Nabin Poudel</a>
                    </h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer