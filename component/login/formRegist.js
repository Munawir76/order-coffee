import { Col, Row } from 'antd';
import { React, useState } from 'react';
import Image from 'next/image'
import Back from '../../public/images/foster1.jpg'

import Router, { useRouter } from 'next/router';
import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import '@ant-design/icons'
import axios from 'axios';



export default function FormLogin() {

    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [roleId, setRoleId] = useState('2')
    const router = useRouter()

    const dataRegister = async () => {
        try {
            const valueForm = {
                email: email,
                fullName: fullName,
                phone: phone,
                password: password,
                roleId: roleId
            }
            console.log(valueForm)
            const sentData = await axios.post("https://42cc-2001-448a-2062-2ea0-3563-6d98-637c-3153.ngrok.io/auth/register", valueForm, {
                headers: "application/json"
            }).then(res => {
                console.log(res.status)
                if (res.status == 200) {
                    window.alert("daftar berhasil")
                }
                if (res.status == 200 || res.status == 201) {
                    window.alert("Register Success")
                    router.push("/login/")
                }
            })
        } catch (error) {

        }
    }


    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }
    const onChangeFullName = (e) => {
        const value = e.target.value
        setFullName(value)
    }
    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }
    const onChangePhone = (e) => {
        const value = e.target.value
        setPhone(value)
    }
    const onChangeRoleId = (e) => {
        const value = e.target.value
        setRoleId(value)
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
                            <Image src={Back} height={200} width={500} />
                            <div className="p-6 flex flex-col justify-start">
                                <div className="block p-6 rounded-lg bg-white max-w-sm">
                                    <form method="POST" onSubmit={onFormSubmit}>
                                        <div className="form-group mb-2">
                                            <div className="">
                                                <h2 className='text-start text-lg font-bold mb-5'>Register</h2>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label
                                                    // htmlFor="exampleInputEmail2"
                                                    className="form-label inline-block mb-1 text-black font-light font-sans"
                                                >
                                                    Input Name
                                                </label>
                                                <input
                                                    type="text"
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
                                                    // id="exampleInputName2"
                                                    aria-describedby="nameHelp"
                                                    placeholder="Full Name"
                                                    value={fullName} onChange={onChangeFullName}
                                                />
                                            </div>
                                            {/* <div className="form-group mb-4">
                                                <label
                                                    htmlFor="exampleInputEmail2"
                                                    className="form-label inline-block mb-1 text-black font-light font-sans"
                                                >
                                                    Date of birth
                                                </label>
                                                <input
                                                    type="date"
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
                                                    placeholder="Date of birth"
                                                />
                                            </div> */}
                                            <div className="form-group mb-4">
                                                <label
                                                    // htmlFor="exampleInputEmail2"
                                                    className="form-label inline-block mb-1 text-black font-light font-sans"
                                                >
                                                    Input Email
                                                </label>
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
                                                    bg-white bg-clip-paddings
                                                    border border-solid border-[#C78342]
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-700 focus:bg-white focus:border-[#C78342] focus:outline-[#C78342]"
                                                    // id="exampleInputEmail2"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Email"
                                                    value={email} onChange={onChangeEmail}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label
                                                // htmlFor="exampleInputEmail2"
                                                className="form-label inline-block mb-1 text-black font-light font-sans"
                                            >
                                                Input Phone
                                            </label>
                                            <input
                                                type="text"
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
                                                // id="exampleInputPassword2"
                                                placeholder="Phone"
                                                value={phone} onChange={onChangePhone}
                                            />

                                        </div>
                                        <div className="form-group mb-4">
                                            <label
                                                // htmlFor="exampleInputEmail2"
                                                className="form-label inline-block mb-1 text-black font-light font-sans"
                                            >
                                                Input Password
                                            </label>
                                            <input
                                                type="password"
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
                                                // id="exampleInputPassword2"
                                                placeholder="Password"
                                                value={password} onChange={onChangePassword}
                                            />
                                            <input
                                                type="hidden"
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
                                                // id="exampleInputPassword2"
                                                placeholder="Password"
                                                value={roleId} onChange={onChangeRoleId}
                                            />
                                        </div>
                                        <div className="flex justify-end items-center mt-6 mb-4">
                                            <button
                                                type="submit"
                                                onClick={dataRegister}
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
                                                Regist
                                            </button>
                                        </div>
                                        <p className="text-gray-800 mt-6 text-center">
                                            Have an Account ? {" "}
                                            <a
                                                href="/login/"
                                                className="text-[#C78342] focus:text-[#C78342] hover:text-[#C78342] transition duration-200 ease-in-out"
                                            >
                                                Login
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




