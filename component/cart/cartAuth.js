import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import Navigasi from '../../component/navigasi'
import Footer from '../../component/footer'
import { Row, Col, Card, Input, } from 'antd'
import Image from 'next/image'
import Product1 from '../../public/images/kopisusu.jpg'


const { TextArea } = Input

export default function CartAuth() {

    return (
        <div>
            <Navigasi />
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
                                <TextArea rows={1} cols={48} placeholder="Input your name" className='mt-2 border-[#C78342] hover:border-[#805336] hover:focus:border-[#C78342] hover:shadow-slate-900' />
                            </Col>
                        </Row>
                        <Row className="mt-6">
                            <Col >
                                <TextArea rows={4} cols={48} placeholder="Deskripsi" maxLength={6} />
                            </Col>
                        </Row>
                        <Row className="pt-64">
                            <Col>
                                <a href="/menu/" className="hover:text-[#805336] text-decoration: underline text-[#805336] text-base font-semibold" > Back to Cart</a>
                                <button
                                    type="button"
                                    className=" bg-[#C78342] text-white font-medium rounded shadow-md hover:bg-[#805336] hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C78342] active:shadow-lg transition duration-150 ease-in-out w-32 h-10 ml-36"
                                >
                                    PAY
                                </button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Card
                            style={{
                                width: 500, height: 520,
                            }}
                            className="bg-gray-400 bg-opacity-20 ml-16 p-6">
                            <Row>
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
            <Footer />
        </div>

    )
}