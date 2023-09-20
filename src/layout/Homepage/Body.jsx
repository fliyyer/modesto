import React from 'react'
import CardServices from '../../components/CardServices'
import Descript from '../../assets/descript.png'
import Grammarly from '../../assets/grammarly.png'
import Intercom from '../../assets/intercom.png'
import Notion from '../../assets/notion.png'
import Unsplash from '../../assets/unsplash.png'

const Body = () => {
    return (
        <div className='my-40 px-4 md:px-32 '>
            <div className='flex justify-center items-center gap-[111px]'>
                <div>
                    <h1 className='text-[#191A15] text-[50px] font-semibold'>The Only <span className='text-[#2D7FE2]'>All In One</span> Tool To support you all over the world</h1>
                    <p className='text-[#A6A6A6] text-lg font-medium leading-[30px]'>Introducing Modesto ERP, your ultimate tool for seamless enterprise resource planning. Our ERP system is designed to revolutionize the way you do business, offering efficiency, precision, and unparalleled insight.</p>
                </div>
                <div>
                    <h1 className='text-[#191A15] text-[28px] font-bold'>Vision</h1>
                    <p className='text-[#A6A6A6] text-lg mt-[14.7px] font-medium leading-[30px]'>ERP (Enterprise Resource Planning) is to unify and integrate all aspects of a company’s operations into one centralized system to enhance efficiency, decision-making, and competitiveness.</p>
                    <h1 className='text-[#191A15] text-[28px] font-bold'>Mision</h1>
                    <p className='text-[#A6A6A6] text-lg mt-[14.7px] font-medium leading-[30px]'>ERP (Enterprise Resource Planning) is to integrate, automate, and enhance the efficiency of a company’s business processes to support better decision-making and improve competitiveness.
                    </p>
                </div>
            </div>
            <div className='flex items-center mt-[86px] justify-between'>
                <h1 className='text-[#191A15] text-[50px] font-semibold'>Our Product <br /> you can get</h1>
                <h1 className='text-[#000] text-[32px] text-right leading-[52px] font-semibold'>Unlock Business Excellence with Our <br /> Cutting-Edge ERP Solution !</h1>
            </div>
            <div className='flex mt-[73px] gap-[20px] justify-center items-center'>
                <CardServices title='SaaS' desc='Experience the Future of Software with SaaS!' />
                <CardServices title='On Premise' desc='Unleash Full Control with ERP On-Premise!' />
                <CardServices title='Virtual Private Server' desc='Unleash the Power of Virtual Private Servers. ' />
            </div>
            <div className='flex mt-[171px] gap-[128px] items-center'>
                <div>
                    <h1 className='text-[#191A15] text-[50px] font-semibold w-[537px] '>You Will Get The Best Services.</h1>
                    <p className='text-[#A6A6A6] text-lg mt-9 font-medium leading-[30px]'>We offer a variety of interesting features that you can help<br /> increase yor productivity at work and manage your projrct esaly</p>
                </div>
                <div className='w-[659px] bg-[#000] h-[379px] rounded-[21px]'>
                </div>
            </div>
            <h1 className='text-[#191A15] text-[40px] my-[120px] text-center font-bold'>Our Clients</h1>
            <div className='flex justify-center items-center gap-[50px]'>
                <img src={Unsplash} alt="" />
                <img src={Notion} alt="" />
                <img src={Intercom} alt="" />
                <img src={Descript} alt="" />
                <img src={Grammarly} alt="" />
            </div>
            <div className='flex mt-[62px] justify-center items-center gap-[50px]'>
                <img src={Unsplash} alt="" />
                <img src={Notion} alt="" />
                <img src={Intercom} alt="" />
                <img src={Descript} alt="" />
                <img src={Grammarly} alt="" />
                <img src={Unsplash} alt="" />
            </div>
        </div>
    )
}

export default Body
