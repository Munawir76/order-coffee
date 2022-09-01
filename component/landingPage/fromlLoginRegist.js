import React from "react";
import 'tailwindcss/tailwind.css'
import { Row, Col } from 'antd'
import Link from "next/link";


export default function FormLoginRegist() {
    return (
        <div>
            <Row className=" flex justify-start">
                <Col className="block pl-10 rounded-lg bg-white ">
                    <div className="text-center">
                        <h3 className="text-gray-700 text-right mb-2 text-lg">Nikmati kelebihan lainnya dengan Berlangganan</h3>
                        <h3 className="text-gray-900 text-xl font-medium">Daftarkan Segera !</h3>
                    </div>
                    <Col className="space-x-7 md:inline-block mt-4 ml-20">
                        <Link href='/regist'>
                            <button
                                className="ml-5 transition ease-in-out hover:-translate-x-2 hover:scale-110 delay-150 px-5 py-2 text-white  bg-[#C78342]  rounded-md shadow hover:text-white ..."
                            >
                                Regist
                            </button>
                        </Link>
                        <Link href='/login'>
                            <button
                                className="transition ease-in-out hover:-translate-x-2 hover:scale-110 delay-150 px-5 py-2  text-black-500 mr-4 border-solid border-[#C78342] border-2 rounded-md shadow  hover:text-black ..."
                            >
                                Login
                            </button>
                        </Link>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}