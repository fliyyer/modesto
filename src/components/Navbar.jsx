import { useState } from "react";
import Logo from '../assets/Logo.png'
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to='/'>
                            <img src={Logo} alt="Modesto" className="w-60 md:w-[316px]  h-[61px]" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-10 md:flex md:space-x-8 md:space-y-0">
                            <Link to="/">
                                <li className={`font-bold hover:text-[#000] ${location.pathname === '/' ? 'text-[#000]' : 'text-[#a6a6a6]'}`}>
                                    Home
                                </li>
                            </Link>
                            <Link to="/">
                                <li className={`font-bold hover:text-[#000] ${location.pathname === '/about' ? 'text-[#000]' : 'text-[#a6a6a6]'}`}>
                                    About Us
                                </li>
                            </Link>
                            <Link to="/product">
                                <li className={`font-bold hover:text-[#000] ${location.pathname === '/product' ? 'text-[#000]' : 'text-[#a6a6a6]'}`}>
                                    Product
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li className={`font-bold hover:text-[#000] ${location.pathname === '/contact' ? 'text-[#000]' : 'text-[#a6a6a6]'}`}>
                                    Contact Us
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
