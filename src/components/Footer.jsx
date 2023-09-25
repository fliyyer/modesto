import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Alamat email yang dimasukkan:', email);
        setEmail('');
    };
    return (
        <div>
            <div className='bg-[#161C28] py-8 md:py-12 px-4 md:px-12'>
                <div className='container mx-auto flex flex-col md:flex-row items-start justify-between'>
                    <div className='mb-6 md:mb-0'>
                        <img src={Logo} alt='' className='w-32' />
                        <p className='text-[#a6a6a6] text-lg font-bold mt-2'>
                            Get started now, try our product
                        </p>
                        <form onSubmit={handleSubmit} className='flex items-center mt-[37px] px-4 justify-between w-[300px] md:w-[457px] h-[60px] border border-[#a6a6a6] rounded-[70px]'>
                            <input
                                type='email'
                                placeholder='Enter your email here'
                                value={email}
                                onChange={handleEmailChange}
                                className='text-[#a6a6a6] font-bold bg-transparent text-lg w-3/4 outline-none'
                            />
                            <button type='submit' className='text-4xl text-[#0F8CE9] cursor-pointer' title='Submit'>
                                <BsFillArrowRightCircleFill />
                            </button>
                        </form>
                    </div>
                    <div className='text-[#a6a6a6] list-none text-lg font-bold'>
                        <h1 className='text-[#fff] mb-2'>Support</h1>
                        <ul className='space-y-2'>
                            <li>Help centre</li>
                            <li>Account information</li>
                            <li>About</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='text-[#a6a6a6] list-none text-lg font-bold'>
                        <h1 className='text-[#fff] mb-2'>Help and Solution</h1>
                        <ul className='space-y-2'>
                            <li>Talk to support</li>
                            <li>Support docs</li>
                        </ul>
                    </div>
                    <div className='text-[#a6a6a6] list-none text-lg font-bold'>
                        <h1 className='text-[#fff] mb-2'>Product</h1>
                        <ul className='space-y-2'>
                            <li>Update</li>
                            <li>Security</li>
                            <li>Beta Test</li>
                            <li>Pricing product</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-[#161C28] text-lg font-bold py-6 px-4 md:px-12 text-[#fff]'>
                <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <h1 className='mb-4 text-center md:text-left md:mb-0'>
                        © 2023 Modesto ERP. Copyright and rights reserved
                    </h1>
                    <div className='flex gap-8 md:gap-14'>
                        <a href='#' className='hover:underline'>
                            Terms and Conditions
                        </a>
                        <a href='#' className='hover:underline'>
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
