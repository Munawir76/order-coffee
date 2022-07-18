import { Card, Col, Row, Carousel } from 'antd';
import React from 'react';
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import MenuSatu from "../images/v60.jpg"

const styleCarousel = {
    height: '500px',
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
                            <Row justify="center space-x-5" className="bg-[#fff]">
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 10 }}
                                    xs={{ span: 10 }}
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
                                                <Col span={12} offset={1}> <h5 className="text-gray-900 text-l font-medium mb-2">
                                                    V60
                                                </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        Rp. 50,000,000
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <button
                                                        type="button"
                                                        className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                                    >
                                                        Detail
                                                    </button>
                                                </Col>
                                            </Row>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 10 }}
                                    xs={{ span: 10 }}
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
                                                <Col span={12} offset={1}> <h5 className="text-gray-900 text-l font-medium mb-2">
                                                    V60
                                                </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        Rp. 50,000,000
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <button
                                                        type="button"
                                                        className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                                    >
                                                        Detail
                                                    </button>
                                                </Col>
                                            </Row>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 10 }}
                                    xs={{ span: 10 }}
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
                                                <Col span={12} offset={1}> <h5 className="text-gray-900 text-l font-medium mb-2">
                                                    V60
                                                </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        Rp. 50,000,000
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <button
                                                        type="button"
                                                        className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                                    >
                                                        Detail
                                                    </button>
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
                            <Row justify="center space-x-5" className="bg-[#fff]">
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 10 }}
                                    xs={{ span: 10 }}
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
                                                <Col span={12} offset={1}> <h5 className="text-gray-900 text-l font-medium mb-2">
                                                    V60
                                                </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        Rp. 50,000,000
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <button
                                                        type="button"
                                                        className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                                    >
                                                        Detail
                                                    </button>
                                                </Col>
                                            </Row>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 10 }}
                                    xs={{ span: 10 }}
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
                                                <Col span={12} offset={1}> <h5 className="text-gray-900 text-l font-medium mb-2">
                                                    V60
                                                </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        Rp. 50,000,000
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <button
                                                        type="button"
                                                        className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                                    >
                                                        Detail
                                                    </button>
                                                </Col>
                                            </Row>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 10 }}
                                    xs={{ span: 10 }}
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
                                                <Col span={12} offset={1}> <h5 className="text-gray-900 text-l font-medium mb-2">
                                                    V60
                                                </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        Rp. 50,000,000
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <button
                                                        type="button"
                                                        className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                                    >
                                                        Detail
                                                    </button>
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

