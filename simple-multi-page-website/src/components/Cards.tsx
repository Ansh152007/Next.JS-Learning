import React from 'react'

import { CardProps } from '@/Types/cardsProps'
import Link from 'next/link'

const Cards = ({ title, description, imagebgcolor , imageborder, imageUrl, link }: CardProps) => {
  return (
    <div className='bg-white p-4 rounded-xl border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center'>
      <h1 className='text-xl font-medium mb-2'>{title}</h1>
      <p className='text-gray-600 mb-4'>{description}</p>
      <div className={`w-14 h-14 border ${imageborder} rounded-xl ${imagebgcolor} overflow-hidden flex items-center justify-center mb-4`}><img src={imageUrl} alt={title} className='w-8 h-8 object-cover' /></div>
      <Link href={link} target="_blank" rel="noopener noreferrer" >
        <p className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 duration-200 hover:scale-105 transition-all'>Learn More</p>
      </Link>
    </div>
  )
}

export default Cards
