import { Col, Row } from 'antd';
import React, { useState } from 'react';
import Image from 'next/image'
import Back from '../../public/images/foster1.jpg'
import Logo from '../../public/images/logo.png'
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import '@ant-design/icons'


export default function FormLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()


    const dataLogin = async () => {
        try {
            const valueForm = {
                email: email,
                password: password
            }
            console.log(valueForm)
            const sentData = await axios.post('https://42cc-2001-448a-2062-2ea0-3563-6d98-637c-3153.ngrok.io/auth/login', valueForm, {
                headers: "application/json"
            }).then(res => {
                console.log(res.status)
                if (res.status == 201 || res.status == 200) {
                    window.alert("Login Berhasil")
                    // tinggal routing mau kemana arahnya
                    router.push("/home")
                }
            })

        } catch (error) {

        }

    }


    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }
    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <Row justify='center' align='middle' className="h-screen bg-[#C78342]">
                <Col span={18} >
                    <div className="flex justify-center">
                        <div className="flex flex-col md:flex-row  rounded-lg bg-white shadow-lg">
                            <Image src={Back} height={300} width={400} />
                            <div className="p-6 flex flex-col justify-start">
                                <div className="block p-6 rounded-lg bg-white max-w-sm">
                                    <form onSubmit={onFormSubmit}>
                                        <div className="form-group mb-6">
                                            <Row justify='center'>
                                                <Col span={10}>
                                                    <Image src={Logo} layout="responsive" />
                                                </Col>
                                            </Row>
                                            <div>
                                                <h2 className='text-center text-lg font-bold p-5'>WELCOME</h2>
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
                                                // id="exampleInputEmail2"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter email"
                                                value={email} onChange={onChangeEmail}
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
                                                // id="exampleInputPassword2"
                                                placeholder="Password"
                                                value={password} onChange={onChangePassword}
                                            />
                                        </div>
                                        <div className="flex justify-end items-center mb-10">
                                            <button
                                                type="submit"
                                                onClick={dataLogin}
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
                                            Create Account ? {" "}
                                            <a
                                                href="/regist/"
                                                className="text-[#C78342] focus:text-[#C78342] hover:text-[#C78342] transition duration-200 ease-in-out"
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




