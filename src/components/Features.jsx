import React from 'react'
import laptop from "../assets/laptop.jpg";

const tagLine = [
    
    {
        title: "Data analytics dashboard",
        highlightTitle: "Manage Data Analytics Centrally",
        paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi saepe, voluptatum illo ullam itaque aliquid enim assumenda quasi quo consectetur eaque quis ea velit, odit delectus consequuntur, temporibus odit delectus consequuntur, temporibus hic? Possimus!",
    }

]

const Features = () => {
    return (
        <section className='bg-white w-full p-2 md:p-5 lg-p-8'>
            <div className='max-w-7xl grid grid-cols-1 items-center md:grid-cols-2 mx-auto text-black'>
                <div 
                    id='left' 
                    className='max-w-2xl mx-auto p-2'
                >
                    <img src={laptop} alt="Laptop" className='w-60 object-cover lg:w-100' />
                </div>
                <div 
                    id='right'
                    className='p-2'
                >
                    {tagLine.map((tagLine, key) => (
                        <div 
                            className=''
                            key={key}
                        >
                            <h6 className='text-emerald-500 Montenegrin-Gothic-One uppercase text-lg'>{tagLine.title}</h6>
                            <h3 className='font-bold text-2xl md:text-3xl'>{tagLine.highlightTitle}</h3>
                            <p className='text-sm mt-2'>{tagLine.paragraph}</p>
                            <button className='p-2 bg-black text-emerald-400 hover:shadow-lg rounded-sm mt-2 md:mt-3 border hover:border-black/40 transition-all duration-200 ease-in-out'>Get Started</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features