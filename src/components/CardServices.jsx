import React from 'react'

const CardServices = (props) => {
    const { title, desc } = props;
    return (
        <div>
            <div className='w-[409px] h-[434px] bg-[#d9d9d9] rounded-2xl'></div>
            <h1 className='mt-[23px] text-[30px] font-semibold leading-[30px]'>{title}</h1>
            <p className='mt-[19.3px] text-lg font-medium leading-[30px] text-[#a6a6a6]'>{desc}</p>
        </div>
    )
}

export default CardServices
