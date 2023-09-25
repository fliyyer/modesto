/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CardServices from "../../components/CardServices";

const Body = () => {
    return (
        <div className="container mx-auto px-4 md:px-28 pt-24">
            <div className="flex  items-center gap-[111px]">
                <div className="flex flex-col md:flex-row items-center mt-[86px] justify-center">
                    <h1 className="text-[#191A15] whitespace-nowrap w-1/2 text-4xl md:text-[50px] font-semibold text-center md:text-left">
                        Our Product <br /> you can get
                    </h1>
                    <h1 className="text-[#000] w-1/2 text-lg md:text-3xl text-center md:text-right leading-[52px] font-semibold mt-4 md:mt-0">
                        Unlock Business Excellence with Our Cutting-Edge ERP Solution!
                    </h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-[73px] md:mt-0 gap-[50px] justify-center items-center">
                <CardServices
                    img="https://img.freepik.com/free-vector/abstract-technology-saas-illustration_23-2149227346.jpg?size=626&ext=jpg&ga=GA1.1.1072936628.1691926504&semt=sph"
                    title="SaaS"
                    desc="Experience the Future of Software with SaaS!"
                />
                <CardServices
                    img='https://img.freepik.com/free-vector/edge-computing-abstract-concept-illustration_335657-3890.jpg?size=626&ext=jpg&ga=GA1.1.1072936628.1691926504&semt=ais'
                    title="On Premise"
                    desc="Unleash Full Control with ERP On-Premise!"
                />
                <CardServices
                    img='https://img.freepik.com/premium-vector/business-investment-safe_18660-1367.jpg?size=626&ext=jpg&ga=GA1.1.1072936628.1691926504&semt=ais'
                    title="Virtual Private Server"
                    desc="Unleash the Power of Virtual Private Servers."
                />
            </div>
        </div>
    );
};

export default Body;
