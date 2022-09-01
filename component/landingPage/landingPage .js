import React from "react";
import 'tailwindcss/tailwind.css'
import Image from "next/image";
import profil from '../../public/images/profilsatu.jpg'
import { Row, Col, Card } from 'antd'
import MenuFavorit from "./menuFavoritLandingPage";
import Promo from "./promoLandingPage";
import MenuTerbaikLandingPage from "./menuTerbaikLandingPage";



export default function LandingPage() {
    return (
        <div>
            <Row align="middle">
                <Col >
                    <div>
                        <MenuTerbaikLandingPage />
                        <div>
                            <MenuFavorit />
                        </div>
                        <div>
                            <Promo />
                        </div>
                        <div>
                            <Row align="middle">
                                <Col span={12} className="bg-[#9B6847] h-96">
                                    <div className="py-14 px-32">
                                        <Card bordered={true} style={{ width: 400, height: 160, backgroundColor: 'RGBA(0,67,73,1)', borderColor: 'white' }} >
                                            <p className="text-center">Order Coffe berdiri sejak Tahun 2022.
                                                Bermula dari kegemaran kami menikmati kopi.
                                                Namun seiring berjalannya waktu kami tidak hanya sebatas menikmatinya.
                                                Tapi kami mencoba membuat dan menyampaikan rasa yang Kami nikmati pada pelanggan.</p></Card>
                                        <div style={{
                                            width: 0,
                                            height: 0,
                                            borderLeft: '25px', solid: 'transparent',
                                            borderRight: '25px', solid: 'transparent',
                                            borderTop: '50px', solid: '#555'
                                        }}></div>
                                    </div>
                                    <Row className=" ml-48">
                                        <Col className="text-end">
                                            <div className="mt-2">
                                                <h2 className="font-bold text-lg text-gray-200">Bramantyo Rizky</h2>
                                                <h2 className="font-style: italic text-gray-800 ">Founder of Order Coffee</h2>
                                            </div>
                                        </Col>
                                        <Col className="px-4 text-end"><Image src={profil} width={80} height={80} /></Col>
                                    </Row>
                                </Col>
                                <Col span={12} className="bg-[#805339] h-96">

                                </Col>
                            </Row>
                        </div>
                        <h4 className="pb-10 m-10 text-center font-medium text-black text-xl">"To be the pioneer of the best tavern is our dream"</h4>
                    </div>
                </Col>
            </Row>
        </div >
    )
}