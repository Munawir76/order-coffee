import React from "react";
import 'tailwindcss/tailwind.css'
import { Row, Col } from 'antd'
import MenuFavorit from "./menuFavoritLandingPage";
import Promo from "./promoLandingPage";
import MenuTerbaikLandingPage from "./menuTerbaikLandingPage";



export default function LandingPage() {
    return (
        <div>
            <Row align="middle">
                <Col >
                    <div className="mt-10">
                        <MenuTerbaikLandingPage />
                        <div className="mt-10">
                            <MenuFavorit />
                        </div>
                        <div className="mt-10">
                            <Promo />
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    )
}