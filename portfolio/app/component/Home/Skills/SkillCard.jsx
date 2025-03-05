import Image from 'next/image';
import React from 'react'

const SkillCard = ({skill}) => {

    const {image,percent,title} = skill;

  return (
    <div className='p-6  hover:bg-blue-900 transition-all duration-300 cursor-pointer text-center rounded-lg bg-gray-900'>
        <Image src={image} alt={title} width={80}  height={80} className='object-cover mx-auto' />
        <h1 className="text-[18px] mt-4 text-white font-[600]">{title}</h1>
        <div className='bg-black mt-4 rounded-lg p-2 text-white opacity-40'>{percent}</div>
    </div>
  )
}

export default SkillCard