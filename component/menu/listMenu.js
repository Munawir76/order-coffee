import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import Link from 'next/link';
import { Col, Button, Row } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


export default function ListMenu() {

    const [dataProduct, setDataProduct] = useState([])

    async function getDataProduct() {
        try {
            await axios.get('https://ordercoffee-app.herokuapp.com/menu', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res.data.items)
                setDataProduct(res.data.items)
            })
        } catch (error) {
            console.error(error);
        }
    }

    async function getDataPromo() {
        try {
            await axios.get(`https://ordercoffee-app.herokuapp.com/promo/`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res, 'ini res api promo')
            })
        } catch (error) {

        }
    }

    useEffect(() => {
        getDataProduct()
        getDataPromo()
    }, [])

    return (
        <div >
            <Row align='middle' justify='center' style={{ height: "30vh" }}>
                <Col>
                    <h3 className=" text-end font-medium text-black text-xl mt-24">Menu</h3>
                </Col>
            </Row>
            <Row className="bg-[#fff] mb-16 align-middle justify-center flex gap-10 ">
                {dataProduct.map((menu) => {
                    return (
                        <>
                            <Col lg={{ span: 5 }}
                                md={{ span: 6 }}
                                sm={{ span: 20 }}
                                xs={{ span: 20 }}
                                // offset={1}

                                className="pt-5 transition ease-in-out hover:-translate-y-2">
                                <div className="rounded-lg shadow-lg bg-white ">
                                    <a
                                        href=""
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        <Image
                                            src={`https://ordercoffee-app.herokuapp.com/menu/image/${menu?.photo}`}
                                            unoptimized={true}
                                            width={350}
                                            height={350}
                                            style={{ borderRadius: 10 }} />
                                    </a>
                                    <div className="p-6">
                                        <Row justify='center'>
                                            <Col span={12} offset={1}>
                                                <h5 className="text-gray-900 text-l font-medium mb-2">
                                                    {menu?.name}
                                                </h5>
                                                <p className="text-gray-700 text-base mb-4">
                                                    Rp. {menu?.price}
                                                </p>
                                            </Col>
                                            <Col span={10} offset={1}>

                                                <Link href={`/detailMenu/${menu?.id}`}>
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


