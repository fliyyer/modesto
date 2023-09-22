import React from 'react'

const CardServices = (props) => {
    const { title, desc, img } = props;
    return (
        <div className='w-[309] h-[334px] md:w-[409px] md:h-[434px]  rounded-2xl'>
            <img className='w-[409px] h-[409px] shadow-lg rounded-2xl' src={img} alt="" />
            <h1 className='mt-[23px] text-center md:text-left text-[30px] font-semibold leading-[30px]'>{title}</h1>
            <p className='mt-[19.3px] w-auto text-justify text-lg font-medium leading-[30px] text-[#a6a6a6]'>{desc}</p>
        </div>
    )
}

export default CardServices
