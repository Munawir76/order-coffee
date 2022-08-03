import { Card, Col, Row, Carousel } from 'antd';
import React from 'react';
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import Link from 'next/link'
import MenuSatu from "../../public/images/latteart.jpg"
import MenuDua from '../../public/images/kopisusu.jpg'
import MenuTiga from '../../public/images/machiatto.jpg'
import MenuEmpat from '../../public/images/v60.jpg'
import MenuLima from '../../public/images/taro.jpg'
import MenuEnam from '../../public/images/redvalvet.jpg'

const styleCarousel = {
    color: '#fff',
    lineHeight: '30px',
    textAlign: 'start',
}
export default function MenuList() {
    return (
        <div>
            <h3 className="text-center font-medium text-black text-xl">Menu Terbaik Kami</h3>
            <div>
                <Carousel autoplaySpeed={0}>
                    <div>
                        <div style={styleCarousel}>
                            <Row justify="center space-x-5" className="bg-[#fff] mb-10">
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5">
                                    <div className="rounded-lg shadow-lg bg-white ">
                                        <a
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image className="rounded-t-lg" src={MenuSatu} alt="" />
                                        </a>
                                        <div className="p-6">
                                            <Row justify='center'>
                                                <Col span={12} offset={1}>
                                                    <h5 className="text-gray-900 text-l font-medium mb-2">
                                                        Coffee Latte
                                                    </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        Rp. 20.000
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href='/menuDetail/'>
                                                        <button
                                                            type="button"
                                                            className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg hover:text-white hover:bg-[#805336] active:bg-[#805336]"
                                                        >
                                                            Detail
                                                        </button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5">
                                    <div className="rounded-lg shadow-lg bg-white ">
                                        <a
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image className="rounded-t-lg" src={MenuDua} alt="" />
                                        </a>
                                        <div className="p-6">
                                            <Row justify='center'>
                                                <Col span={12} offset={1}>
                                                    <h5 className="text-gray-900 text-l font-medium mb-2">
                                                        Kopi Susu
                                                    </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        Rp. 30.000
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href='/menuDetail/'>
                                                        <button
                                                            type="button"
                                                            className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg hover:text-white hover:bg-[#805336] active:bg-[#805336]"
                                                        >
                                                            Detail
                                                        </button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5">
                                    <div className="rounded-lg shadow-lg bg-white ">
                                        <a
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image className="rounded-t-lg" src={MenuTiga} alt="" />
                                        </a>
                                        <div className="p-6">
                                            <Row justify='center'>
                                                <Col span={12} offset={1}>
                                                    <h5 className="text-gray-900 text-l font-medium mb-2">
                                                        Machiatto
                                                    </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        Rp. 27.000
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href='/menuDetail/'>
                                                        <button
                                                            type="button"
                                                            className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg hover:text-white hover:bg-[#805336] active:bg-[#805336]"
                                                        >
                                                            Detail
                                                        </button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div>
                        <div style={styleCarousel}>
                            <Row justify="center space-x-5" className="bg-[#fff] mb-10">
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5">
                                    <div className="rounded-lg shadow-lg bg-white ">
                                        <a
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image className="rounded-t-lg" src={MenuEmpat} alt="" />
                                        </a>
                                        <div className="p-6">
                                            <Row justify='center'>
                                                <Col span={12} offset={1}>
                                                    <h5 className="text-gray-900 text-l font-medium mb-2">
                                                        V60
                                                    </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        Rp. 20.000
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href='/menuDetail/'>
                                                        <button
                                                            type="button"
                                                            className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg hover:text-white hover:bg-[#805336] active:bg-[#805336]"
                                                        >
                                                            Detail
                                                        </button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5">
                                    <div className="rounded-lg shadow-lg bg-white ">
                                        <a
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image className="rounded-t-lg" src={MenuLima} alt="" />
                                        </a>
                                        <div className="p-6">
                                            <Row justify='center'>
                                                <Col span={12} offset={1}>
                                                    <h5 className="text-gray-900 text-l font-medium mb-2">
                                                        Taro Iced
                                                    </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        Rp. 20.000
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href='/menuDetail/'>
                                                        <button
                                                            type="button"
                                                            className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg hover:text-white hover:bg-[#805336] active:bg-[#805336]"
                                                        >
                                                            Detail
                                                        </button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5">
                                    <div className="rounded-lg shadow-lg bg-white ">
                                        <a
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image className="rounded-t-lg" src={MenuEnam} alt="" />
                                        </a>
                                        <div className="p-6">
                                            <Row justify='center'>
                                                <Col span={12} offset={1}>
                                                    <h5 className="text-gray-900 text-l font-medium mb-2">
                                                        Redvalvet Iced
                                                    </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        Rp. 20.000
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href='/menuDetail/'>
                                                        <button
                                                            type="button"
                                                            className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg hover:text-white hover:bg-[#805336] active:bg-[#805336]"
                                                        >
                                                            Detail
                                                        </button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

