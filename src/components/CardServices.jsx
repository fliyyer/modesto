import React from 'react';

const CardServices = (props) => {
    const { title, desc, img } = props;
    return (
        <div className='w-full md:w-[309px] h-[auto] md:h-[434px] rounded-2xl'>
            <img className='w-full h-[200px] md:h-[309px] object-cover rounded-t-2xl' src={img} alt="" />
            <div className='p-4'>
                <h1 className='text-center md:text-left text-xl md:text-2xl font-semibold leading-[36px] text-[#191A15]'>{title}</h1>
                <p className='mt-2 md:mt-4 md:text-justify text-base md:text-lg text-center font-medium leading-[30px] text-[#a6a6a6]'>{desc}</p>
            </div>
        </div>
    );
};

export default CardServices;
