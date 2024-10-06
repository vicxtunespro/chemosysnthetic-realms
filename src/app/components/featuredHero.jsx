"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FeaturedHero() {
  return (
    <div className='featured-hero h-[100vh] flex justify-center items-center flex-col gap-4 bg-[url("/bg.jpg")] bg-cover bg-center bg-opacity-60'>
                    <motion.div 
                    initial={{opacity:0}}
                    whileInView={{opacity:1, transition:{duration:0.5}}}
                    className="text-white text-4xl lg:text-7xl font-extrabold mx-auto md:text-5xl">
                        Chemosynthetic Realms 
                    </motion.div>
                    <p className="max-w-xl mx-auto xl:mx-4 text-center text-white text-2xl">
                     Explore the wonders of chemosynthesis and its hidden impact on our planet.
                    </p>
    </div>
  )
}
