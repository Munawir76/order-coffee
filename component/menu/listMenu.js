import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import Link from 'next/link';
import { Col, Button, Row } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


export default function MenuPromo() {

    const [dataProduct, setDataProduct] = useState([])

    async function getDataProduct() {
        try {
            const getToken = localStorage.getItem("tokenCustomer")
            const decode = jwt_decode(getToken)
            // console.log(getToken)
            await axios.get('https://ordercoffee-app.herokuapp.com/menu', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res.data.data)
                setDataProduct(res.data.data[0])
            })
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getDataProduct()
    }, [])

    return (
        <div >
            <Row align='middle' justify='center' style={{ height: "30vh" }}>
                <Col>
                    <h3 className=" text-end font-medium text-black text-xl mt-24">Menu</h3>
                </Col>
            </Row>
            <Row className="bg-[#fff] mb-16 align-middle justify-center flex gap-10">
                {dataProduct.map((menu) => {
                    return (
                        <>
                            <Col lg={{ span: 5 }}
                                md={{ span: 6 }}
                                sm={{ span: 20 }}
                                xs={{ span: 20 }}
                                // offset={1}

                                className="pt-5">
                                <div className="rounded-lg shadow-lg bg-white ">
                                    <a
                                        href=""
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        <Image
                                            src={`https://ordercoffee-app.herokuapp.com/menu/image/${menu.photo}`}
                                            unoptimized={true}
                                            width={350}
                                            height={350}
                                            style={{ borderRadius: 10 }} />
                                    </a>
                                    <div className="p-6">
                                        <Row justify='center'>
                                            <Col span={12} offset={1}>
                                                <h5 className="text-gray-900 text-l font-medium mb-2">
                                                    {menu.name}
                                                </h5>
                                                <p className="text-gray-700 text-base mb-4">
                                                    Rp. {menu.price}
                                                </p>
                                            </Col>
                                            <Col span={10} offset={1}>

                                                <Link href={`/detailMenu/${menu.id}`}>
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
                        </>
                    )
                })}
            </Row>
        </div >
    )
}
{/* <Col lg={{ span: 5 }}
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
                                        Single Origin
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
                            <Image className="rounded-t-lg" src={MenuTiga} alt="" />
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
                            <Image className="rounded-t-lg" src={MenuEmpat} alt="" />
                        </a>
                        <div className="p-6">
                            <Row justify='center'>
                                <Col span={12} offset={1}>
                                    <h5 className="text-gray-900 text-l font-medium mb-2">
                                        Vietnam Drip
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
                </Col> */}

{/* <Row justify="center space-x-8" className="bg-[#fff] mb-14">

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
                                        Tubruk
                                    </h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        Rp. 18.000
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
                                        Tubruk
                                    </h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        Rp. 18.000
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
            </Row> */}

