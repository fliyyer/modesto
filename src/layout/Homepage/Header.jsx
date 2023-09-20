import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-1/2'>
                <h1 className='text-[#191A15] leading-[90px] text-[80px] font-bold'>
                    We’re here to Increase your <span className='text-[#2D7FE2]'>Business</span>
                </h1>
                <div className='border-b-8 mt-[29px] w-[533px] border-[#2D7FE2]'></div>
                <p className='text-lg w-[461px] text-[#000] font-bold leading-[30px] mt-[63px]'>
                    Lets make your work more organize and easy using the Modesto ERP with many of the latest features in managing work every day.
                </p>
                <div className='mt-16 flex gap-[46px]'>
                    <button className='bg-[#2D7FE2] text-white font-bold py-4 px-[30px] rounded-[40px]'>Contact Us</button>
                    <button className=' text-[#191A15] font-bold flex items-center gap-[14px] py-4 px-[30px] rounded-[40px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.9998 1.16669C25.743 1.16669 32.8332 8.25527 32.8332 17C32.8332 25.7448 25.743 32.8334 16.9998 32.8334C8.25509 32.8334 1.1665 25.7448 1.1665 17C1.1665 8.25527 8.25509 1.16669 16.9998 1.16669Z" stroke="#191A15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.9998 16.9919C21.9998 15.64 15.0707 11.3152 14.2847 12.0928C13.4987 12.8705 13.4231 21.0401 14.2847 21.891C15.1463 22.7449 21.9998 18.3438 21.9998 16.9919Z" stroke="#191A15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        View Demo
                    </button>
                </div>
            </div>
            <div className='w-[488px] h-[634px] bg-[#d9d9d9] rounded-[36px] flex justify-center items-center'>
                Di Isi Apa
            </div>
        </div>
    );
};

export default Header;
