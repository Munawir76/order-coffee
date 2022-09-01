import { Card, Col, Row, Carousel } from 'antd';
import React from 'react';
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const styleCarousel = {
    color: '#fff',
    lineHeight: '30px',
    textAlign: 'start',
}
export default function MenuTerbaikLandingPage() {

    const [productSatu, setProductSatu] = useState([])
    const [productDua, setProductDua] = useState([])
    const [productTiga, setProductTiga] = useState([])
    const [productEmpat, setProductEmpat] = useState([])
    const [productLima, setProductLima] = useState([])
    const [productEnam, setProductEnam] = useState([])


    async function getDataProduct() {
        try {
            // const getToken = localStorage.getItem("tokenCustomer")
            // const decode = jwt_decode(getToken)
            // console.log(getToken)
            await axios.get('https://ordercoffee-app.herokuapp.com/menu', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                // console.log(res.data.data, 'ini res get api')
                setProductSatu(res.data.items[0])
                setProductDua(res.data.items[1])
                setProductTiga(res.data.items[2])
                setProductEmpat(res.data.items[3])
                setProductLima(res.data.items[4])
                setProductEnam(res.data.items[5])
            })
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getDataProduct()
    }, [])
    console.log(productSatu, 'ini product satu yang terbaik');

    return (
        <div className='bg-[#004349]'>

            <h3 className="text-center font-medium text-white text-xl py-4">Menu Terbaik Kami</h3>
            <div>
                {/* {dataProduct.map((menu) => {
                    console.log(menu, "jajajajajaj");
                    return ( */}
                <Carousel autoplaySpeed={0}>
                    <div>
                        <div style={styleCarousel}>
                            <Row justify="center space-x-5" className="bg-[#004349] mb-10">
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5">
                                    <div className="rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1">
                                        <a

                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                loader={() => productSatu?.photo}
                                                priority={true}
                                                src={`https://ordercoffee-app.herokuapp.com/menu/image/${productSatu?.photo
                                                    }`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                        <div className="p-2">
                                            <Row justify='start'>
                                                <Col>
                                                    <h5 className="text-white text-l font-medium mb-4 border-b-2 w-64 mx-auto">
                                                        {productSatu?.name}
                                                    </h5>

                                                </Col>
                                            </Row>
                                            <Row justify='center'>
                                                <Col span={12}>
                                                    <p className="text-gray-300 text-base mb-6">
                                                        {productSatu?.price}
                                                    </p>

                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href={`/detailMenu/${productSatu?.id}`}>
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
                                    <div className="rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1">
                                        <a

                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                loader={() => productDua?.photo}
                                                priority={true}
                                                src={`https://ordercoffee-app.herokuapp.com/menu/image/${productDua?.photo
                                                    }`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                        <div className="p-2">
                                            <Row justify='start'>
                                                <Col>
                                                    <h5 className="text-white text-l font-medium mb-4 border-b-2 w-64 mx-auto">
                                                        {productDua?.name}
                                                    </h5>

                                                </Col>
                                            </Row>
                                            <Row justify='center'>
                                                <Col span={12}>
                                                    <p className="text-gray-300 text-base mb-6">
                                                        {productDua?.price}
                                                    </p>

                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href={`/detailMenu/${productDua?.id}`}>
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
                                    <div className="rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1">
                                        <a

                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                loader={() => productTiga?.photo}
                                                priority={true}
                                                src={`https://ordercoffee-app.herokuapp.com/menu/image/${productTiga?.photo
                                                    }`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                        <div className="p-2">
                                            <Row justify='start'>
                                                <Col>
                                                    <h5 className="text-white text-l font-medium mb-4 border-b-2 w-64 mx-auto">
                                                        {productTiga?.name}
                                                    </h5>

                                                </Col>
                                            </Row>
                                            <Row justify='center'>
                                                <Col span={12}>
                                                    <p className="text-gray-300 text-base mb-6">
                                                        {productTiga?.price}
                                                    </p>

                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href={`/detailMenu/${productTiga?.id}`}>
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
                            <Row justify="center space-x-5" className="bg-[#004349] mb-10">
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5">
                                    <div className="rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1">
                                        <a

                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                loader={() => productEmpat?.photo}
                                                priority={true}
                                                src={`https://ordercoffee-app.herokuapp.com/menu/image/${productEmpat?.photo
                                                    }`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                        <div className="p-2">
                                            <Row justify='start'>
                                                <Col>
                                                    <h5 className="text-white text-l font-medium mb-4 border-b-2 w-64 mx-auto">
                                                        {productEmpat?.name}
                                                    </h5>

                                                </Col>
                                            </Row>
                                            <Row justify='center'>
                                                <Col span={12}>
                                                    <p className="text-gray-300 text-base mb-6">
                                                        {productEmpat?.price}
                                                    </p>

                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href={`/detailMenu/${productEmpat?.id}`}>
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
                                    <div className="rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1">
                                        <a

                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                loader={() => productLima?.photo}
                                                priority={true}
                                                src={`https://ordercoffee-app.herokuapp.com/menu/image/${productLima?.photo
                                                    }`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                        <div className="p-2">
                                            <Row justify='start'>
                                                <Col>
                                                    <h5 className="text-white text-l font-medium mb-4 border-b-2 w-64 mx-auto">
                                                        {productLima?.name}
                                                    </h5>

                                                </Col>
                                            </Row>
                                            <Row justify='center'>
                                                <Col span={12}>
                                                    <p className="text-gray-300 text-base mb-6">
                                                        {productLima?.price}
                                                    </p>

                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href={`/detailMenu/${productLima?.id}`}>
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
                                    <div className="rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1">
                                        <a

                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                loader={() => productEnam?.photo}
                                                priority={true}
                                                src={`https://ordercoffee-app.herokuapp.com/menu/image/${productEnam?.photo
                                                    }`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                        <div className="p-2">
                                            <Row justify='start'>
                                                <Col>
                                                    <h5 className="text-white text-l font-medium mb-4 border-b-2 w-64 mx-auto">
                                                        {productEnam?.name}
                                                    </h5>

                                                </Col>
                                            </Row>
                                            <Row justify='center'>
                                                <Col span={12}>
                                                    <p className="text-gray-300 text-base mb-6">
                                                        {productEnam?.price}
                                                    </p>

                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href={`/detailMenu/${productEnam?.id}`}>
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
                {/* )
                })} */}

            </div>
        </div>
    )
}

