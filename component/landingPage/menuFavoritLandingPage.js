import { Card, Col, Row, Carousel } from 'antd';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import MenuSatu from "../../public/images/redvalvet.jpg"
import MenuDua from '../../public/images/v60.jpg'
import MenuTiga from '../../public/images/taro.jpg'
import MenuEmpat from '../../public/images/vietnamdrip.jpg'
import MenuLima from '../../public/images/machiatto.jpg'
import MenuEnam from '../../public/images/tubruk.jpg'
import Link from 'next/link'
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const styleCarousel = {

    color: '#fff',
    lineHeight: '30px',
    textAlign: 'start',
}

export default function MenuFavorit() {

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
                console.log(res.data, 'ini res get api')
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
    console.log(productSatu, 'ini product satu');


    return (
        <div>
            <h3 className="text-center font-medium text-black text-xl">Paling Banyak Dicari</h3>
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

                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                loader={() => productSatu.photo}
                                                priority={true}
                                                src={`https://ordercoffee-app.herokuapp.com/menu/image/${productSatu?.photo
                                                    }`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                        <div className="p-6">
                                            <Row justify='center'>
                                                <Col span={12} offset={1}>
                                                    <h5 className="text-gray-900 text-l font-medium mb-2">
                                                        {productSatu?.name}
                                                    </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        {productSatu?.price}
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href={`/detailMenu/${productSatu.id}`}>
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

                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                loader={() => productDua.photo}
                                                priority={true}
                                                src={`https://ordercoffee-app.herokuapp.com/menu/image/${productDua?.photo
                                                    }`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                        <div className="p-6">
                                            <Row justify='center'>
                                                <Col span={12} offset={1}>
                                                    <h5 className="text-gray-900 text-l font-medium mb-2">
                                                        {productDua?.name}
                                                    </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        {productDua?.price}
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href={`/detailMenu/${productDua.id}`}>
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

                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                loader={() => productTiga.photo}
                                                priority={true}
                                                src={`https://ordercoffee-app.herokuapp.com/menu/image/${productTiga?.photo
                                                    }`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                        <div className="p-6">
                                            <Row justify='center'>
                                                <Col span={12} offset={1}>
                                                    <h5 className="text-gray-900 text-l font-medium mb-2">
                                                        {productTiga?.name}
                                                    </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        {productTiga?.price}
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href={`/detailMenu/${productTiga.id}`}>
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

                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                loader={() => productEmpat.photo}
                                                priority={true}
                                                src={`https://ordercoffee-app.herokuapp.com/menu/image/${productEmpat?.photo
                                                    }`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                        <div className="p-6">
                                            <Row justify='center'>
                                                <Col span={12} offset={1}>
                                                    <h5 className="text-gray-900 text-l font-medium mb-2">
                                                        {productEmpat?.name}
                                                    </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        {productEmpat?.price}
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href={`/detailMenu/${productEmpat.id}`}>
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

                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                loader={() => productLima.photo}
                                                priority={true}
                                                src={`https://ordercoffee-app.herokuapp.com/menu/image/${productLima?.photo
                                                    }`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                        <div className="p-6">
                                            <Row justify='center'>
                                                <Col span={12} offset={1}>
                                                    <h5 className="text-gray-900 text-l font-medium mb-2">
                                                        {productLima?.name}
                                                    </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        {productLima?.price}
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href={`/detailMenu/${productLima.id}`}>
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

                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                loader={() => productEnam.photo}
                                                priority={true}
                                                src={`https://ordercoffee-app.herokuapp.com/menu/image/${productEnam?.photo
                                                    }`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                        <div className="p-6">
                                            <Row justify='center'>
                                                <Col span={12} offset={1}>
                                                    <h5 className="text-gray-900 text-l font-medium mb-2">
                                                        {productEnam?.name}
                                                    </h5>
                                                    <p className="text-gray-700 text-base mb-4">
                                                        {productEnam?.price}
                                                    </p>
                                                </Col>
                                                <Col span={10} offset={1}>
                                                    <Link href={`/detailMenu/${productEnam.id}`}>
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

