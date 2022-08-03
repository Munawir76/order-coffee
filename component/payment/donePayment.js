import Navigasi from "../navigasi";
import Footer from "../footer";
import 'antd/dist/antd.variable.min.css'
import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import { Row, Col, ConfigProvider, } from 'antd'
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
            <div className='min-h-screen pt-14 align-middle mt-6' >
                <Row flex justify="center">
                    <Col className="text-center space-y-4">
                        <div style={{ fontSize: '65pt', color: '#C78342', marginBottom: 50 }}> <CheckCircleOutlined /></div>
                        <h2 className="font-bold text-lg">Payment Confirmed</h2>
                        <h3 style={{ marginBottom: 50 }}>Terimakasih telah melakukan Pembayaran. Selamat menikmati Coffe Kami</h3>
                        <button
                            type="button"

                            className=" bg-[#C78342] text-white font-medium rounded shadow-md hover:bg-[#805336] hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C78342] active:shadow-lg transition duration-150 ease-in-out w-60 h-8"
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