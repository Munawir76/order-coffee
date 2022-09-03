import React, { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router";
import { useReactToPrint } from "react-to-print"
import 'antd/dist/antd.css'
import 'antd/dist/antd.variable.min.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import logo from '../../public/images/logo.png'
import ButtonBack from '../../component/reusable/buttonBack'
import { Row, Col, Card, Table, Button, Space, ConfigProvider, Modal, message } from 'antd'
import axios from "axios"


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

    const [getInvoice, setGetInvoice] = useState([])
    const [incoiceId, setInvoiceId] = useState()
    const router = useRouter();
    const { id } = router.query;


    async function getIdTransaksi() {
        try {
            await axios.get(`https://ordercoffee-app.herokuapp.com/transaction/detail`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                console.log(res, 'ini res get id transaksi')
                // setInvoiceId(res.data.items)
                setGetInvoice(res.data.items)
            })
        } catch (error) {

        }
    }

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    const dataSelected = getInvoice.find((data) => data.id == id);
    console.log(dataSelected, 'ini data selected')


    useEffect(() => {
        getIdTransaksi()
    }, [])

    return (
        <>
            <div ref={componentRef} >
                <div className="justify-center flex py-20">
                    <Card
                        style={{
                            width: 800,
                            justifyContent: 'center',
                            borderColor: '#C78342',

                        }}
                    >
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
                        <Row className="justify-center  py-4">
                            <Col span={8} offset={1}>
                                <h4>Invoice issued for :</h4>
                                <h4 className="text-lg font-bold">{dataSelected?.user?.fullname}</h4>
                                <h4>{dataSelected?.user?.email}</h4>

                            </Col>
                            <Col span={8} offset={1} className="text-end">
                                <Space> <h4 className="text-base font-bold">Invoice : </h4><h4 className="text-sm font-normal">{dataSelected?.id.slice(0, 7).toUpperCase()}</h4></Space>
                                <h4>Payment Date: <Space>{dataSelected?.create_at.slice(0, 10)}</Space></h4>
                                <h4>Invoice Date: <Space>{dataSelected?.create_at.slice(0, 10)}</Space></h4>
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Col span={18} offset={1}>
                                <table className="">
                                    <thead className="text-center">
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
                                                className="text-sm font-medium text-gray-900 px-16 py-4 text-left"
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
                                    {dataSelected?.user?.cart?.map((data) => {
                                        return (
                                            <tbody className="text-center">
                                                <tr className="bg-white" >
                                                    <td className="px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        <div className="flex justify-start">
                                                            <h4>{dataSelected?.user?.fullname}</h4>
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <h4>{data?.menu?.name}</h4>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <h4>{data?.amount}</h4>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap ">
                                                        <h4>{rupiah(data?.price)}</h4>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })}

                                </table>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                            </Col>
                            <Col span={8} offset={1} className="text-end mt-5">
                                {/* <h2>Total :<Space>{dataSelected?.user?.cart?.map((data) => { return (data?.price * data?.price) })}</Space></h2> */}
                                {/* <h2>Total Diskon :<Space>disini total</Space></h2> */}
                                <h2>Sub Total : <Space className="font-bold">{rupiah(dataSelected?.finalPrice)}</Space></h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} className="text-center mt-10 mb-4">
                                <h3 className="font-semibold">TERIMAKASI TELAH MELAKUKAN PEMBAYARAN</h3>

                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
            <Row flex justify="center" className="gap-5 -mt-10 ">
                <Col>
                    <ButtonBack />
                </Col>
                <Col className="mb-20">
                    <Button style={{ backgroundColor: 'rgba(168, 109, 15, 0.8)' }} type='primary' onClick={handlePrint}>Print</Button>
                </Col>
            </Row>



        </>
    )
}