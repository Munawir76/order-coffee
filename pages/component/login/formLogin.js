import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import React from 'react';
import Image from 'next/image'
import Back from '../images/foster1.jpg'
import Logo from '../images/logo.png'
import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import '@ant-design/icons'


export default function FormLogin() {


    return (
        <div>
            <Row justify='center' align='middle' className="h-screen bg-[#C78342]">
                <Col span={18} >
                    <div className="flex justify-center">
                        <div className="flex flex-col md:flex-row  rounded-lg bg-white shadow-lg">
                            <Image src={Back} height={300} width={400} />
                            <div className="p-6 flex flex-col justify-start">
                                <div className="block p-6 rounded-lg bg-white max-w-sm">
                                    <form>
                                        <div className="form-group mb-6">
                                            <Row justify='center'>
                                                <Col span={10}>
                                                    <Image src={Logo} layout="responsive" />
                                                </Col>
                                            </Row>
                                            <div>
                                                <h2 className='text-center text-lg font-bold p-5'
                                                >WELCOME</h2>
                                            </div>
                                            <input
                                                type="email"
                                                className="form-control
                                                    block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-base
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-[#C78342]
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-700 focus:bg-white focus:border-[#C78342] focus:outline-[#C78342]"
                                                id="exampleInputEmail2"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter email"
                                            />
                                        </div>
                                        <div className="form-group mb-6">
                                            <input
                                                type="password"
                                                className="form-control block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-[#C78342]
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-[#C78342] focus:outline-[#C78342]"
                                                id="exampleInputPassword2"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="flex justify-end items-center mb-10">
                                            <button
                                                type="submit"
                                                className="
                                                w-30
                                                px-6
                                                py-2.5
                                                bg-[#C78342]
                                                text-white
                                                font-medium
                                                text-xs
                                                leading-tight
                                                rounded
                                                shadow-md
                                                hover:bg-[#C78342] hover:shadow-lg
                                                focus:bg-[#C78342] focus:shadow-lg focus:outline-none focus:ring-0
                                                active:bg-[#C78342] active:shadow-lg
                                                transition
                                                duration-150
                                                ease-in-out"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <p className="text-gray-800 mt-6 text-center">
                                            Create Account ?{" "}
                                            <a
                                                href="/regist/"
                                                className="text-[#C78342] hover:text-[#C78342] focus:text-[#C78342] transition duration-200 ease-in-out"
                                            >
                                                Register
                                            </a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};




