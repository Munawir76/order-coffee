import 'tailwindcss/tailwind.css'
/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import Image from 'next/image'
import logo from "./images/logo.png"
import Link from 'next/link'
import '@ant-design/icons'
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'

// #C78342 Muda
// #805336 tua


export default function Navigasi() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full bg-[#C78342] shadow" style={{ position: "fixed", zIndex: "1" }}>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between md:block">
                            <Link href="/">
                                <a>
                                    <Image src={logo} width={110} height={55} />
                                </a>
                            </Link>

                            <div className="sm:hidden">
                                <button
                                    className="p-2 text-[#C78342]-500 rounded-md outline-none focus:border-[#C78342]-500 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-[#C78342]-500"
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
                                            className="w-6 h-6 text-[#C78342]-500"
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
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >

                        <ul className="items-center justify-end space-y-4 md:flex md:space-x-0 md:space-y-0">
                            <li className="text-[#C78342] ">
                                <Link href="javascript:void(0)"><a className='text-black hover:text-white hover:bg-[#805336] pt-5 pb-5 px-5'>Menu</a></Link>
                            </li>
                            <li className="text-[#C78342] ">
                                <Link href="javascript:void(0)"><a className='text-black hover:text-white hover:bg-[#805336] pt-5 pb-5 px-5'>Promo</a></Link>
                            </li>
                            <li className="text-[#C78342] ">
                                <Link href="javascript:void(0)"><a className='text-black hover:text-white hover:bg-[#805336] pt-5 pb-5 px-5'>About</a></Link>
                            </li>
                            <li>
                                <ShoppingCartOutlined href="javascript:void(0)"
                                    className="text-black hover:text-white hover:bg-[#805336] pt-6 pb-6 px-6 ..."
                                />
                            </li>
                            <li>
                                <UserOutlined href="javascript:void(0)"
                                    className="text-black hover:text-white hover:bg-[#805336] pt-6 pb-6 px-6 ..."
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
};