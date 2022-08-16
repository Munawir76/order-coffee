import React from 'react'
import "antd/dist/antd.css";
import { Carousel, Row, Col } from 'antd';
import Image from 'next/image';
import Promo1 from '../../public/images/promo1.jpg'
import Promo2 from '../../public/images/promo2.jpg'
import Promo3 from '../../public/images/promo3.jpg'
import { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default function Promo() {
    const styleCarousel = {
        color: '#fff',
        lineHeight: '30px',
        textAlign: 'start',
    }

    const [promoSatu, setPromoSatu] = useState([])
    const [promoDua, setPromoDua] = useState([])
    const [promoTiga, setPromoTiga] = useState([])

    async function getDataPromo() {
        try {
            // const getToken = localStorage.getItem("tokenCustomer")
            // const decode = jwt_decode(getToken)
            // console.log(getToken)
            await axios.get('https://ordercoffee-app.herokuapp.com/promo', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res.data.items, 'ini res api promo')
                setPromoSatu(res.data.items[0])
                setPromoDua(res.data.items[1])
                setPromoTiga(res.data.items[2])
            })
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getDataPromo()
    }, [])


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
                                    <Image
                                        loader={() => promoSatu.photo}
                                        priority={true}
                                        src={`https://ordercoffee-app.herokuapp.com/promo/image/${promoSatu?.photo
                                            }`}
                                        unoptimized={true}
                                        width={350}
                                        height={350}
                                        style={{ borderRadius: 10 }} />
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5 rounded-lg shadow-lg">
                                    <Image
                                        loader={() => promoDua.photo}
                                        priority={true}
                                        src={`https://ordercoffee-app.herokuapp.com/promo/image/${promoDua?.photo
                                            }`}
                                        unoptimized={true}
                                        width={350}
                                        height={350}
                                        style={{ borderRadius: 10 }} />
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5 rounded-lg shadow-lg">
                                    <Image
                                        loader={() => promoTiga.photo}
                                        priority={true}
                                        src={`https://ordercoffee-app.herokuapp.com/promo/image/${promoTiga?.photo
                                            }`}
                                        unoptimized={true}
                                        width={350}
                                        height={350}
                                        style={{ borderRadius: 10 }} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div>
                        <div style={styleCarousel}>
                            <Row justify="center space-x-8" className="bg-[#fff] mb-10">
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5 rounded-lg shadow-lg">
                                    <Image
                                        loader={() => promoSatu.photo}
                                        priority={true}
                                        src={`https://ordercoffee-app.herokuapp.com/promo/image/${promoSatu?.photo
                                            }`}
                                        unoptimized={true}
                                        width={350}
                                        height={350}
                                        style={{ borderRadius: 10 }} />
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5 rounded-lg shadow-lg">
                                    <Image
                                        loader={() => promoDua.photo}
                                        priority={true}
                                        src={`https://ordercoffee-app.herokuapp.com/promo/image/${promoDua?.photo
                                            }`}
                                        unoptimized={true}
                                        width={350}
                                        height={350}
                                        style={{ borderRadius: 10 }} />
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5 rounded-lg shadow-lg">
                                    <Image
                                        loader={() => promoTiga.photo}
                                        priority={true}
                                        src={`https://ordercoffee-app.herokuapp.com/promo/image/${promoTiga?.photo
                                            }`}
                                        unoptimized={true}
                                        width={350}
                                        height={350}
                                        style={{ borderRadius: 10 }} />
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

