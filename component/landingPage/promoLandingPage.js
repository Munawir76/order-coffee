import React from 'react'
import "antd/dist/antd.css";
import 'antd/dist/antd.variable.min.css'
import { Carousel, Row, Col, ConfigProvider } from 'antd';
import { CalendarTwoTone } from '@ant-design/icons';
import Image from 'next/image';
import bg from '../../public/images/bgdua.jpg'
import { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default function Promo() {

    ConfigProvider.config({
        theme: {
            primaryColor: '#C78342',
        },
    });

    const styleCarousel = {
        color: '#fff',
        lineHeight: '30px',
        textAlign: 'start',
    }

    const [promoSatu, setPromoSatu] = useState()
    const [promoDua, setPromoDua] = useState()
    const [promoTiga, setPromoTiga] = useState()

    async function getDataPromo() {
        try {
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
            {/* <h3 className="text-center font-medium text-black text-xl">Promo</h3> */}
            <div style={{ position: "relative", }} >
                <Image src={bg} layout="fill" priority={true} className="filter: blur-xl" />
                <Carousel autoplaySpeed={0}>
                    <div>
                        <div style={styleCarousel}>
                            <Row justify="center space-x-8" className="mt-5">
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-2 rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1 bg-white">
                                    <Image
                                        loader={() => promoSatu?.photo}
                                        priority={true}
                                        src={`https://ordercoffee-app.herokuapp.com/promo/image/${promoSatu?.photo
                                            }`}
                                        unoptimized={true}
                                        width={350}
                                        height={350}
                                        style={{ borderRadius: 10 }} />
                                    <Col span={24} offset={1}>
                                        <h2 className="text-gray-900 text-base font-medium mb-2">
                                            Promo  {promoSatu?.name} {promoSatu?.discount?.toFixed(2) * 100 + '%'}
                                        </h2>
                                    </Col>
                                    <Row className=''>
                                        <Col offset={1}>
                                            <p className="text-gray-700 text-sm font-normal mb-3">
                                                Berlaku dari :
                                            </p>
                                            <div className="-mt-4 font-semibold text-black"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promoSatu?.date}</div>
                                        </Col>
                                        <Col className='ml-12 '>
                                            <p className="text-gray-700 text-sm font-normal mb-3">
                                                Sampai dengan :
                                            </p>
                                            <div className="-mt-4 mb-2 font-semibold text-black"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promoSatu?.expired}</div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-2 rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1 bg-white">
                                    <Image
                                        loader={() => promoDua?.photo}
                                        priority={true}
                                        src={`https://ordercoffee-app.herokuapp.com/promo/image/${promoDua?.photo
                                            }`}
                                        unoptimized={true}
                                        width={350}
                                        height={350}
                                        style={{ borderRadius: 10 }} />
                                    <Col span={24} offset={1}>
                                        <h2 className="text-gray-900 text-base font-medium mb-2">
                                            Promo  {promoDua?.name} {promoDua?.discount.toFixed(2) * 100 + '%'}
                                        </h2>
                                    </Col>
                                    <Row className=''>
                                        <Col offset={1}>
                                            <p className="text-gray-700 text-sm font-normal mb-3">
                                                Berlaku dari :
                                            </p>
                                            <div className="-mt-4 font-semibold text-black"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promoDua?.date}</div>
                                        </Col>
                                        <Col className='ml-12'>
                                            <p className="text-gray-700 text-sm font-normal mb-3">
                                                Sampai dengan :
                                            </p>
                                            <div className="-mt-4 font-semibold text-black"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promoDua?.expired}</div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-2 rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1 bg-white">
                                    <Image
                                        loader={() => promoTiga?.photo}
                                        priority={true}
                                        src={`https://ordercoffee-app.herokuapp.com/promo/image/${promoTiga?.photo
                                            }`}
                                        unoptimized={true}
                                        width={350}
                                        height={350}
                                        style={{ borderRadius: 10 }} />
                                    <Col span={24} offset={1}>
                                        <h2 className="text-gray-900 text-base font-medium mb-2">
                                            Promo  {promoTiga?.name} {promoTiga?.discount.toFixed(2) * 100 + '%'}
                                        </h2>
                                    </Col>
                                    <Row className=''>
                                        <Col offset={1}>
                                            <p className="text-gray-700 text-sm font-normal mb-3">
                                                Berlaku dari :
                                            </p>
                                            <div className="-mt-4 font-semibold text-black"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promoTiga?.date}</div>
                                        </Col>
                                        <Col className='ml-12'>
                                            <p className="text-gray-700 text-sm font-normal mb-3">
                                                Sampai dengan :
                                            </p>
                                            <div className="-mt-4 font-semibold text-black"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promoTiga?.expired}</div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div>
                        <div style={styleCarousel}>
                            <Row justify="center space-x-8" className=" mt-7 mb-10">
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-2 rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1 bg-white">
                                    <Image
                                        loader={() => promoSatu?.photo}
                                        priority={true}
                                        src={`https://ordercoffee-app.herokuapp.com/promo/image/${promoSatu?.photo
                                            }`}
                                        unoptimized={true}
                                        width={350}
                                        height={350}
                                        style={{ borderRadius: 10 }} />
                                    <Col span={24} offset={1}>
                                        <h2 className="text-gray-900 text-base font-medium mb-2">
                                            Promo  {promoSatu?.name} {promoSatu?.discount.toFixed(2) * 100 + '%'}
                                        </h2>
                                    </Col>
                                    <Row className=''>
                                        <Col offset={1}>
                                            <p className="text-gray-700 text-sm font-normal mb-3">
                                                Berlaku dari :
                                            </p>
                                            <div className="-mt-4 font-semibold text-black"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promoSatu?.date}</div>
                                        </Col>
                                        <Col className='ml-12'>
                                            <p className="text-gray-700 text-sm font-normal mb-3">
                                                Sampai dengan :
                                            </p>
                                            <div className="-mt-4 mb-2 font-semibold text-black"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promoSatu?.expired}</div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-2 rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1 bg-white">
                                    <Image
                                        loader={() => promoDua?.photo}
                                        priority={true}
                                        src={`https://ordercoffee-app.herokuapp.com/promo/image/${promoDua?.photo
                                            }`}
                                        unoptimized={true}
                                        width={350}
                                        height={350}
                                        style={{ borderRadius: 10 }} />
                                    <Col span={24} offset={1}>
                                        <h2 className="text-gray-900 text-base font-medium mb-2">
                                            Promo  {promoDua?.name} {promoDua?.discount.toFixed(2) * 100 + '%'}
                                        </h2>
                                    </Col>
                                    <Row className=''>
                                        <Col offset={1}>
                                            <p className="text-gray-700 text-sm font-normal mb-3">
                                                Berlaku dari :
                                            </p>
                                            <div className="-mt-4 font-semibold text-black"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promoDua?.date}</div>
                                        </Col>
                                        <Col className='ml-12'>
                                            <p className="text-gray-700 text-sm font-normal mb-3">
                                                Sampai dengan :
                                            </p>
                                            <div className="-mt-4 font-semibold text-black"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promoDua?.expired}</div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 5 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-2 rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1 bg-white">
                                    <Image
                                        loader={() => promoTiga?.photo}
                                        priority={true}
                                        src={`https://ordercoffee-app.herokuapp.com/promo/image/${promoTiga?.photo
                                            }`}
                                        unoptimized={true}
                                        width={350}
                                        height={350}
                                        style={{ borderRadius: 10 }} />
                                    <Col span={24} offset={1}>
                                        <h2 className="text-gray-900 text-base font-medium mb-2">
                                            Promo  {promoTiga?.name} {promoTiga?.discount.toFixed(2) * 100 + '%'}
                                        </h2>
                                    </Col>
                                    <Row className=''>
                                        <Col offset={1}>
                                            <p className="text-gray-700 text-sm font-normal mb-3">
                                                Berlaku dari :
                                            </p>
                                            <div className="-mt-4 font-semibold text-black"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promoTiga?.date}</div>
                                        </Col>
                                        <Col className='ml-12'>
                                            <p className="text-gray-700 text-sm font-normal mb-3">
                                                Sampai dengan :
                                            </p>
                                            <div className="-mt-4 font-semibold text-black"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promoTiga?.expired}</div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

