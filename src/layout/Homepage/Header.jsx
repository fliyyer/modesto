import React from 'react';
import ImgHeader from '../../assets/header.png';


const Header = () => {
    return (
        <div className="container mx-auto px-4 md:px-28 pt-24">
            <div className="flex flex-col gap-7 md:gap-52 justify-between lg:flex-row items-center px-4">
                <div className="lg:w-1/2">
                    <h1 className="text-[#191A15] md:leading-[90px] lg:w-[555px] text-[24px] md:text-[32px] lg:text-[48px] xl:text-[64px] font-bold">
                        We’re here to Increase your <span className='text-[#2D7FE2]'>Business</span>
                    </h1>
                    <div className="border-b-4 md:border-b-8 mt-4 md:mt-6 lg:mt-8 rounded-2xl w-[100px] md:w-[150px] lg:w-[200px] border-[#0F8CE9]"></div>
                    <p className="text-base md:text-lg lg:text-base xl:text-lg w-full md:w-[400px] lg:w-[461px] text-[#000] font-bold leading-[20px] mt-4 md:mt-6 lg:mt-8">
                        Lets make your work more organized and easy using Modesto ERP with many of the latest features in managing work every day.
                    </p>
                    <div className="mt-4 md:mt-6 lg:mt-8 flex flex-col md:flex-row gap-2 md:gap-4">
                        <button className="bg-[#2D7FE2] text-white font-bold py-2 px-4 md:py-3 md:px-6 lg:px-[35px] rounded-[40px]">
                            Contact Us
                        </button>
                        <button className="text-[#191A15] font-bold justify-center flex items-center gap-2 py-1 px-4 md:py-2 md:px-6 lg:px-[35px] rounded-[40px] mt-2 md:mt-0">

                            View Demo
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img className="w-full h-[622px]" src={ImgHeader} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
