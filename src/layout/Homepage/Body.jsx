/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CardServices from "../../components/CardServices";


const Body = () => {
    return (
        <div className="my-40 px-4 md:px-32 ">
            <div className="flex justify-center items-center gap-[111px]">
            </div>
            <div className="flex items-center mt-[86px] justify-center">
                <h1 className="text-[#191A15] w-1/2 text-[50px] font-semibold">
                    Our Product <br /> you can get
                </h1>
                <h1 className="text-[#A6A6A6] w-1/2 text-lg text-left leading-[30px] lg:w-[518px] font-medium">
                    We offer a variety of interesting features that you can help increase
                    yor productivity at work and manage your projrct esaly
                </h1>
            </div>
            <div className="flex mt-[73px] gap-[50px] justify-center items-center">
                <CardServices
                    img="https://img.freepik.com/free-vector/abstract-technology-saas-illustration_23-2149227346.jpg?size=626&ext=jpg&ga=GA1.1.1072936628.1691926504&semt=sph"
                    title="SaaS"
                    desc="SaaS is a software delivery model where applications are hosted and accessed via the internet. Users dont need to install or manage software locally, as everything is hosted and managed by the SaaS provider"
                />
                <CardServices
                    img='https://img.freepik.com/free-vector/edge-computing-abstract-concept-illustration_335657-3890.jpg?size=626&ext=jpg&ga=GA1.1.1072936628.1691926504&semt=ais'
                    title="On Premise"
                    desc="On Premise refers to a model in which software or systems are installed and run locally on a company or organization infrastructure. This means the company is responsible for maintaining, securing, and maintaining the hardware and software itself."
                />
                <CardServices
                    img='https://img.freepik.com/premium-vector/business-investment-safe_18660-1367.jpg?size=626&ext=jpg&ga=GA1.1.1072936628.1691926504&semt=ais'
                    title="Virtual Private Server"
                    desc="VPS is a form of hosting that allows users to have a virtual server environment running on a shared physical server with clear resource separation. This provides more control and flexibility than shared hosting but still shares the physical server with other users."
                />
            </div>

        </div>
    );
};

export default Body;
