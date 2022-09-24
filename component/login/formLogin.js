import { Col, message, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Back from '../../public/images/foster1.jpg';
import Logo from '../../public/images/logo.png';
import Router, { useRouter } from 'next/router';
import 'antd/dist/antd.css'; 0
import 'tailwindcss/tailwind.css';
import '@ant-design/icons';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


export default function FormLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()


    //calling api
    const dataLogin = async () => {
        try {
            const valueForm = {
                email: email,
                password: password
            }
            console.log(valueForm)


            const sentData = await axios.post('https://ordercoffee-app.herokuapp.com/auth/login', valueForm, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                console.log(res, 'ini res login');
                const decode = jwt_decode(res.data.token)
                // console.log(decode, 'ini decode')
                // console.log(res.data.statusCode)
                if (decode.role == "Admin") {
                    localStorage.setItem('tokenAdmin', res.data.token)
                    message.success("Login successfull")
                    // message.success("Login successfull")
                    router.push('admin/dashboard')
                }

                else if (decode.role == "Customer") {
                    localStorage.setItem('tokenCustomer', res.data.token)
                    message.success("Login successfull")
                    router.push("/home")
                }
                else {
                    message.error("Email atau password salah")

                }

            })

        } catch (error) {
            message.error("Email atau password salah")
            // console.error(error);

        }

    }

    async function validateAdmin() {
        try {

            const tokenAdmin = await localStorage.getItem('tokenAdmin')
            const decodeAdmin = jwt_decode(tokenAdmin)

            if (decodeAdmin) {
                message.error("Anda sudah login")
                router.back()
            }

        } catch (error) {
            console.error(error, 'ini erornya');
        }
    }

    async function validateCustomer() {
        try {
            const tokenCustomer = await localStorage.getItem('tokenCustomer')
            const decodeCustomer = jwt_decode(tokenCustomer)

            if (decodeCustomer) {
                message.error("Anda sudah login")
                router.back()
            }

        } catch (error) {
            console.error(error, 'ini erornya');
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

    useEffect(() => {
        validateCustomer()
        validateAdmin()

    }, []);


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




