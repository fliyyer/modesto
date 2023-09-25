import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto py-48 flex justify-center items-center'>
            <div className='flex flex-col text-center justify-center items-center gap-[50px]'>
                <h1 className='text-[#242331] font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[110%]'>Products</h1>
                <p className='text-[#797979] leading-[30px] md:text-lg mt-3 md:mt-5'>
                    Optimize your business with integrated ERP software. Manage HR, finance, production, and more in one efficient solution.<br /> Enhance performance and coordination for greater business success.
                </p>
            </div>
        </div>
    );
};

export default Header;
