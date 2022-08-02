import Navigasi from "../navigasi";
import Footer from "../footer";
import 'antd/dist/antd.variable.min.css'
import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import { Row, Col, Card, Table, ConfigProvider, Input, Upload, Button, Space } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons';


ConfigProvider.config({
    theme: {
        primaryColor: '#C78342',
    },
});

export default function DonePayment() {

    return (
        <div>
            <Navigasi />
            <div className='min-h-screen pt-14 mt-10' style={{ position: "relative" }}>
                <Row flex justify="center">
                    <Col className="text-center">
                        <div className=""> <CheckCircleOutlined /></div>
                        <h2>Payment Confirmed</h2>
                        <h3>Terimakasih telah melakukan Pembayaran. Selamat menikmati Coffe Kami</h3>
                        <button
                            type="button"

                            className=" bg-[#C78342] text-white font-medium rounded shadow-md hover:bg-[#805336] hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C78342] active:shadow-lg transition duration-150 ease-in-out w-60 h-8 ml-1 mt-16"
                        >
                            Back to Home
                        </button>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}