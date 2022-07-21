import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import { Col, Card, Row } from 'antd';
import Navigasi from './component/landingPage/navigasi'
import Footer from './component/landingPage/footer'
import FosterSatu from './component/images/pouring.jpg'
import FosterDua from './component/images/pouring2.jpg'
import backgroundimg from "./component/images/background.jpg"


export default function About() {

    return (
        <div>
            <Navigasi />
            <div className='min-h-screen pt-14' style={{ position: "relative" }}>
                <Image src={backgroundimg} layout="fill" priority={true} />
                <div className=' '>
                    <Row justify='space-evenly' align='middle' className='h-screen'>
                        <Col span={8} >
                            <p style={{ textAlign: "center", fontSize: "17px", fontFamily: 'Averia Libre' }}>Order Coffe berdiri sejak Tahun 2022.
                                Bermula dari kegemaran kami menikmati kopi.
                                Namun seiring berjalannya waktu kami tidak hanya sebatas menikmatinya.
                                Tapi kami mencoba membuat dan menyampaikan rasa yang Kami nikmati pada pelanggan.</p>
                            <p style={{ fontfamily: 'Inter' }} className="mb-2 mt-10 text-xl font-bold text-center"> -Bramantyo Rizky</p>
                            <p style={{ fontfamily: 'Inter' }} className="font-light text-center">Founder of Order Coffee </p>
                            <h1 style={{ fontfamily: 'Joti One' }} className="text-6xl text-center mt-20">"</h1>
                            <h1 style={{ fontfamily: 'Inter' }} className="font-extrabold text-2xl text-center">Live it, face it and solve it.</h1>
                        </Col>
                        <Col span={8} >
                            <Image src={FosterSatu} height={300} width={450} />
                            <Image src={FosterDua} height={250} width={450} />
                        </Col>

                    </Row>
                </div>

            </div >
            <Footer />
        </div>
    )
}
