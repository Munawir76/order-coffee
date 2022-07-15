import React from "react";
import 'tailwindcss/tailwind.css'
import { Row, Col } from 'antd'

export default function LoginLd() {
    return (
        <div>
            <div className=" flex justify-start">
                <div className="block pl-10 rounded-lg bg-white mb-10">

                    <div className="text-center">
                        <h3 className="text-gray-700 text-right mb-2">Nikmati kelebihan lainnya dengan Berlangganan</h3>
                        <h3 className="text-gray-900 text-xl font-medium">Daftarkan Segera !</h3>

                    </div>
                    <div className="hidden space-x-7 md:inline-block mt-4 ml-8">
                        <button
                            href="javascript:void(0)"
                            className="ml-5 transition ease-in-out hover:-translate-x-2 hover:scale-110 delay-150 px-5 py-2 text-white  bg-[#C78342]  rounded-md shadow hover:bg-brown-500 hover:text-white ..."
                        >
                            Regist
                        </button>
                        <button
                            href="jbuttonvascript:void(0)"
                            className="transition ease-in-out hover:-translate-x-2 hover:scale-110 delay-150 px-5 py-2  text-black-500 mr-4 border-solid border-[#C78342] border-2 rounded-md shadow hover:bg-[#C78342] hover:text-white ..."
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
            <Row>
                <Col span={12} offset={6}>
                    <h3 className="text-center font-medium text-black text-xl">Menu Terbaik Kami</h3>
                </Col>
            </Row>
        </div >

    )
}