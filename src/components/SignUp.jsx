import React from 'react'

const tipsAndTricks = [

    {
        leftHeading: "Want tips & tricks to optimize your flow?",
        leftParagraph: "Sign up to our newsletter and say up to date.",
        rightParagraph: "We care about the protection of your data. Read our"
    },

]

const SignUp = () => {
    return (
        <section className='bg-black text-white'>
            <div className='max-w-7xl mx-auto p-2 sm:p-3 md:p-5'>
                {tipsAndTricks.map((tipsAndTricks, key) => (
                    <div 
                        className='grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-x-5'
                        key={key}
                    >
                        <div
                            id='left'
                            className='p-2 sm:p-3 md:p-4'
                        >
                            <h2 className='text-xl md:text-3xl Archivo-black'>{tipsAndTricks.leftHeading}</h2>
                            <p className='text-xs sm:text-base mt-2 sm:mt-0 text-emerald-400 '>{tipsAndTricks.leftParagraph}</p>
                        </div>
                        <div 
                            id='right'
                            className='grid justify-center'
                        >
                            <div className='flex gap-x-2 p-2'>
                                <input type="text" className='bg-gray-100 rounded-md text-black px-1 md:px-7 lg:px-10 outline-none ring-1 ring-emerald-400' placeholder='example@gmail.com'  autoComplete='none' />
                                <button className='p-2 text-black rounded-sm bg-emerald-500 border border-white/40 hover:border-white/70 transition-colors'>Notify me</button>
                            </div>
                            <div className='text-xs ml-2 md:ml-3'>
                                <p>{tipsAndTricks.rightParagraph}</p>
                                <a className='text-emerald-400 underline' href="#">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                )) 
                }
            </div>
        </section>
    )
}

export default SignUp