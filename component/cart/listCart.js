import 'antd/dist/antd.css'
import 'antd/dist/antd.variable.min.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import Link from 'next/link';
import { Row, Col, Steps, Table, Button, Space, ConfigProvider } from 'antd'
import React, { useEffect, useState } from 'react';
import Product1 from '../../public/images/kopisusu.jpg'
import Product2 from '../../public/images/redvalvet.jpg'
import Product3 from '../../public/images/v60.jpg'
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default function ListCart() {

    ConfigProvider.config({
        theme: {
            primaryColor: '#C78342',
        },
    });

    // get cart
    const [dataCart, setDataCart] = useState([])

    const [idCart, setIdCart] = useState('')
    const [totalPrice, setTotalPrice] = useState()
    const [cartDetail, setCartDetail] = useState([])

    async function getDataCart() {
        try {
            // const tokenToCart = localStorage.getItem('tokenCustomer')
            // const setDecode = jwt_decode(tokenToCart)
            // console.log(decode, 'ini decode')
            const getDataCart = await axios.get(`https://ordercoffee-app.herokuapp.com/cart/`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                console.log(res.data.data, 'ini res api ge cart')
                // setCartDetail(res[0].map((data) => {

                // }))
                setDataCart(res)
            })

        } catch (error) {
            console.log(error, 'ini error cart')

        }
    }

    async function getIdCart() {
        try {
            await axios.get(`https://ordercoffee-app.herokuapp.com/cart`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res, 'ini res get id cart')
            })
        } catch (error) {

        }
    }

    const finishCheckout = async () => {
        try {
            const sentCart = {
                cart_id: idCart,
                total_price: totalPrice,
            }
            console.log(sentCart, 'ini value sent cart');

            await axios.post("https://ordercoffee-app.herokuapp.com/cart-detail", sentCart, {
                headers: {
                    "content-type": 'multipart/form-data',
                }

            }).then(res => {
                console.log(res, 'ini res post')
                // message.success("Successfull Create promo")
            })
        } catch (error) {
            console.log(error, "ini error");
            message.error("Failed checkout")
        }
    }


    useEffect(() => {
        getDataCart()
        getIdCart()
    }, [])

    return (
        <div className='min-h-screen pt-14 ml-40 mt-5' style={{ position: "relative" }}>
            <Row>
                <Col>
                    <h2>Cart</h2>
                </Col>
            </Row>
            <Row justify="start" align="middle" className="h-80">
                <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                    <div>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">

                                        <table className="min-w-full">
                                            <thead >
                                                <tr className="border-t border-[#C78342]">
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Product
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Price
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Quantity
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="border-b">
                                                {/* {dataCart.map((data) => {
                                                    return ( */}
                                                <div>
                                                    <tr className="bg-white">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            <div className="flex justify-start"><Image src={Product1} height={50} width={60} /><h3 className="ml-8 mt-4">Kopi susu gula aren</h3></div>
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {/* {data?.price} */}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            1
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            20000
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white ">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            <div className="flex justify-start"><Image src={Product2} height={50} width={60} /><h3 className="ml-8 mt-4">Redvalvet</h3></div>
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            20000
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            2
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            40000
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white ">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            <div className="flex justify-start"><Image src={Product3} height={50} width={60} /><h3 className="ml-8 mt-4">Single Origin</h3></div>
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            25000
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            1
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            25000
                                                        </td>
                                                    </tr>
                                                </div>
                                                {/* )
                                                })} */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Row className="flex justify-end mr-48 mt-4">
                            <Col >
                                <h3>Sub-total<Space>Rp. 85.000</Space></h3>
                            </Col>
                        </Row>
                        <Row className="flex justify-end">
                            <Col className="mr-48 mt-10 ">
                                <Link href='/authCart/'>
                                    <button
                                        type="button"
                                        className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg hover:text-white hover:bg-[#805336] active:bg-[#805336]"
                                        onClick={finishCheckout}
                                    >
                                        Checkout
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                    </div>

                </Col>
            </Row>
        </div >
    )
}