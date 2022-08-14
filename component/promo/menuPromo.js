import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import backgroundimg from '../../public/images/background.jpg'
import React, { useState, useEffect } from 'react';
import { Col, Card, Row } from 'antd';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


export default function MenuPromo() {

    const [dataPromo, setDataPromo] = useState([])

    async function getDataPromo() {
        try {
            const getToken = localStorage.getItem("tokenCustomer")
            const decode = jwt_decode(getToken)
            // console.log(getToken)
            await axios.get('https://ordercoffee-app.herokuapp.com/promo', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res.data.data, 'ini res api promo')
                setDataPromo(res.data.data[0])
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
            <div className='h-screen' style={{ position: "relative" }}>
                <Image src={backgroundimg} layout="fill" priority={true} />
                <div >
                    <Row align='middle' justify='center' style={{ height: "35vh" }}>
                        <Col>
                            <h3 className=" text-end font-medium text-black text-xl">Promo</h3>
                        </Col>
                    </Row>
                </div>
                <Row justify="center space-x-8" align='middle' >
                    {dataPromo.map((promo) => {
                        return (
                            <div>
                                <Col lg={{ span: 5 }}
                                    md={{ span: 6 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="rounded-lg shadow-lg  " >
                                    <Card>
                                        <Image src={`https://ordercoffee-app.herokuapp.com/promo/image/${promo.photo}`}
                                            unoptimized={true}
                                            width={850}
                                            height={850}
                                            style={{ borderRadius: 10 }} />
                                    </Card>
                                </Col>
                            </div>

                        )
                    })
                    }

                    {/* <Col lg={{ span: 5 }}
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
                    </Col> */}
                </Row>
            </div >
        </div >
    )
}
