import React from 'react'
import "antd/dist/antd.css";
import { Carousel } from 'antd';
import Image from 'next/image';
import SlideSatu from "../../public/images/slideshow1.jpg"
import SlideDua from '../../public/images/slide1.jpg'
import SlideTiga from '../../public/images/slide2.jpg'

export default function Slide() {
    const styleCarousel = {

        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
    }
    return (
        <div>
            <Carousel autoplay>
                <div style={styleCarousel}>
                    <Image src={SlideSatu} />
                </div>
                <div style={styleCarousel}>
                    <Image src={SlideDua} />
                </div>
                <div style={styleCarousel}>
                    <Image src={SlideTiga} />
                </div>
            </Carousel>
        </div>
    );
}