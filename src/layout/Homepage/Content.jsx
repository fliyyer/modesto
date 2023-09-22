import React from 'react';
import Descript from '../../assets/descript.png';
import Grammarly from '../../assets/grammarly.png';
import Intercom from '../../assets/intercom.png';
import Notion from '../../assets/notion.png';
import Unsplash from '../../assets/unsplash.png';

const Content = () => {
    return (
        <div className='py-8 md:py-44'>
            <div className='flex px-8 md:px-0 flex-col md:flex-row gap-4 md:gap-[128px] justify-center items-center'>
                <div className='text-center md:text-left'>
                    <h1 className='text-[#191A15] text-2xl md:text-4xl font-semibold md:w-[537px]'>
                        You Will Get The Best Services.
                    </h1>
                    <p className='text-[#A6A6A6] text-lg md:text-base mt-4 md:w-[537px] font-medium leading-[30px]'>
                        We offer a variety of interesting features that can help you increase your productivity at work and manage your projects easily.
                    </p>
                </div>
                <img className='w-full md:w-[659px] shadow-lg h-[300px] md:h-[379px] rounded-[21px]' src='https://img.freepik.com/free-vector/flat-design-erp-illustration_23-2149380376.jpg?size=626&ext=jpg&ga=GA1.1.1072936628.1691926504&semt=sph' alt='' />
            </div>
            <h1 className='text-[#191A15] text-2xl md:text-4xl my-4 md:my-[120px] text-center font-bold'>
                Our Clients
            </h1>
            <div className='flex flex-wrap justify-center items-center gap-4 md:gap-[50px]'>
                <img src={Unsplash} alt='' />
                <img src={Notion} alt='' />
                <img src={Intercom} alt='' />
                <img src={Descript} alt='' />
                <img src={Grammarly} alt='' />
            </div>
            <div className='flex flex-wrap mt-4 md:mt-[62px] justify-center items-center gap-4 md:gap-[50px]'>
                <img src={Unsplash} alt='' />
                <img src={Notion} alt='' />
                <img src={Intercom} alt='' />
                <img src={Descript} alt='' />
                <img src={Grammarly} alt='' />
                <img src={Unsplash} alt='' />
            </div>
        </div>
    );
};

export default Content;
