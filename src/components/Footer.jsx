import React from 'react'
import Logo from '../assets/Logo.png'

const Footer = () => {
    return (
        <><div className='bg-[#797979] flex justify-between py-[47px] px-[139px]'>
            <div>
                <img src={Logo} alt="" />
                <p className='text-[#a6a6a6] text-lg font-bold'>Get started noew try our product</p>
            </div>
            <div className='text-[#a6a6a6] list-none text-lg font-bold'>
                <li className='text-[#fff]'>Support</li>
                <ul className='space-y-5 mt-[30px]'>
                    <li>Help centre</li>
                    <li>Account information</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='text-[#a6a6a6] list-none text-lg font-bold'>
                <h1 className='text-[#fff]'>Help and Solution</h1>
                <ul className='space-y-5 mt-[30px]'>
                    <li>Talk to support</li>
                    <li>Support docs</li>
                </ul>
            </div>
            <div className='text-[#a6a6a6] list-none text-lg font-bold'>
                <h1 className='text-[#fff]'>Product</h1>
                <ul className='space-y-5 mt-[30px]'>
                    <li>Update</li>
                    <li>Security</li>
                    <li>Beta Test</li>
                    <li>Pricing product</li>
                </ul>
            </div>
        </div><div className='bg-[#797979] text-lg font-bold pb-6 px-[139px] text-[#fff] flex justify-between '>
                <h1>© 2023 Modesto ERP. Copyright and rights reserved</h1>
                <div className='flex gap-14'>
                    <h1>Terms and Condtions</h1>
                    <p>Privacy Policy</p>
                </div>
            </div></>
    )
}

export default Footer
