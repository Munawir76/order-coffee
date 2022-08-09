import 'antd/dist/antd.css'
import 'antd/dist/antd.variable.min.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import Link from 'next/link';
import { Row, Col, Steps, Table, Button, Space, ConfigProvider } from 'antd'
import React, { useState } from 'react';
import Product1 from '../../public/images/kopisusu.jpg'
import Product2 from '../../public/images/redvalvet.jpg'
import Product3 from '../../public/images/v60.jpg'


const { Step } = Steps;


export default function ListCart() {

    ConfigProvider.config({
        theme: {
            primaryColor: '#C78342',
        },
    });

    const [current, setCurrent] = useState(0);

    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    return (
        <div className='min-h-screen pt-14 ml-40 mt-5' style={{ position: "relative" }}>
            <Row>
                <Col>
                    {/* <Steps
                        type="navigation"

                        current={current}
                        onChange={onChange}
                        className="space-x-8"
                    >
                        <Step status="none" title="Cart" />
                        <Step status="none" title="Detail" />
                        <Step status="none" title="Payment" />
                    </Steps> */}
                    <h2>Cart</h2>
                </Col>
            </Row>
            <Row justify="start" align="middle" className="h-80">
                <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }}>
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
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <div className="flex justify-start"><Image src={Product1} height={50} width={60} /><h3 className="ml-8 mt-4">Kopi susu gula aren</h3></div>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    20000
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
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
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
                        >
                            Checkout
                        </button>
                    </Link>
                </Col>
            </Row>
        </div >
    )
}