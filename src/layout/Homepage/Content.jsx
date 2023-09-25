import React from 'react';

import Imgsrv from '../../assets/imgsrv.png';

const Content = () => {
    const clientNames = [
        'Boncafe Grup',
        'Le Cafe Gourmand Group',
        'Gajamada Swalayan',
        'Pemkab Mojokerto',
        'PT. Pink Sevices Indonesia',
        'PT. Relindo Multi Cipta',
        'PT. Performa Optima Group',
        'PT. Pakuwon Jati TBK',
        'Universitas 17 Agustus',
    ];
    return (
        <div className='py-8 md:py-44 container mx-auto'>
            <div className='flex px-8 md:px-0 flex-col md:flex-row gap-4 md:gap-[128px] justify-center items-center'>
                <div className='text-center md:text-left'>
                    <h1 className='text-[#191A15] text-2xl md:text-4xl font-semibold md:w-[537px]'>
                        You Will Get The Best Services.
                    </h1>
                    <p className='text-[#A6A6A6] text-lg md:text-base mt-4 md:w-[537px] font-medium leading-[30px]'>
                        We offer a variety of interesting features that can help you increase your productivity at work and manage your projects easily.
                    </p>
                </div>
                <img className='w-full md:w-[659px] shadow-lg h-[300px] md:h-[379px] rounded-[21px]' src={Imgsrv} alt='Services' />
            </div>
            <h2 className="text-[40px] font-bold text-center mt-32 text-[#191A15] mb-4">Our Clients</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 px-4 md:px-0 gap-10">
                {clientNames.map((name, index) => (
                    <div key={index} className="flex justify-center items-center bg-white text-[#A6A6A6] text-lg md:text-2xl p-4 rounded-lg shadow-md">
                        <p className="text-center font-semibold">{name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;
