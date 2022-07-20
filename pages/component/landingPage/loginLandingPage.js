import React from "react";
import 'tailwindcss/tailwind.css'
import { Row, Col } from 'antd'
import MenuList from './menuTerbaik'
import MenuFavorit from "./menuFavorit";
import Promo from "./promo";
import Link from "next/link";


export default function LoginLanding() {
    return (
        <div>
            <div className=" flex justify-start">
                <div className="block pl-10 rounded-lg bg-white mb-10">

                    <div className="text-center">
                        <h3 className="text-gray-700 text-right mb-2">Nikmati kelebihan lainnya dengan Berlangganan</h3>
                        <h3 className="text-gray-900 text-xl font-medium">Daftarkan Segera !</h3>

                    </div>
                    <div className="hidden space-x-7 md:inline-block mt-4 ml-8">
                        <Link href='/regist'>
                            <button
                                className="ml-5 transition ease-in-out hover:-translate-x-2 hover:scale-110 delay-150 px-5 py-2 text-white  bg-[#C78342]  rounded-md shadow hover:bg-brown-500 hover:text-white ..."
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

                    </div>
                </div>
            </div>
            <Row>
                <Col >
                    <div>
                        <MenuList />
                        <MenuFavorit />
                        <Promo />
                    </div>

                </Col>
            </Row>
        </div >

    )
}