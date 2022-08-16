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
                setDataPromo(res.data.items)
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
                            <h3 className=" text-end font-medium text-black text-xl mt-10">Promo</h3>
                        </Col>
                    </Row>
                </div>
                <Row justify="center space-x-8" align='middle' className="-mt-10">
                    {dataPromo.map((promo) => {
                        return (
                            <div>
                                <Col lg={{ span: 20 }}
                                    md={{ span: 20 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5">
                                    <div className="rounded-lg shadow-lg bg-white ">
                                        <a
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                loader={() => promo.photo}
                                                priority={true}
                                                src={`https://ordercoffee-app.herokuapp.com/promo/image/${promo.photo}`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                    </div>
                                </Col>
                            </div>
                        )
                    })
                    }
                </Row>
            </div >
        </div >
    )
}

