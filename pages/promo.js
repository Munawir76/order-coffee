import Head from 'next/head'
import 'antd/dist/antd.css'
import Navigasi from './component/landingPage/navigasi'
import MenuPromo from './component/promo/menuPromo'
import Footer from './component/landingPage/footer'

export default function Promo() {
    return (
        <div>
            <Navigasi />
            <MenuPromo />
            <Footer />
        </div>
    )
}
