import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import Link from 'next/link';
import { Col, Button, Row, Input } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const { Search } = Input;

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

    const onSearch = (value) => {
        console.log(value, 'ini value search');
        axios.get(`https://ordercoffee-app.herokuapp.com/menu/search/${value}`).then(res => {
            if (res.status == 200 || res.status == 201) {
                setDataProduct([res.data])
                console.log(res, 'ini hasil search')
            } else if (res.status == 400 || res.status == 404) {
                setDataProduct(null)
                getDataProduct()
            }

        })

    };

    useEffect(() => {
        getDataProduct()
        getDataPromo()
    }, [])

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    return (
        <div >
            <Row align='middle' justify='center' className='border-2 border-white mb-10' style={{ height: "10vh", marginTop: 90, width: 1000, marginLeft: 180, borderRadius: 12, backgroundColor: 'white', }} >
                <Col span={7}>
                    <h3 className=" font-medium  text-black text-lg">Cari menu yang kamu suka</h3>
                </Col>
                <Col span={7} className="ml-60">
                    <Search
                        placeholder="Search Product"
                        allowClear
                        enterButton

                        size="large"
                        type="text"
                        onSearch={onSearch}

                    />
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

                                className=" transition ease-in-out hover:-translate-y-2 border-2 border-[#C78342] border: rounded-lg">
                                <div className="rounded-lg shadow-lg bg-white  ">
                                    <a
                                        // href={`/detailMenu/${menu?.id}`}
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        <Image
                                            src={`https://ordercoffee-app.herokuapp.com/menu/image/${menu?.photo}`}
                                            unoptimized={true}
                                            width={350}
                                            height={350}
                                            style={{ borderRadius: 6 }} />
                                    </a>
                                    <div className="p-6">
                                        <Row justify='center'>
                                            <Col span={12} offset={1}>
                                                <h5 className="text-gray-900 text-l font-medium mb-2">
                                                    {menu?.name}
                                                </h5>
                                                <p className="text-gray-700 text-base mb-4">
                                                    {rupiah(menu?.price)}
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


