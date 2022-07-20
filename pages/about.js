import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import { Col, Card, Row } from 'antd';
import Navigasi from './component/landingPage/navigasi'
import Footer from './component/landingPage/footer'
import FosterSatu from './component/images/pouring.jpg'
import FosterDua from './component/images/pouring2.jpg'

export default function About() {

    return (
        <div>
            <Navigasi />
            <div>
                <Row justify='center' align='middle' className="h-screen">
                    <Col span={10} className="p-20">
                        <div align="middle" className="flex justify-start">
                            <Card
                                style={{
                                    width: 300, textAlign: 'center'
                                }} className="mt-10 "
                            >
                                <p>Order Coffe berdiri sejak Tahun 2022.
                                    Bermula dari kegemaran kami menikmati kopi.
                                    Namun seiring berjalannya waktu kami tidak hanya sebatas menikmatinya.
                                    Tapi kami mencoba membuat dan menyampaikan rasa yang Kami nikmati pada pelanggan.</p>
                                <p className="mb-2 mt-10"> -Bramantyo Rizky</p>
                                <p>Founder of Order Coffee</p>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <Card
                            style={{
                                width: 400, height: 500, textAlign: 'center'
                            }} className="mt-10 "
                        >
                            <Row justify='center' align="middle" >
                                <Col>
                                    <Col>
                                        <Image src={FosterSatu} height={300} width={450} />
                                    </Col>
                                    <Col>
                                        <Image src={FosterDua} height={300} width={500} className="" />
                                    </Col>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div >
    )
}
