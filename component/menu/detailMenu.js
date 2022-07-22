import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import Navigasi from "../landingPage/navigasi"
import Footer from '../landingPage/footer';
import Image from 'next/image';
import MenuSatu from "../images/redvalvet.jpg"
import { Row, Col } from 'antd';

export default function DetaiMenu() {
    return (
        <div>
            <Navigasi />
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}