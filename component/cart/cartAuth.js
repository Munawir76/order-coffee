import 'antd/dist/antd.variable.min.css'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import { Row, Col, Card, Input, ConfigProvider } from 'antd'
import Image from 'next/image'
import Product1 from '../../public/images/kopisusu.jpg'


const { TextArea } = Input

ConfigProvider.config({
    theme: {
        primaryColor: '#C78342',
    },
});

export default function CartAuth() {

    return (
        <div>
            <div className='min-h-screen pt-14 ml-40 mt-5' style={{ position: "relative" }}>
                <Row>
                    <Col span={12}>
                        <Row className="">
                            <Col span={12}>
                                <h2>Name</h2>
                            </Col>
                        </Row>
                        <Row >
                            <Col >
                                <TextArea rows={1} cols={48} placeholder="Input your name" className='mt-2' />
                            </Col>
                        </Row>
                        <Row className="mt-6">
                            <Col >
                                <TextArea rows={4} cols={48} placeholder="Deskripsi" maxLength={6} />
                            </Col>
                        </Row>
                        <Row className="pt-64">
                            <Col>
                                <a href="/cart/" className="hover:text-[#805336] text-decoration: underline text-[#805336] text-base font-semibold" > Back to Cart</a>
                                <Link href='/payment/'>
                                    <button
                                        type="button"
                                        className=" bg-[#C78342] text-white font-medium rounded shadow-md hover:bg-[#805336] hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C78342] active:shadow-lg transition duration-150 ease-in-out w-32 h-10 ml-36"
                                    >
                                        PAY
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Card style={{ width: 500, height: 520, backgroundColor: 'rgba(238, 238, 238, 0.8)', }}>
                            <Row >
                                <Col span={12}>
                                    <Image src={Product1} height={150} width={150} />
                                </Col>
                                <Col span={12}>
                                    <h2 className="text-xl font-semibold">Kopi Susu Gula Aren</h2>
                                    <h2 className="text-xl font-bold mt-4">Rp. 24.000</h2>
                                </Col>
                            </Row>
                            <Row className='mt-28'>
                                <Col span={12}>
                                    <h1 >Subtotal</h1>
                                </Col>
                                <Col span={12}>
                                    <h2 className="text-base font-semibold">Rp. 24.000</h2>
                                </Col>
                            </Row>
                            <Row className="mt-16">
                                <Col span={12}>
                                    <h1 className="text-base font-semibold">Total</h1>
                                </Col>
                                <Col span={12}>
                                    <h2 className="text-base font-bold">Rp. 24.000</h2>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>

    )
}