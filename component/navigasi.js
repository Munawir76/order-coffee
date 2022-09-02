import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.variable.min.css'
/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from "../public/images/logo.png"
import Link from 'next/link'
import { useRouter } from "next/router";
import { Dropdown, Menu, message, Space, ConfigProvider } from 'antd';
import { UserOutlined, ShoppingCartOutlined, LogoutOutlined, SwapOutlined } from '@ant-design/icons'
import jwt_decode from 'jwt-decode';
import axios from 'axios'


// #C78342 Muda
// #805336 tua

export default function Navigasi() {

    ConfigProvider.config({
        theme: {
            primaryColor: '#C78342',
        },
    });

    const [navbar, setNavbar] = useState(false);
    const [fullName, setFullName] = useState()
    const [logged, setLogged] = useState()

    const [transaction, setTransaction] = useState([])
    const [findIdUser, setFinIdUser] = useState([])
    const router = useRouter();

    async function validate() {
        try {

            const getToken = localStorage.getItem("tokenCustomer")
            const decode = jwt_decode(getToken)
            console.log(decode.id, 'ini decode cari id');
            setFullName(decode?.fullname)
            setFinIdUser(decode?.id)
            await axios.get('https://ordercoffee-app.herokuapp.com/users', {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                console.log(res.data.items, 'ini ress navigasi');
                setTransaction(res.data.items)
                if (getToken) {
                    setLogged(true)
                } else {
                    setLogged(false)
                }
            })

        } catch (error) {
            console.error(error, 'ini erornya');
        }
    }
    // console.log(fullName, 'ini fullname')

    async function buttonLogout() {
        try {
            localStorage.clear()
            message.info('Logout successfull')
            message.info('Logout successfull')
            // message.info('Logout successfull')
            router.push("/")
        } catch (error) {

        }
    }
    async function buttonTr() {
        try {
            router.push(`/transaksi/${findIdUser}`)
        } catch (error) {

        }
    }

    // const transactionId = transaction.map((dataTr) => {
    //     const filterFind = findIdUser.find((data) => data?.id == dataTr?.id)
    //     return filterFind
    // })

    // console.log(transactionId, 'ini hasil find tr');
    const menu = (
        <Menu
            style={{ hoverBackground: 'white' }}
            items={[
                {
                    label: fullName,
                    icon: <UserOutlined twoToneColor="rgba(145, 69, 25, 0.8)" />,
                },
                {
                    label: 'Transaksi',
                    icon: <SwapOutlined />,
                    onClick: buttonTr
                },
                {
                    label: 'Logout',
                    icon: <LogoutOutlined />,
                    onClick: buttonLogout
                },

            ]}
        />
    );
    useEffect(() => {

        validate()

    }, []);
    return (
        <div>
            <nav className="w-full bg-[#C78342] shadow fixed-top h-16" >
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between md:block">
                            <Link href="/home/">
                                <a>
                                    <Image src={logo} width={110} height={55} />
                                </a>
                            </Link>

                            <div className="sm:hidden">
                                <button
                                    className="p-2 text-white rounded-md outline-none focus:border-[#C78342]-500 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
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
                                            className="w-6 h-6 text-white"
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
                                <Link href="/home/"><a className='text-black hover:text-white hover:bg-[#805336] active:bg-[#805336] pt-5 pb-5 px-5'>Home</a></Link>
                            </li>
                            <li className="text-[#C78342] ">
                                <Link href="/menu/"><a className='text-black hover:text-white hover:bg-[#805336] active:bg-[#805336] pt-5 pb-5 px-5'>Menu</a></Link>
                            </li>
                            <li className="text-[#C78342] ">
                                <Link href="/promo/"><a className='text-black hover:text-white hover:bg-[#805336] active:bg-[#805336] pt-5 pb-5 px-5'>Promo</a></Link>
                            </li>
                            <li className="text-[#C78342] ">
                                <Link href="/about/"><a className='text-black hover:text-white hover:bg-[#805336] active:bg-[#805336] pt-5 pb-5 px-5'>About</a></Link>
                            </li>
                            <li>
                                <Link href="/cart/"><ShoppingCartOutlined className="text-black hover:text-white hover:bg-[#805336] pt-6 pb-6 px-6 ..." /></Link>
                            </li>
                            <li>
                                {logged ? <Space wrap>
                                    <Dropdown overlay={menu}>
                                        <Space>
                                            <UserOutlined className="text-black hover:text-white hover:bg-[#805336] pt-6 pb-6 px-6 ..." />
                                        </Space>
                                    </Dropdown>

                                </Space> : <p></p>}
                            </li>

                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
};
