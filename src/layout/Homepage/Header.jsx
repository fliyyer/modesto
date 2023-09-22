import React from 'react';

const Header = () => {
    return (
        <div className="my-10 md:my-40 px-4 md:px-32 ">
            <div className="flex flex-col lg:flex-row items-center px-4 lg:px-32">
                <div className="lg:w-1/2">
                    <h1 className="text-[#191A15] md:leading-[90px] lg:w-[555px] text-[32px] md:text-[48px] lg:text-[80px] font-bold">
                        We’re here to Increase your Business
                    </h1>
                    <div className="border-b-4 mt-6 lg:mt-[29px] w-[150px] md:w-[200px] lg:w-[533px] border-[#000]"></div>
                    <p className="text-base md:text-lg lg:text-base xl:text-lg w-[100%] lg:w-[461px] text-[#000] font-bold leading-[24px] mt-6 lg:mt-[63px]">
                        Lets make your work more organized and easy using Modesto ERP with many of the latest features in managing work every day.
                    </p>
                    <div className="mt-6 lg:mt-16 flex flex-col lg:flex-row gap-4">
                        <button className="bg-[#000] text-white font-bold py-3 px-6 md:px-8 lg:px-[35px] rounded-[40px]">
                            Contact Us
                        </button>
                        <button className="text-[#191A15] font-bold flex items-center gap-2 py-3 px-6 md:px-8 lg:px-[35px] rounded-[40px] mt-4 lg:mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.9998 1.16669C25.743 1.16669 32.8332 8.25527 32.8332 17C32.8332 25.7448 25.743 32.8334 16.9998 32.8334C8.25509 32.8334 1.1665 25.7448 1.1665 17C1.1665 8.25527 8.25509 1.16669 16.9998 1.16669Z" stroke="#191A15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.9998 16.9919C21.9998 15.64 15.0707 11.3152 14.2847 12.0928C13.4987 12.8705 13.4231 21.0401 14.2847 21.891C15.1463 22.7449 21.9998 18.3438 21.9998 16.9919Z" stroke="#191A15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            View Demo
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 mt-6 lg:mt-0">
                    <img className="w-full" src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.2.1072936628.1691926504&semt=sph" alt="" />
                </div>
            </div>
        </div>


    );
};

export default Header;
