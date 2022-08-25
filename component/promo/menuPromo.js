// import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.variable.min.css'
import Image from 'next/image';
import backgroundimg from '../../public/images/background.jpg'
import React, { useState, useEffect } from 'react';
import { Col, Row, ConfigProvider } from 'antd';
import { CalendarTwoTone } from '@ant-design/icons'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import promoPict from '../../public/images/promo1.jpg'



export default function MenuPromo() {

    ConfigProvider.config({
        theme: {
            primaryColor: '#C78342',
        },
    });

    const [dataPromo, setDataPromo] = useState([])

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
            <div className='h-screen' >
                <Image src={backgroundimg} layout="fill" priority={true} />
                <div >
                    <Row align='middle' justify='center' style={{ height: "35vh" }}>
                        <Col>
                            <h3 className="font-medium text-black text-xl mt-10">Promo</h3>
                        </Col>
                    </Row>
                </div>
                <Row className="-mt-10 align-middle justify-center flex ml-10">
                    {dataPromo.map((promo) => {
                        return (
                            <div>
                                <Col lg={{ span: 20 }}
                                    md={{ span: 20 }}
                                    sm={{ span: 20 }}
                                    xs={{ span: 20 }}
                                    className="pt-5">
                                    <div className="rounded-lg shadow-lg bg-white  transition ease-in-out hover:-translate-y-1 h-96">
                                        <a
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            {/* <image src={promoPict} style={{ width: 350, height: 350 }} /> */}
                                            <Image
                                                loader={() => promo?.photo}
                                                priority={true}
                                                // src={promoPict}
                                                src={`https://ordercoffee-app.herokuapp.com/promo/image/${promo?.photo}`}
                                                unoptimized={true}
                                                width={350}
                                                height={350}
                                                style={{ borderRadius: 10 }} />
                                        </a>
                                        <Col span={24} offset={1}>
                                            <h2 className="text-gray-900 text-base font-medium mb-2">
                                                Promo  {promo?.name} {promo?.discount}
                                            </h2>
                                        </Col>
                                        <Row className=''>
                                            <Col offset={1}>
                                                <p className="text-gray-700 text-sm font-normal mb-5">
                                                    Berlaku dari :
                                                </p>
                                                <div className="-mt-4 font-semibold"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promo?.date}</div>
                                            </Col>
                                            <Col className='ml-12'>
                                                <p className="text-gray-700 text-sm font-normal mb-5">
                                                    Sampai dengan :
                                                </p>
                                                <div className="-mt-4 font-semibold"><CalendarTwoTone twoToneColor='rgba(155, 101, 7, 0.8)' /> {promo?.expired}</div>
                                            </Col>
                                        </Row>
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

