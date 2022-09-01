import React, { useState, useEffect, useRef } from "react"
import { useReactToPrint } from "react-to-print"
import 'antd/dist/antd.css'
import 'antd/dist/antd.variable.min.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import logo from '../public/images/logo.png'
import { Row, Col, Card, Table, Button, Space, ConfigProvider, Modal, message } from 'antd'

ConfigProvider.config({
    theme: {
        primaryColor: '#C78342',
    },
});
export default function Invoice() {

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Invoice',
        onAfterPrint: () => message.success('Print Success')

    })

    return (
        <>
            <div className="mt-10"></div>
            <div ref={componentRef} >
                <div className="justify-center flex py-20">
                    <Card
                        style={{
                            width: 800,
                            justifyContent: 'center',
                            borderColor: '#C78342',

                        }}
                    >
                        {/* <h1 className="text-center text-lg font-semibold text-orange-700 py-10">INVOICE</h1> */}
                        <Row className="justify-center" align="middle">
                            <Col span={8} offset={1}>
                                <Image src={logo} height={70} width={110} style={{}} />
                            </Col>
                            <Col span={8} offset={1} className="text-end">
                                <h1 className="font-bold text-lg">Order Coffee</h1>
                                <h4>Telp. 0937 84 9557 73</h4>
                                <h4>order.coffee@gmail.com</h4>
                                <h4>Jl. Hanjuang VII No. 88 Jatibening Baru</h4>
                            </Col>
                        </Row>
                        <div className="border-b-2 border-black w-4/5 mt-4 mx-auto"></div>
                        {/* <hr className="border-black ml-40 mt-4 w-4/5" /> */}
                        <Row className="justify-center  py-4">
                            <Col span={8} offset={1}>
                                <h4>Invoice issued for :</h4>
                                <h4 className="text-lg font-bold">disini nama</h4>
                                <h4>disini email</h4>

                            </Col>
                            <Col span={8} offset={1} className="text-end">
                                <h4 className="text-base font-bold">Invoice #: <Space>disini apa ya?</Space></h4>
                                <h4>Payment Date: <Space>disini apa ya?</Space></h4>
                                <h4>Invoice Date: <Space>disini apa ya?</Space></h4>
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Col span={21} offset={1}>
                                <table className="">
                                    <thead className="border-b text-center border-t border-r border-l">
                                        <tr className=''>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Name
                                            </th>
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
                                    {/* {mapped.map((data) => {

                            return ( */}

                                    <tbody className="border-b text-center border-t border-r border-l">
                                        <tr className="bg-white" >
                                            <td className="px-6 whitespace-nowrap text-sm font-medium text-gray-900">

                                                <div className="flex justify-start">

                                                    <h4>Rizky Bramantio</h4>
                                                </div>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <h4>RedValvet, Latte Art, Vietnam drip</h4> {/* {data?.price} */}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <h4>7</h4> {/* {data?.amount} */}
                                            </td>
                                            <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap ">
                                                <h4>Rp. 80.000</h4> {/* {data?.price * data?.amount} */}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                                            </td>
                                        </tr>
                                    </tbody>



                                    {/* )
                        })} */}
                                </table>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>

                            </Col>
                            <Col span={8} offset={1} className="text-end">
                                <h2>Total :<Space>disini total</Space></h2>
                                <h2>Total Diskon :<Space>disini total</Space></h2>
                                <h2>Sub Total :<Space className="font-bold">disini total</Space></h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} className="text-center mt-10 mb-4">
                                <h3 className="font-semibold">TERIMAKASI TELAH MELAKUKAN PEMBAYARAN</h3>

                            </Col>
                        </Row>
                        {/* <Row>
                            <Col>
                            <h4></h4></Col>
                        </Row> */}
                    </Card>
                </div>
            </div>
            <Button onClick={handlePrint}>Print</Button>

        </>
    )
}