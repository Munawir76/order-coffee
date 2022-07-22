import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import backgroundimg from '../../public/images/background.jpg'
import promo1 from '../../public/images/promo1.jpg'
import promo2 from '../../public/images/promo2.jpg'
import promo3 from '../../public/images/promo3.jpg'
import promo4 from '../../public/images/promo4.jpg'
import { Col, Card, Row } from 'antd';




export default function MenuPromo() {

    return (
        <div>
            <div className='h-screen' style={{ position: "relative" }}>
                <Image src={backgroundimg} layout="fill" priority={true} />
                <div >
                    <Row align='middle' justify='center' style={{ height: "35vh" }}>
                        <Col> <h3 className=" text-end font-medium text-black text-xl">Promo</h3></Col>
                    </Row>
                </div>
                <Row justify="center space-x-8" align='middle' >
                    <Col lg={{ span: 5 }}
                        md={{ span: 5 }}
                        sm={{ span: 10 }}
                        xs={{ span: 10 }}
                        className="rounded-lg shadow-lg  " >
                        <Card>
                            <Image src={promo1} />
                        </Card>
                    </Col>
                    <Col lg={{ span: 5 }}
                        md={{ span: 5 }}
                        sm={{ span: 10 }}
                        xs={{ span: 10 }}
                        className="rounded-lg shadow-lg" >
                        <Card >
                            <Image src={promo2} />
                        </Card>
                    </Col>
                    <Col lg={{ span: 5 }}
                        md={{ span: 5 }}
                        sm={{ span: 10 }}
                        xs={{ span: 10 }}
                        className="rounded-lg shadow-lg" >
                        <Card >
                            <Image src={promo3} />
                        </Card>
                    </Col>
                    <Col lg={{ span: 5 }}
                        md={{ span: 5 }}
                        sm={{ span: 10 }}
                        xs={{ span: 10 }}
                        className="rounded-lg shadow-lg" >
                        <Card >
                            <Image src={promo4} />
                        </Card>
                    </Col>
                </Row>
            </div >
        </div >
    )
}
