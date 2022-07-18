import React from 'react'
import "antd/dist/antd.css";
import { Carousel } from 'antd';
import Image from 'next/image';
import Bg1 from '../images/slideshow1.jpg'
import LoginLd from './loginLandingPage'

export default function Slide() {
    const styleCarousel = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
    }
    return (
        <div>
            <Carousel autoplay>
                <div style={styleCarousel}>
                    <Image src={Bg1} />
                </div>
                <div style={styleCarousel}>
                    <Image src={Bg1} />
                </div>
                <div style={styleCarousel}>
                    <Image src={Bg1} />
                </div>
            </Carousel>
            <LoginLd />
        </div>
    );
}