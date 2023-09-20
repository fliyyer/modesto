import React from 'react';

const Header = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex flex-col text-center justify-center items-center gap-[50px]'>
                <h1 className='text-[#242331] font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[110%]'>Products</h1>
                <p className='text-[#797979] leading-[30px] md:text-lg mt-3 md:mt-5'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit<br />
                    interdum ullamcorper sed pharetra sene.
                </p>
            </div>
        </div>
    );
};

export default Header;
