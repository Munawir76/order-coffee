import React from 'react'
import "antd/dist/antd.css";
import { Carousel, Row, Col } from 'antd';
import Image from 'next/image';
import Promo1 from '../../public/images/promo1.jpg'
import Promo2 from '../../public/images/promo2.jpg'
import Promo3 from '../../public/images/promo3.jpg'

export default function Promo() {
    const styleCarousel = {
        color: '#fff',
        lineHeight: '30px',
        textAlign: 'start',
    }
    return (
        <div>
            <h3 className="text-center font-medium text-black text-xl">Promo</h3>
            <div>
                <Carousel autoplaySpeed={0}>
                    <div>
                        <div style={styleCarousel}>
                            <Row justify="center space-x-8" className="bg-[#fff] mb-10">
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5 rounded-lg shadow-lg">
                                    <Image src={Promo1} />
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5 rounded-lg shadow-lg">
                                    <Image src={Promo2} />
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5 rounded-lg shadow-lg">
                                    <Image src={Promo3} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div>
                        <div style={styleCarousel}>
                            <Row justify="center space-x-5" className="bg-[#fff] mb-10">
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5 rounded-lg shadow-lg">
                                    <Image src={Promo1} />
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5 rounded-lg shadow-lg">
                                    <Image src={Promo2} />
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5 rounded-lg shadow-lg">
                                    <Image src={Promo3} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Carousel>
            </div>
            <h4 className="pb-10 m-10 text-center font-medium text-black text-xl">"To be the pioneer of the best tavern is our dream"</h4>
        </div>
    );
}

