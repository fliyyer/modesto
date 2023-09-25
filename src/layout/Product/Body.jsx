import React from 'react'
import Saas1 from '../../assets/saas1.png'
import Saas2 from '../../assets/saas2.svg'
import Saas3 from '../../assets/saas3.png'
import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'

const Body = () => {
    return (
        <div className='my-40 px-4 md:px-32 container mx-auto '>
            <h1 className='text-[#0F8CE9] text-[32px] font-bold text-center mt-[131px]'>SaaS</h1>
            <h1 className='text-[#242331] text-4xl pb-6 md:text-[50px] font-bold text-center mt-[56px]'>Experience the Future of Software with SaaS !</h1>
            <div className='flex flex-col md:flex-row items-center mt-4 md:mt-0'>
                <div className='w-[388px] text-center md:w-[auto] mb-8'>
                    <img src={Saas1} className='w-full' alt='' />
                    <h1 className='text-[30px] text-[#242331] font-bold mt-[43px]'>Anywhere, Anytime Access</h1>
                    <p className='text-[22px] text-[#797979] mt-[26px]'>
                        With SaaS, your tools and data are accessible from anywhere with an internet connection. Empower your team to work remotely, collaborate effortlessly, and stay productive on the go.
                    </p>
                </div>
                <div className='w-[453px] px-[47px] py-[77px] rounded-[40px] text-center md:w-[auto] mb-8'>
                    <img src={Saas2} className='w-full' alt='' />
                    <h1 className='text-[30px] text-[#242331] font-bold mt-[43px]'>Cost-Effective Scalability</h1>
                    <p className='text-[22px] text-[#797979] mt-[26px]'>
                        SaaS operates on a subscription model, eliminating hefty upfront costs. Pay only for what you need and scale your software as your business grows. It’s a budget-friendly approach that ensures you stay agile and adaptable.
                    </p>
                </div>
                <div className='w-[388px] text-center md:w-[auto]'>
                    <img src={Saas3} className='w-full' alt='' />
                    <h1 className='text-[30px] text-[#242331] font-bold mt-[43px]'>Seamless Updates and Security</h1>
                    <p className='text-[22px] text-[#797979] mt-[26px]'>
                        SaaS providers handle updates, security, and backups, keeping your software at its peak performance. You’ll always have access to the latest features and robust data protection without lifting a finger.
                    </p>
                </div>
            </div>
            {/* Product 2 */}
            <h1 className='text-[#0F8CE9] text-[32px] font-bold text-center mt-[131px]'>On Premise</h1>
            <h1 className='text-[#242331] text-4xl pb-6 md:text-[50px] font-bold text-center mt-[56px]'>Unleash Full Control with ERP On-Premise !</h1>
            <div className='flex flex-col md:flex-row items-center mt-4 md:mt-0'>
                <div className='w-[388px] text-center md:w-[auto] mb-8'>
                    <img src={Saas1} className='w-full' alt='' />
                    <h1 className='text-[30px] text-[#242331] font-bold mt-[43px]'>Complete Autonomy</h1>
                    <p className='text-[22px] text-[#797979] mt-[26px]'>
                        With ERP On-Premise, you have total control over your software and infrastructure. Tailor your ERP system to match your unique business processes and requirements, ensuring a perfect fit for your operations.
                    </p>
                </div>
                <div className='w-[453px] px-[47px] py-[77px] rounded-[40px] text-center md:w-[auto] mb-8'>
                    <img src={Saas2} className='w-full' alt='' />
                    <h1 className='text-[30px] text-[#242331] font-bold mt-[43px]'>Data Security at Its Best</h1>
                    <p className='text-[22px] text-[#797979] mt-[26px]'>
                        Keep your sensitive data safe and sound within the confines of your internal network. Benefit from top-tier security features and enjoy the peace of mind that comes with knowing your information is under your watchful eye.
                    </p>
                </div>
                <div className='w-[388px] text-center md:w-[auto]'>
                    <img src={Saas3} className='w-full' alt='' />
                    <h1 className='text-[30px] text-[#242331] font-bold mt-[43px]'>Reliability You Can Trust</h1>
                    <p className='text-[22px] text-[#797979] mt-[26px]'>
                        Count on consistent performance and accessibility with ERP On-Premise. Dependability is paramount, and our solution delivers with 99.9% uptime, ensuring your operations run smoothly.
                    </p>
                </div>
            </div>
            {/* Product 3 */}
            <h1 className='text-[#0F8CE9] text-[32px] font-bold text-center mt-[131px]'>VPS</h1>
            <h1 className='text-[#242331] text-4xl pb-6 md:text-[50px] font-bold text-center mt-[56px]'>Unleash the Power of Virtual Private Servers !</h1>
            <div className='flex flex-col md:flex-row items-center mt-4 md:mt-0'>
                <div className='w-[388px] text-center md:w-[auto] mb-8'>
                    <img src={Saas1} className='w-full' alt='' />
                    <h1 className='text-[30px] text-[#242331] font-bold mt-[43px]'>Dedicated Resources</h1>
                    <p className='text-[22px] text-[#797979] mt-[26px]'>
                        Our VPS hosting offers you dedicated resources, ensuring that your website or application gets the power it deserves. No sharing with other users means consistent and high-speed performance for your online
                    </p>
                </div>
                <div className='w-[453px] px-[47px] py-[77px] rounded-[40px] text-center md:w-[auto] mb-8'>
                    <img src={Saas2} className='w-full' alt='' />
                    <h1 className='text-[30px] text-[#242331] font-bold mt-[43px]'>Scalability on Demand</h1>
                    <p className='text-[22px] text-[#797979] mt-[26px]'>
                        With VPS, you have the flexibility to scale your resources up or down as your needs change. Whether you’re experiencing growth or a temporary surge in traffic, VPS adapts to keep your online presence running smoothly.
                    </p>
                </div>
                <div className='w-[388px] text-center md:w-[auto]'>
                    <img src={Saas3} className='w-full' alt='' />
                    <h1 className='text-[30px] text-[#242331] font-bold mt-[43px]'>Enhanced Security</h1>
                    <p className='text-[22px] text-[#797979] mt-[26px]'>
                        Security is a top priority, and VPS provides an isolated and secure environment for your data. Enjoy peace of mind knowing that your website or application is shielded from the risks associated with shared hosting.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Body
