import React from 'react'
import singleLogo from '../assets/single.png'
import doubleLogo from '../assets/double.png'
import tripleLogo from '../assets/triple.png'
import { FaCheckCircle } from "react-icons/fa";
import Button from './Button';


const plans = [

    {
        logo: singleLogo,
        title: "Starter",
        pricing: "149",
        features: [
            "5GB Storage",
            "Email Support",
            "API Access",
            "Mobile App",
        ],
        mostPopular: false,
    },

    {
        logo: tripleLogo,
        title: "Group Account",
        pricing: "299",
        features: [
            "5TB Storage",
            "Email Support",
            "API Access",
            "Mobile App",
            "Bandwidth of 10gb/ps",
            "100 Team Members",
            "Custom SLA",
            "Advance security",
            "Dedicated account manager",
        ],
        mostPopular: true,
    },

    {
        logo: doubleLogo,
        title: "Partnership",
        pricing: "199",
        features: [
            "1TB Storage",
            "Priority Support",
            "API Access",
            "Bandwidth of 5gb/ps",
            "50 Team Members",
            "Custom SLA",
        ],
        mostPopular: false,
    }

];

const Pricing = () => {
    return (
        <section className='bg-white text-black p-5 py-10'>
            <div className='max-w-7xl mx-auto mt-5 md:mt-10'>
                <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-10 lg:grid-cols-3'>
                    {plans.map((plans, key) => 
                        <div
                            key={key}
                            className={`p-2 hover:-translate-y-1 transition-all hover:shadow-xl duration-200 ease-in-out shadow-lg rounded-xl text-center overflow-visible bg-neutral-50 text-black border ${plans.mostPopular === true ? "border-emerald-500 scale-110" : "border-gray-400"}`}
                        >
                            <div className='p-2'>
                                <div className='flex justify-center'>
                                    <img src={plans.logo} alt="Logos" className='w-10 sm:w-15' />
                                </div>
                                <h2 className={`text-xl md:text-2xl font-bold ${plans.mostPopular === true ? "text-emerald-500" : ""}`}>{plans.title}</h2>
                                <h4 className='text-2xl md:text-3xl font-bold '>${plans.pricing}</h4>
                                <ul className='p-2 grid font-semibold'>
                                    {plans.features.map((features, featureKey) => (
                                        <ul 
                                            key={featureKey} 
                                            className='flex items-center my-2 gap-x-2 blur-no'
                                        >
                                            <FaCheckCircle className='text-sm fill-emerald-400 sm:text-base md:text-lg' />
                                            <li className='text-gray-400 text-sm sm:text-base'>{features}</li>
                                        </ul>
                                    ))}
                                </ul>
                                <button className='p-2 mt-2 bg-emerald-400 hover:bg-emerald-300 w-full text-black rounded-sm border border-black/40 hover:border-black/60 transition-colors'>Get Started</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Pricing