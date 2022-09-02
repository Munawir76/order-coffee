import React from "react";
import 'tailwindcss/tailwind.css'
import Image from "next/image";
import profil from '../../public/images/profilsatu.jpg'
import { Row, Col, Card } from 'antd'
import MenuFavorit from "./menuFavoritLandingPage";
import Promo from "./promoLandingPage";
import MenuTerbaikLandingPage from "./menuTerbaikLandingPage";
import login from '../../public/images/login.svg'
import checkout from '../../public/images/checkout.svg'
import shopping from '../../public/images/shopping.svg'
import payment from '../../public/images/payment.svg'



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
                                        <Card bordered={true} style={{ width: 400, height: 160, background: '#9B6847', borderColor: "white" }} >
                                            <p className="text-center text-white">Order Coffe berdiri sejak Tahun 2022.
                                                Bermula dari kegemaran kami menikmati kopi.
                                                Namun seiring berjalannya waktu kami tidak hanya sebatas menikmatinya.
                                                Tapi kami mencoba membuat dan menyampaikan rasa yang Kami nikmati pada pelanggan.</p></Card>

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
                                <Col span={12} className="bg-white h-96 py-32 border-b-2 border-[#9B6847] border-t-2">
                                    <Row flex justify="center" align="middle" >
                                        <Col className="transition ease-in-out hover:-translate-y-1" span={6}> <Image src={login} height={400} /></Col>
                                        <Col className="transition ease-in-out hover:-translate-y-1" span={6}><Image src={shopping} height={400} /></Col>
                                        <Col className="transition ease-in-out hover:-translate-y-1" span={6}> <Image src={checkout} height={400} /></Col>
                                        <Col className="transition ease-in-out hover:-translate-y-1" span={6}><Image src={payment} height={400} /></Col>
                                    </Row>
                                    <Row flex justify="center" align="middle" className="py-8 ml-20">
                                        <Col span={6}><h3>Login</h3></Col>
                                        <Col span={6}><h3>Shooping</h3></Col>
                                        <Col span={5}><h3>Checkout</h3></Col>
                                        <Col span={5} className="ml-12"><h3>Payment</h3></Col>
                                    </Row>
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