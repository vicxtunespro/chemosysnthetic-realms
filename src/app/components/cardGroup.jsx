import React from 'react'
import features from '../data/features'
import Link from 'next/link'

export default function CardGroup() {
  return (
    <>
        <div className='px-4 md:px-16 lg:px-32'>
            <div className='mt-8 text-green-900 leading-7 relative'>
                <p>Key features of chemosynthesis</p>
            </div>
            <div className='py-8 flex overflow-x-scroll overscroll-x-none'>
                {features.map((feature)=>(
                    <Card
                    key={feature.id}
                    id={feature.id}
                    name={feature.name}
                    content={feature.content}
                    imageUrl={feature.imageURL}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

function Card({id, name, content, imageURL}) {
    return (
          <div className='flex flex-col mr-4 min-w-[20rem] max-w-[20rem] rounded-md h-[28rem] shadow-md'>
              <div className='img h-[60%] relative'>
                  <a href={`/features/${id}`}><img src={imageURL} className='rounded-md w-full h-full object-cover'></img></a>
              </div>
              <div className='flex flex-col gap-1 h-[40%] text-sm p-4'>
                  <Link href={`/features/${id}`}>
                      <div className='text-bold text-lg text-slate-900'>{name}</div>
                  </Link>
                  <div className='text-slate-600'>{content}</div>
                  <button className='py-2 px-4 bg-gradient-to-r from-teal-400 to-indigo-600 text-white'>Read more</button>
              </div>
          </div>
  
    )
  }
  