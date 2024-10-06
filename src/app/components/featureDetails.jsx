import Image from 'next/image'
import React from 'react'

export default function FeatureDetails({id, name, content, imageURL}) {
  return (
    <div className='py-32 px-4 lg:px-36 text-sm lg:text-xs'>
        <div className="flex flex-col gap-2">
          <div className='text-3xl '>Chemosynthesis {name}</div>
          <div className='action-btn flex gap-2 py-4'>
            <a className='px-4 py-2 bg-gray-100 rounded text-sm'>Share</a>
            <a className='px-4 py-2 bg-gray-100 rounded text-sm'>Save</a>
          </div>
          <div>
            <div className='img relative h-48 md:h-96 rounded overflow-hidden'>
                <Image src={imageURL} alt='feature Image' width={900} height={100} className='w-full h-full object-cover'/>
            </div>
            <div className='my-4 '>
              <p className='font-bold text-lg'>{name}</p>
              <p className='font-bold text-lg'>additional informations</p>
              <div className='flex justify-between py-4'>
                <span className='flex flex-col'>
                    
                </span>
                <span className='flex flex-col'>
                    <p>Group Size:</p>
                    <p></p>
                </span>
                <span className='flex flex-col'>
                    <p>Destination:</p>
                    <p></p>
                </span>
                
              </div>
            </div>
          </div>
          <hr></hr>
          <div>
            <span>Overview</span>
          </div>
        </div>

    </div>
  )
}
