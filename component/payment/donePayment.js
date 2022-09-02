import 'antd/dist/antd.variable.min.css'
import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import { Row, Col, ConfigProvider, } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons';
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";


ConfigProvider.config({
    theme: {
        primaryColor: '#C78342',
    },
});

export default function DonePayment() {
    const [paymentId, setPaymentId] = useState('')
    const [dataPayment, setDataPayment] = useState([])

    async function getPayment() {
        try {
            await axios.get(`https://ordercoffee-app.herokuapp.com/transaction/detail`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                console.log(res, 'ini res getPayment')
                setDataPayment(res)
                setPaymentId()
            })
        } catch (error) {

        }
    }

    useEffect(() => {
        getPayment()
    }, [])

    return (
        <div>
            <div className='min-h-screen pt-14 align-middle mt-6' >
                <Row flex justify="center">
                    <Col className="text-center space-y-4">
                        <div style={{ fontSize: '65pt', color: '#C78342', marginBottom: 50 }}> <CheckCircleOutlined /></div>
                        <h2 className="font-bold text-lg">Payment Confirmed</h2>
                        <h3 style={{ marginBottom: 50 }}>Terimakasih telah melakukan Pembayaran. Selamat menikmati Coffe Kami</h3>
                        <Link href={`/invoice/${paymentId}`}>
                            <button
                                type="button"

                                className="  text-[#C78342] font-medium rounded shadow-md hover:bg-[#805336] hover:border-[#805336] hover:text-white border-2 border-[#C78342] hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C78342] active:shadow-lg transition duration-150 ease-in-out h-8 w-48"
                            >
                                Show Invoice
                            </button>
                        </Link>

                    </Col>
                </Row>
                <Row flex justify='center' className="mt-4">
                    <Col>
                        <Link href='/home'>
                            <button
                                type="button"

                                className=" bg-[#C78342] text-white font-medium rounded shadow-md hover:bg-[#805336] hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C78342] active:shadow-lg transition duration-150 ease-in-out w-60 h-8"
                            >
                                Back to Home
                            </button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}